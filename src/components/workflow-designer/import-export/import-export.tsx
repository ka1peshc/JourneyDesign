import { Component, Element, Event, EventEmitter, h, Method, Prop } from '@stencil/core';
import { ImportedWorkflowData, Workflow, WorkflowFormat, WorkflowFormatDescriptor } from "../../../models";
import YAML from 'json2yaml';
@Component({
  tag: 'wf-import-export',
  styleUrl: 'import-export.scss',
  shadow: false
})
export class ImportExport {

  blobUrl: string;
  fileInput: HTMLInputElement;

  @Element()
  el: HTMLElement;

  @Event({ eventName: 'import-workflow' })
  importEvent: EventEmitter<Workflow>;

  @Method()
  async export(designer: HTMLWfDesignerElement, formatDescriptor: WorkflowFormatDescriptor,wfName: string) {
    let blobUrl = this.blobUrl;

    if (!!blobUrl) {
      window.URL.revokeObjectURL(blobUrl)
    }
  
    const workflow = designer.workflow;
    const data = this.serialize(workflow, formatDescriptor.format);
    const blob = new Blob([data], { type: formatDescriptor.mimeType });

    this.blobUrl = blobUrl = window.URL.createObjectURL(blob);

    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', blobUrl);
    downloadLink.setAttribute('download', `${wfName}${ formatDescriptor.fileExtension }`);

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    if(wfName == ""){
      alert("Enter workflow name");
    }

    // if(wfName != "" ){
    //   this.sendWorkflow(data,wfName);
    // }
    // else{
    //   alert("Enter workflow name");
    // }
    
  }

  @Method()
  async import(data?: ImportedWorkflowData) {

    if (!data) {
      this.fileInput.click();
    } else {
      const workflow = JSON.parse(data.data) as Workflow;
      this.importEvent.emit(workflow);
    }
  }

  render() {
    return (
      <host>
        <input type="file" class="import-button" onChange={ this.importWorkflow } ref={ el => this.fileInput = el } />
      </host>
    )
  }

  private importWorkflow = () => {
    const file = this.fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async () => {
      const data = reader.result as string;
      const format: WorkflowFormat = 'json';
      const importedData: ImportedWorkflowData = {
        data: data,
        format: format
      };

      await this.import(importedData);
    };

    reader.readAsText(file);
  };

  private serialize = (workflow: Workflow, format: WorkflowFormat): any => {
    switch (format) {
      case 'json':
        return JSON.stringify(workflow);
      case 'yaml':
        return YAML.stringify(workflow);
      case 'xml':
        return JSON.stringify(workflow);
      default:
        return workflow;
    }
  };

  // private sendWorkflow = (data: string, titleName: string) => {
  //   console.log("In send workflow");
  //   console.log(data);

  //   //API call post method
  //   fetch("https://localhost:7003/api/JsonApi/SaveJsonData", {
  //   method: "POST",
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     "title": titleName,
  //     "useCaseBody": JSON.parse(data)
  //   }),
  //   }).then(response => response.json())
  //   // Displaying results to console
  //   .then(json => {
  //     console.log(json);
  //     alert("successfully inserted record");
  //   });

  // }
}
