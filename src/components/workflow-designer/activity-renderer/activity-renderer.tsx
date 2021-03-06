import {Component, h, Host, Method, Prop} from '@stencil/core';
import {
  Activity,
  ActivityDefinition,
  ActivityDisplayMode
} from "../../../models";

import ActivityManager from '../../../services/activity-manager';
import DisplayManager from '../../../services/display-manager';

@Component({
  tag: 'wf-activity-renderer',
  styleUrl: 'activity-renderer.scss',
  shadow: false
})
export class ActivityRenderer {

  @Prop()
  activityDefinition: ActivityDefinition;

  @Prop()
  activity: Activity;

  @Prop()
  displayMode: ActivityDisplayMode = ActivityDisplayMode.Design;

  render() {

    if (!this.activity || !this.activityDefinition)
      return null;

    switch (this.displayMode) {
      case ActivityDisplayMode.Design:
        return this.renderDesigner();
      case ActivityDisplayMode.Edit:
        return this.renderEditor();
    }
  }  

  renderDesigner() {
    const activity = this.activity;
    const definition = this.activityDefinition;
    const result = ActivityManager.renderDesigner(activity, definition);
    const iconClass = `${result.icon} mr-1`;

    return (
      <div class="fl-rw">
        <div class="circleIcon"><h4><i class={iconClass}/></h4></div>
        
        <div>
        <h5>{result.title}</h5>
        <p innerHTML={result.description}/>
        </div>
        
      </div>
      // <div class="greenBox">
      //   <p innerHTML={result.description}></p>
      // </div>
    );
  }

  renderEditor() {
    const activity = this.activity;
    const definition = this.activityDefinition;
    const properties = definition.properties;

    return (
      <Host>
        {properties.map(property => {
          const html = DisplayManager.displayEditor(activity, property);
          return <div class="form-group" innerHTML={html}/>
        })
        }
      </Host>
    );
  }

  @Method()
  async updateEditor(formData: FormData): Promise<Activity> {
    const activity = {...this.activity};
    const definition = this.activityDefinition;
    const properties = definition.properties;
    
    for (const property of properties) {
      DisplayManager.updateEditor(activity, property, formData);
    }

    return activity;
  }
}
