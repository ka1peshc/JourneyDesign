import { OutcomeNames } from "../models/outcome-names";
import { WorkflowPlugin } from "../models";
import { ActivityDefinition } from "../models";
import pluginStore from '../services/workflow-plugin-store';

export class ConsoleActivities implements WorkflowPlugin {
  private static readonly Category: string = "Console";

  getName = (): string => "ConsoleActivities";
  getActivityDefinitions = (): Array<ActivityDefinition> => ([this.readLine(), this.writeLine()]);

  private readLine = (): ActivityDefinition => ({
    type: 'ReadLine',
    displayName: 'Read Process',
    description: 'Read process.',
    runtimeDescription: 'a => !!a.state.variableName ? `Read process and store into <strong>${ a.state.variableName }</strong>.` : \'Read text from standard in.\'',
    outcomes: [OutcomeNames.Done],
    category: ConsoleActivities.Category,
    icon: 'fas fa-terminal',
    properties: [{
      name: 'variableName',
      type: 'text',
      label: 'Process Name',
      hint: 'The name of the process to store the value into.'
    }]
  });

  private writeLine = (): ActivityDefinition => ({
    type: 'WriteLine',
    displayName: 'Write Process',
    description: 'Write a process.',
    category: ConsoleActivities.Category,
    icon: 'fas fa-terminal',
    runtimeDescription: `x => !!x.state.textExpression ? \`Write <strong>\${ x.state.textExpression.expression }</strong> to standard out.\` : x.definition.description`,
    outcomes: [OutcomeNames.Done],
    properties: [{
      name: 'textExpression',
      type: 'expression',
      label: 'Process',
      hint: 'The text to write.'
    }]
  });
}

pluginStore.add(new ConsoleActivities());
