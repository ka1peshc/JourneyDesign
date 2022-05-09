 import { OutcomeNames } from "../models/outcome-names";
import { WorkflowPlugin } from "../models";
import { ActivityDefinition } from "../models";
import pluginStore from '../services/workflow-plugin-store';

export class PrimitiveActivities implements WorkflowPlugin {
  private static readonly Category: string = "Primitives";

  getName = (): string => "PrimitiveActivities";
  getActivityDefinitions = (): Array<ActivityDefinition> => (
    [ 
      this.setCommunication(),
      this.setIncentive(),
      this.setSingleCriteria(),
      this.setDelay(),
      this.setEnrolment(),
      this.setEject(),
      this.multipleCriteria()
    ]);

  private setCommunication = (): ActivityDefinition => ({
    type: "Communication",
    displayName: "Communication",
    description: "--select task--",
    category: PrimitiveActivities.Category,
    icon:"fas fa-envelope-open-text",
    properties: [
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
    icon:"fas fa-gift",
    properties: [{
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
    icon:"fas fa-filter",
    properties: [
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
    icon:"fas fa-clock",
    properties: [
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
    icon:"fas fa-sign-in-alt",
    properties: [],
    runtimeDescription: 'x => !!x.state.stateCount ? `<b>State: ${x.state.stateCount}</b> ` : x.definition.description',
    outcomes: [OutcomeNames.Done]
  });

  private setEject = (): ActivityDefinition => ({
    type: "Eject",
    displayName: "Eject",
    description: "Exit point of the workflow",
    category: PrimitiveActivities.Category,
    icon:"fas fa-eject",
    properties: [],
    runtimeDescription: 'x => !!x.state.stateCount ? `<b>State: ${x.state.stateCount}</b> ` : x.definition.description',
    outcomes: [OutcomeNames.Done]
  });

  private multipleCriteria = (): ActivityDefinition => ({
    type: "Multiple Criteria",
    displayName: "Multiple Criteria",
    description: "Select multiple criteria",
    category: PrimitiveActivities.Category,
    icon:"fas fa-code-branch",
    properties: [
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
