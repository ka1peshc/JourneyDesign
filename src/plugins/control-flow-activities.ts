import { OutcomeNames } from "../models/outcome-names";
import { WorkflowPlugin } from "../models";
import { ActivityDefinition } from "../models";
import pluginStore from '../services/workflow-plugin-store';

export class ControlFlowActivities implements WorkflowPlugin {
  private static readonly Category: string = "Control Flow";

  getName = (): string => "ControlFlowActivities";
  getActivityDefinitions = (): Array<ActivityDefinition> => ([
    this.fork(),
    this.ifElse(),
    this.join(),
    this.switch()
  ]);

  private fork = (): ActivityDefinition => ({
    type: "Fork",
    displayName: "Fork",
    description: "Developer's take copy of source code.",
    category: ControlFlowActivities.Category,
    icon: 'fas fa-code-branch fa-rotate-180',
    outcomes: 'x => x.state.branches',
    properties: [{
      name: 'branches',
      type: 'list',
      label: 'Branches',
      hint: 'Enter one or more names representing branches, separated with a comma. Example: Branch 1, Branch 2'
    }]
  });

  private ifElse = (): ActivityDefinition => ({
    type: "IfElse",
    displayName: "If/Else",
    description: "Condition station",
    category: ControlFlowActivities.Category,
    runtimeDescription: 'x => !!x.state.expression ? `Evaluate <strong>${ x.state.expression.expression }</strong> and continue execution depending on the result.` : x.definition.description',
    outcomes: [OutcomeNames.True, OutcomeNames.False],
    properties: [{
      name: 'expression',
      type: 'expression',
      label: 'Expression',
      hint: 'The expression to evaluate. The evaluated value will be used to switch on.'
    }]
  });

  private join = (): ActivityDefinition => ({
    type: "Join",
    displayName: "Join",
    description: "Merge workflow execution back into a single branch.",
    category: ControlFlowActivities.Category,
    icon: 'fas fa-code-branch',
    runtimeDescription: 'x => !!x.state.joinMode ? `Merge workflow execution back into a single branch using mode <strong>${ x.state.joinMode }</strong>` : x.definition.description',
    outcomes: [OutcomeNames.Done],
    properties: [{
      name: 'joinMode',
      type: 'text',
      label: 'Join Mode',
      hint: 'Either \'WaitAll\' or \'WaitAny\''
    }]
  });

  private switch = (): ActivityDefinition => ({
    type: "Switch",
    displayName: "Switch Cases",
    description: "Switch execution based on a given expression.",
    category: ControlFlowActivities.Category,
    icon: 'far fa-list-alt',
    runtimeDescription: 'x => !!x.state.expression ? `Switch execution based on <strong>${ x.state.expression.expression }</strong>.` : x.definition.description',
    outcomes: 'x => x.state.cases.map(c => c.toString())',
    properties: [{
      name: 'expression',
      type: 'expression',
      label: 'Expression',
      hint: 'The expression to evaluate. The evaluated value will be used to switch on.'
    },
      {
        name: 'cases',
        type: 'list',
        label: 'Cases',
        hint: 'A comma-separated list of possible outcomes of the expression.'
      }]
  });
}

pluginStore.add(new ControlFlowActivities());
