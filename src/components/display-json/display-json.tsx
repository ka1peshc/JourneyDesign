import { Component, h, Prop,  Event, EventEmitter, State } from "@stencil/core";
import { Workflow } from "../../models";
import { DataController } from "../../services/data";

export interface dashboardData {
    title: string;
    data: string;
}

@Component({
    tag: 'wf-tables-field',
    styleUrl: 'display-json.css',
    scoped: true
})

export class DisplayJson {
    workflowBool1: boolean = false;
    workflowJson1: string ;
    activityDef1: string = JSON.stringify([{"type": "Custom", "displayName": "Custom", "description": "Custom Activity", "category": "Custom", "designer": { "outcomes": ["Done"] }}]);
    @Prop({ reflect: true}) name: string;
    @Prop() value:boolean = false;
    @State() jsonResult: Workflow;
    @State() dashboard: { title: string; data: Workflow }[]=[];
    
    //Fetch data from server
    componentDidLoad() {
        fetch('https://localhost:7003/api/JsonApi/GetJsonData')
        .then(res => {
            return res .json();
          })
        .then(parsedRes => {
            console.log(parsedRes);
            this.dashboard = parsedRes.map(d => {
                return{
                    title: d['title'],
                    data: JSON.parse(d['json_String'])
                }
            })
        })
    }
    @Event({bubbles:true, composed:true}) displayWorkflow : EventEmitter<Workflow>;
    setJsonValue(data: Workflow, name: string){
        // const obj: Workflow = {"activities":[{"id":"989b6c41-2538-41c8-8488-e4e4730e9740","top":38,"left":25,"type":"WriteLine","state":{"textExpression":{"expression":"Fetch Customer from past 7 days","syntax":"Literal"},"Status":"begin"}},{"id":"80e23b8a-66eb-42ce-bf3e-6e681cc066fe","top":206,"left":28,"type":"WriteLine","state":{"textExpression":{"expression":"Filter customer whose bill total is greater than 2000","syntax":"Literal"},"Status":"begin"}},{"id":"1043666a-d448-46d1-b314-ecdd4ae3d858","top":103,"left":350,"type":"IfElse","state":{"expression":{"expression":"Check Customer opt for online service","syntax":"Literal"}}},{"id":"2568d00c-a7c9-416b-a838-17510f9807fb","top":20,"left":676,"type":"SendEmail","state":{"from":{"expression":"Shopper","syntax":"Literal"},"to":{"expression":"Customer/id","syntax":"Literal"},"subject":{"expression":"Get flat 500 off on shopping","syntax":"Literal"},"body":{"expression":"Avail 500 off on 2000 shopping","syntax":"Literal"},"Status":"begin"}},{"id":"078d5e32-4b6b-4439-8f73-716cbac4e3d5","top":155,"left":648,"type":"SendMassTransitMessage","state":{"messageType":"SMS","message":{"expression":"Avail 500 off on shopping of 2000","syntax":"Literal"},"Status":"begin"}},{"id":"011d4be0-8476-4e52-8160-a86f7193e553","top":54,"left":1018,"type":"TimerEvent","state":{"expression":{"expression":"Today's date + 4 days","syntax":"Literal"},"name":"WaitPeriod","title":"Wait period for customer purchase","description":"Wait for four days for customer to purchase.","Status":"begin"}},{"id":"deb89736-8605-4334-8525-39e81d824963","top":222,"left":999,"type":"IfElse","state":{"expression":{"expression":"Check customer purchase within four days or not","syntax":"Literal"}}},{"id":"b7378a21-72d7-459a-923c-127eb74b50ae","top":288,"left":632,"type":"SendMassTransitMessage","state":{"messageType":"SMS","message":{"expression":"send referral message","syntax":"Literal"},"Status":"begin"}},{"id":"03c226df-366a-4264-ab91-0cf46227e6bd","top":378,"left":943,"type":"SendMassTransitMessage","state":{"messageType":"SMS","message":{"expression":"Profile update link","syntax":"Literal"},"Status":"begin"}}],"connections":[{"sourceActivityId":"989b6c41-2538-41c8-8488-e4e4730e9740","destinationActivityId":"80e23b8a-66eb-42ce-bf3e-6e681cc066fe","outcome":"Done"},{"sourceActivityId":"80e23b8a-66eb-42ce-bf3e-6e681cc066fe","destinationActivityId":"1043666a-d448-46d1-b314-ecdd4ae3d858","outcome":"Done"},{"sourceActivityId":"1043666a-d448-46d1-b314-ecdd4ae3d858","destinationActivityId":"2568d00c-a7c9-416b-a838-17510f9807fb","outcome":"True"},{"sourceActivityId":"1043666a-d448-46d1-b314-ecdd4ae3d858","destinationActivityId":"078d5e32-4b6b-4439-8f73-716cbac4e3d5","outcome":"False"},{"sourceActivityId":"2568d00c-a7c9-416b-a838-17510f9807fb","destinationActivityId":"011d4be0-8476-4e52-8160-a86f7193e553","outcome":"Done"},{"sourceActivityId":"078d5e32-4b6b-4439-8f73-716cbac4e3d5","destinationActivityId":"011d4be0-8476-4e52-8160-a86f7193e553","outcome":"Done"},{"sourceActivityId":"011d4be0-8476-4e52-8160-a86f7193e553","destinationActivityId":"deb89736-8605-4334-8525-39e81d824963","outcome":"Done"},{"sourceActivityId":"deb89736-8605-4334-8525-39e81d824963","destinationActivityId":"b7378a21-72d7-459a-923c-127eb74b50ae","outcome":"True"},{"sourceActivityId":"deb89736-8605-4334-8525-39e81d824963","destinationActivityId":"03c226df-366a-4264-ab91-0cf46227e6bd","outcome":"False"}]};
        // this.workflowJson1 = JSON.stringify(data);
        console.log("In event Call");
        this.name = name;
        this.workflowJson1 = JSON.stringify(data);
        this.displayWorkflow.emit(data);
    }

    render(){
        
        const name = this.name;

        let workflowDisplay = (
        <div class="card">
        {
            this.workflowJson1 ? 
            <wf-designer-host
            id="temp"
            canvasHeight="300vh"
            pluginsData="PrimitiveActivities ControlFlowActivities EmailActivities HttpActivities ConsoleActivities MassTransitActivities TimerActivities"
            activityDefinitionsData={this.activityDef1}
            workflowData={this.workflowJson1}
            readonly={this.workflowBool1}></wf-designer-host> : null
        }
        </div>)

        let tableOfWorkflow = (
        <div class="tableContainer">
        <table class="table table-striped table-dark">
        <thead>
            <tr>
            <th>Use-Case name</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {this.dashboard.map(r => (
            <tr>
            <td>{r.title}</td>
            {/* <td>{r.data}</td> */}
            <td><button type="button" 
            class="btn btn-primary" 
            onClick={this.setJsonValue.bind(this,r.data, r.title)} 
            data-toggle="modal" data-target="#exampleModalCenter">View</button></td>
            </tr>
        ))}
        </tbody>
        </table>
        </div>)
         
        return (
            <div>
            {tableOfWorkflow}
            {/* {workflowDisplay} */}
            
            {/* {this.workflowJson1 ? 
            
            : null } */}
{/*             
            <div class="modal show" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{this.name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {workflowDisplay}
                    </div>
                </div>
            </div>
            </div> */}

            </div>
        );
    }

}