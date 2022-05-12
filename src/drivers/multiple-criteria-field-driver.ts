import {FieldDriver} from "../services/field-driver";
import {Activity, ActivityPropertyDescriptor, RenderResult, WorkflowExpression} from "../models";

export class MultipleCriteriaFieldDriver implements FieldDriver {
    displayEditor = (activity: Activity, property: ActivityPropertyDescriptor): RenderResult => {
      const name = property.name;
      const label = property.label;
      const value: WorkflowExpression = activity.state[name] || { expression: '', syntax: '' };
      //const multiline: boolean = (property.options || {}).multiline || false;
      const expressionValue = value.expression.replace(/"/g, '&quot;');
  
      return `<wf-multiple-criteria-field name="${name}" label="${label}" hint="${property.hint}" value="${expressionValue}" syntax="${value.syntax}"></wf-single-criteria-field>`;
    };
  
    updateEditor = (activity: Activity, property: ActivityPropertyDescriptor, formData: FormData) => {
      const expressionFieldName = `${property.name}.expression`;
      const syntaxFieldName = `${property.name}.syntax`;
      const expression = formData.get(expressionFieldName).toString().trim();
      const syntax = formData.get(syntaxFieldName).toString();
  
      activity.state[property.name] = {
        expression: expression,
        syntax: syntax
      };
    };
  
  }