 import { OutcomeNames } from "../models/outcome-names";
import { WorkflowPlugin } from "../models";
import { ActivityDefinition } from "../models";
import pluginStore from '../services/workflow-plugin-store';

export class PrimitiveActivities implements WorkflowPlugin {
  private static readonly Category: string = "Primitives";

  getName = (): string => "PrimitiveActivities";
  getActivityDefinitions = (): Array<ActivityDefinition> => (
    [this.log(), 
      this.setVariable(), 
      this.setCommunication(),
      this.setIncentive(),
      this.setSingleCriteria(),
      this.setDelay(),
      this.setEnrolment(),
      this.setEject(),
      this.multipleCriteria()
    ]);

  private log = (): ActivityDefinition => ({
    type: "Log",
    displayName: "Activity logger",
    description: "Log any activity.",
    category: PrimitiveActivities.Category,
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
    runtimeDescription: 'x => !!x.state.message ? `Log <strong>${x.state.logLevel}: ${x.state.message}</strong>` : x.definition.description',
    outcomes: [OutcomeNames.Done]
  });

  private setVariable = (): ActivityDefinition => ({
    type: "SetVariable",
    displayName: "Set Variable",
    description: "Set a variable on the workflow.",
    category: PrimitiveActivities.Category,
    properties: [{
      name: 'variableName',
      type: 'text',
      label: 'Variable Name',
      hint: 'The name of the variable to store the value into.'
    }, {
      name: 'expression',
      type: 'expression',
      label: 'Variable Expression',
      hint: 'An expression that evaluates to the value to store in the variable.'
    }],
    runtimeDescription: 'x => !!x.state.variableName ? `${x.state.expression.syntax}: <strong>${x.state.variableName}</strong> = <strong>${x.state.expression.expression}</strong>` : x.definition.description',
    outcomes: [OutcomeNames.Done]
  });

  private setCommunication = (): ActivityDefinition => ({
    type: "Communication",
    displayName: "Communication",
    description: "Welcome to ",
    category: PrimitiveActivities.Category,
    icon:"fas fa-envelope-open-text",
    properties: [{
      name: 'stateCount',
      type:'number',
      label: 'State',
      hint: 'Sequence number of node in flow chart.'
    },
      {
      name: 'communication',
      type: 'communication',
      label: 'Communication Expression',
      hint: 'Set of statements'
    }],
    runtimeDescription: 'x => !!x.state.communication ? `<b>State: ${x.state.stateCount}</b><br/><strong>${ x.state.communication.expression }</strong> ` : x.definition.description',
    outcomes: [OutcomeNames.Done]
  });

  private setIncentive = (): ActivityDefinition => ({
    type: "Incentive",
    displayName: "Incentive",
    description: "incentive description ",
    category: PrimitiveActivities.Category,
    icon:"fas fa-envelope-open-text",
    properties: [{
      name: 'stateCount',
      type:'number',
      label: 'State',
      hint: 'Sequence number of node in flow chart.'
    },{
      name: 'incentive',
      type: 'incentive',
      label: 'Incentive Expression',
      hint: 'Set of statement involve regarding points'
    }],
    runtimeDescription: 'x => !!x.state.incentive ? `<b>State: ${x.state.stateCount}</b><br/><strong>${ x.state.incentive.expression }</strong> ` : x.definition.description',
    outcomes: [OutcomeNames.Done]
  });

  private setSingleCriteria = (): ActivityDefinition => ({
    type: "SingleCriteria",
    displayName: "Single Criteria",
    description: "Select criteria",
    category: PrimitiveActivities.Category,
    icon:"fas fa-envelope-open-text",
    properties: [{
      name: 'stateCount',
      type:'number',
      label: 'State',
      hint: 'Sequence number of node in flow chart.'
    },
      {
      name: 'singleCriteria',
      type: 'singleCriteria',
      label: 'Criteria Expression',
      hint: 'Set of statements'
    }],
    runtimeDescription: 'x => !!x.state.singleCriteria ? `<b>State: ${x.state.stateCount}</b><br/><strong>${ x.state.singleCriteria.expression }</strong> ` : x.definition.description',
    outcomes: [OutcomeNames.Done]
  });

  private setDelay = (): ActivityDefinition => ({
    type: "Delay",
    displayName: "Delay timer",
    description: "Add delay in workflow",
    category: PrimitiveActivities.Category,
    icon:"fas fa-hourglass-start",
    properties: [{
      name: 'stateCount',
      type:'number',
      label: 'State',
      hint: 'Sequence number of node in flow chart.'
    },
      {
      name: 'delay',
      type: 'delay',
      label: 'Delay timer',
      hint: 'Set of delay time period'
    }],
    runtimeDescription: 'x => !!x.state.delay ? `<b>State: ${x.state.stateCount}</b><br/><strong>${ x.state.delay.expression }</strong> ` : x.definition.description',
    outcomes: [OutcomeNames.Done]
  });

  private setEnrolment = (): ActivityDefinition => ({
    type: "Enrolment",
    displayName: "Enrolment",
    description: "Entry point of the workflow",
    category: PrimitiveActivities.Category,
    icon:"fas fa-envelope-open-text",
    properties: [{
      name: 'stateCount',
      type:'number',
      label: 'State',
      hint: 'Sequence number of node in flow chart.'
    }],
    runtimeDescription: 'x => !!x.state.stateCount ? `<b>State: ${x.state.stateCount}</b> ` : x.definition.description',
    outcomes: [OutcomeNames.Done]
  });

  private setEject = (): ActivityDefinition => ({
    type: "Eject",
    displayName: "Eject",
    description: "Exit point of the workflow",
    category: PrimitiveActivities.Category,
    icon:"fas fa-envelope-open-text",
    properties: [{
      name: 'stateCount',
      type:'number',
      label: 'State',
      hint: 'Sequence number of node in flow chart.'
    }],
    runtimeDescription: 'x => !!x.state.stateCount ? `<b>State: ${x.state.stateCount}</b> ` : x.definition.description',
    outcomes: [OutcomeNames.Done]
  });

  private multipleCriteria = (): ActivityDefinition => ({
    type: "Multiple Criteria",
    displayName: "Multiple Criteria",
    description: "Select multiple criteria",
    category: PrimitiveActivities.Category,
    icon:"fas fa-envelope-open-text",
    properties: [{
      name: 'stateCount',
      type:'number',
      label: 'State',
      hint: 'Sequence number of node in flow chart.'
    },
      {
      name: 'firstCriteria',
      type: 'firstCriteria',
      label: 'Criteria Expression',
      hint: 'Set of statements'
    }],
    runtimeDescription: 'x => !!x.state.stateCount ? `<b>State: ${x.state.stateCount}</b>` : x.definition.description',
    outcomes: [OutcomeNames.Done,OutcomeNames.Done]
  });
}

pluginStore.add(new PrimitiveActivities());
