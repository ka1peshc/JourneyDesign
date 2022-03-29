import { OutcomeNames } from "../models/outcome-names";
import { WorkflowPlugin } from "../models";
import { ActivityDefinition } from "../models";
import pluginStore from "../services/workflow-plugin-store";

export class CommunicationActivities implements WorkflowPlugin {
    private static readonly Category: string = "Primitives";

    getName = (): string => "PrimitiveActivities"
    getActivityDefinitions = (): Array<ActivityDefinition> => ([
        this.communication()
    ]);

    private communication = (): ActivityDefinition => ({
    type: "Comunication",
    displayName: "Communication",
    description: "Various user activity.",
    category: CommunicationActivities.Category,
    icon: 'fas fa-feather-alt',
    properties: [{
      name: 'message',
      type: 'text',
      label: 'Message',
      hint: 'The text to log.' 
    },
      {
        name: 'logLevel',
        type: 'text',
        label: 'Log Level',
        hint: 'The log level to use.'
      }],
    runtimeDescription: 'x => !!x.state.expression ? `Evaluate <strong>${ x.state.expression.expression }</strong> ` : x.definition.description',
    outcomes: [OutcomeNames.Done]
  });

}

pluginStore.add(new CommunicationActivities());