import { Component, h, Prop,  Event, EventEmitter, State, Listen } from "@stencil/core";
import { Workflow } from "../../models";

@Component({
    tag: 'wf-json-viewer'
})

export class DisplayWorkflow {
    workflowBool: boolean = false;
    workflowJson: string ;
    activityDef: string = JSON.stringify([{"type": "Custom", "displayName": "Custom", "description": "Custom Activity", "category": "Custom", "designer": { "outcomes": ["Done"] }}]);
    @State() jsonWorkflow: Workflow;
    @State() title: string;
    // @Listen('displayWorkflow', {target:'body'})
    // displayWorkflowHandler(event: CustomEvent<Workflow>){
    //     this.jsonWorkflow=event.detail;
    //     this.workflowJson = JSON.stringify(this.jsonWorkflow);
    // }

    // componentWillRender(){
    //     console.log("In component will render");
    //     this.workflowJson = JSON.stringify(this.jsonWorkflow);
    // }
   
    render(){
        let xyz = '';
        if(this.workflowJson){
            xyz = <wf-designer-host
            id="temp"
            canvasHeight="300vh"
            pluginsData="PrimitiveActivities ControlFlowActivities EmailActivities HttpActivities ConsoleActivities MassTransitActivities TimerActivities"
            activityDefinitionsData={this.activityDef}
            workflowData={this.workflowJson}
            readonly={this.workflowBool}
        ></wf-designer-host>
        }
        else{
            xyz = null;
        }

        let mainContainer = (
            <div class="card">
                <input type="text" value={this.workflowJson}></input>
                {xyz}
            </div>

        )
        return mainContainer;
    }
}