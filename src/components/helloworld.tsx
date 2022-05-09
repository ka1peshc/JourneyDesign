import { Component, h} from "@stencil/core";

@Component({
    tag: 'wf-helloworld'
})

export class DisplayWorkflow { 
    render(){
        return (
        <div>
            <h1>Hello world</h1>
        </div>
        )
    }
}
