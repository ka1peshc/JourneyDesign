/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Activity,
  ActivityDefinition,
  ActivityDisplayMode,
  ImportedWorkflowData,
  Workflow,
  WorkflowFormatDescriptor,
  WorkflowFormatDescriptorDictionary,
} from './models';
import {
  SelectItem,
} from './components/field-editors/select-field/models';

export namespace Components {
  interface WfActivityEditor {
    'activity': Activity;
    'activityDefinitions': Array<ActivityDefinition>;
    'show': boolean;
  }
  interface WfActivityPicker {
    'activityDefinitions': Array<ActivityDefinition>;
    'hide': () => Promise<void>;
    'show': () => Promise<void>;
  }
  interface WfActivityRenderer {
    'activity': Activity;
    'activityDefinition': ActivityDefinition;
    'displayMode': ActivityDisplayMode;
    'updateEditor': (formData: FormData) => Promise<Activity>;
  }
  interface WfBooleanField {
    'checked': boolean;
    'hint': string;
    'label': string;
    'name': string;
  }
  interface WfCommunicationField {
    'hint': string;
    'label': string;
    'name': string;
    'syntax': string;
    'value': string;
  }
  interface WfContextMenu {
    'handleContextMenuEvent': (e: MouseEvent) => Promise<void>;
    'target': HTMLElement | ShadowRoot;
    'targetSelector': string;
  }
  interface WfContextMenuItem {
    'text': any;
  }
  interface WfDelayField {
    'hint': string;
    'label': string;
    'name': string;
    'syntax': string;
    'value': string;
  }
  interface WfDesigner {
    'activityDefinitions': Array<ActivityDefinition>;
    'addActivity': (activityDefinition: ActivityDefinition) => Promise<void>;
    'canvasHeight': string;
    'getWorkflow': () => Promise<any>;
    'newWorkflow': () => Promise<void>;
    'readonly': boolean;
    'updateActivity': (activity: Activity) => Promise<void>;
    'workflow': Workflow;
  }
  interface WfDesignerHost {
    'activityDefinitionsData': string;
    'canvasHeight': string;
    'export': (formatDescriptor: WorkflowFormatDescriptor, wfName: string) => Promise<void>;
    'exportWorkflowData': () => Promise<Workflow>;
    'getWorkflow': () => Promise<any>;
    'import': () => Promise<void>;
    'newWorkflow': () => Promise<void>;
    'pluginsData': string;
    'readonly': boolean;
    'setWorkflowName': (name: string) => Promise<void>;
    'showActivityPicker': () => Promise<void>;
    'workflow': Workflow;
    'workflowData': string;
    'workflowName': string;
  }
  interface WfExportButton {
    'designerHostId': string;
    'workflowFormats': WorkflowFormatDescriptorDictionary;
    'workflowName': string;
  }
  interface WfExpressionField {
    'hint': string;
    'label': string;
    'multiline': boolean;
    'name': string;
    'syntax': string;
    'value': string;
  }
  interface WfHelloworld {}
  interface WfImportExport {
    'export': (designer: HTMLWfDesignerElement, formatDescriptor: WorkflowFormatDescriptor, wfName: string) => Promise<void>;
    'import': (data?: ImportedWorkflowData) => Promise<void>;
  }
  interface WfIncentiveField {
    'hint': string;
    'label': string;
    'name': string;
    'syntax': string;
    'value': string;
  }
  interface WfJsonViewer {}
  interface WfListField {
    'hint': string;
    'items': string;
    'label': string;
    'name': string;
  }
  interface WfNumberField {
    'hint': string;
    'label': string;
    'name': string;
    'value': string;
  }
  interface WfSelectField {
    'hint': string;
    'items': Array<SelectItem>;
    'label': string;
    'name': string;
    'value': string;
  }
  interface WfSingleCriteriaField {
    'hint': string;
    'label': string;
    'name': string;
    'syntax': string;
    'value': string;
  }
  interface WfTextField {
    'hint': string;
    'label': string;
    'name': string;
    'value': string;
  }
}

declare global {


  interface HTMLWfActivityEditorElement extends Components.WfActivityEditor, HTMLStencilElement {}
  var HTMLWfActivityEditorElement: {
    prototype: HTMLWfActivityEditorElement;
    new (): HTMLWfActivityEditorElement;
  };

  interface HTMLWfActivityPickerElement extends Components.WfActivityPicker, HTMLStencilElement {}
  var HTMLWfActivityPickerElement: {
    prototype: HTMLWfActivityPickerElement;
    new (): HTMLWfActivityPickerElement;
  };

  interface HTMLWfActivityRendererElement extends Components.WfActivityRenderer, HTMLStencilElement {}
  var HTMLWfActivityRendererElement: {
    prototype: HTMLWfActivityRendererElement;
    new (): HTMLWfActivityRendererElement;
  };

  interface HTMLWfBooleanFieldElement extends Components.WfBooleanField, HTMLStencilElement {}
  var HTMLWfBooleanFieldElement: {
    prototype: HTMLWfBooleanFieldElement;
    new (): HTMLWfBooleanFieldElement;
  };

  interface HTMLWfCommunicationFieldElement extends Components.WfCommunicationField, HTMLStencilElement {}
  var HTMLWfCommunicationFieldElement: {
    prototype: HTMLWfCommunicationFieldElement;
    new (): HTMLWfCommunicationFieldElement;
  };

  interface HTMLWfContextMenuElement extends Components.WfContextMenu, HTMLStencilElement {}
  var HTMLWfContextMenuElement: {
    prototype: HTMLWfContextMenuElement;
    new (): HTMLWfContextMenuElement;
  };

  interface HTMLWfContextMenuItemElement extends Components.WfContextMenuItem, HTMLStencilElement {}
  var HTMLWfContextMenuItemElement: {
    prototype: HTMLWfContextMenuItemElement;
    new (): HTMLWfContextMenuItemElement;
  };

  interface HTMLWfDelayFieldElement extends Components.WfDelayField, HTMLStencilElement {}
  var HTMLWfDelayFieldElement: {
    prototype: HTMLWfDelayFieldElement;
    new (): HTMLWfDelayFieldElement;
  };

  interface HTMLWfDesignerElement extends Components.WfDesigner, HTMLStencilElement {}
  var HTMLWfDesignerElement: {
    prototype: HTMLWfDesignerElement;
    new (): HTMLWfDesignerElement;
  };

  interface HTMLWfDesignerHostElement extends Components.WfDesignerHost, HTMLStencilElement {}
  var HTMLWfDesignerHostElement: {
    prototype: HTMLWfDesignerHostElement;
    new (): HTMLWfDesignerHostElement;
  };

  interface HTMLWfExportButtonElement extends Components.WfExportButton, HTMLStencilElement {}
  var HTMLWfExportButtonElement: {
    prototype: HTMLWfExportButtonElement;
    new (): HTMLWfExportButtonElement;
  };

  interface HTMLWfExpressionFieldElement extends Components.WfExpressionField, HTMLStencilElement {}
  var HTMLWfExpressionFieldElement: {
    prototype: HTMLWfExpressionFieldElement;
    new (): HTMLWfExpressionFieldElement;
  };

  interface HTMLWfHelloworldElement extends Components.WfHelloworld, HTMLStencilElement {}
  var HTMLWfHelloworldElement: {
    prototype: HTMLWfHelloworldElement;
    new (): HTMLWfHelloworldElement;
  };

  interface HTMLWfImportExportElement extends Components.WfImportExport, HTMLStencilElement {}
  var HTMLWfImportExportElement: {
    prototype: HTMLWfImportExportElement;
    new (): HTMLWfImportExportElement;
  };

  interface HTMLWfIncentiveFieldElement extends Components.WfIncentiveField, HTMLStencilElement {}
  var HTMLWfIncentiveFieldElement: {
    prototype: HTMLWfIncentiveFieldElement;
    new (): HTMLWfIncentiveFieldElement;
  };

  interface HTMLWfJsonViewerElement extends Components.WfJsonViewer, HTMLStencilElement {}
  var HTMLWfJsonViewerElement: {
    prototype: HTMLWfJsonViewerElement;
    new (): HTMLWfJsonViewerElement;
  };

  interface HTMLWfListFieldElement extends Components.WfListField, HTMLStencilElement {}
  var HTMLWfListFieldElement: {
    prototype: HTMLWfListFieldElement;
    new (): HTMLWfListFieldElement;
  };

  interface HTMLWfNumberFieldElement extends Components.WfNumberField, HTMLStencilElement {}
  var HTMLWfNumberFieldElement: {
    prototype: HTMLWfNumberFieldElement;
    new (): HTMLWfNumberFieldElement;
  };

  interface HTMLWfSelectFieldElement extends Components.WfSelectField, HTMLStencilElement {}
  var HTMLWfSelectFieldElement: {
    prototype: HTMLWfSelectFieldElement;
    new (): HTMLWfSelectFieldElement;
  };

  interface HTMLWfSingleCriteriaFieldElement extends Components.WfSingleCriteriaField, HTMLStencilElement {}
  var HTMLWfSingleCriteriaFieldElement: {
    prototype: HTMLWfSingleCriteriaFieldElement;
    new (): HTMLWfSingleCriteriaFieldElement;
  };

  interface HTMLWfTextFieldElement extends Components.WfTextField, HTMLStencilElement {}
  var HTMLWfTextFieldElement: {
    prototype: HTMLWfTextFieldElement;
    new (): HTMLWfTextFieldElement;
  };
  interface HTMLElementTagNameMap {
    'wf-activity-editor': HTMLWfActivityEditorElement;
    'wf-activity-picker': HTMLWfActivityPickerElement;
    'wf-activity-renderer': HTMLWfActivityRendererElement;
    'wf-boolean-field': HTMLWfBooleanFieldElement;
    'wf-communication-field': HTMLWfCommunicationFieldElement;
    'wf-context-menu': HTMLWfContextMenuElement;
    'wf-context-menu-item': HTMLWfContextMenuItemElement;
    'wf-delay-field': HTMLWfDelayFieldElement;
    'wf-designer': HTMLWfDesignerElement;
    'wf-designer-host': HTMLWfDesignerHostElement;
    'wf-export-button': HTMLWfExportButtonElement;
    'wf-expression-field': HTMLWfExpressionFieldElement;
    'wf-helloworld': HTMLWfHelloworldElement;
    'wf-import-export': HTMLWfImportExportElement;
    'wf-incentive-field': HTMLWfIncentiveFieldElement;
    'wf-json-viewer': HTMLWfJsonViewerElement;
    'wf-list-field': HTMLWfListFieldElement;
    'wf-number-field': HTMLWfNumberFieldElement;
    'wf-select-field': HTMLWfSelectFieldElement;
    'wf-single-criteria-field': HTMLWfSingleCriteriaFieldElement;
    'wf-text-field': HTMLWfTextFieldElement;
  }
}

declare namespace LocalJSX {
  interface WfActivityEditor extends JSXBase.HTMLAttributes<HTMLWfActivityEditorElement> {
    'activity'?: Activity;
    'activityDefinitions'?: Array<ActivityDefinition>;
    'onUpdate-activity'?: (event: CustomEvent<any>) => void;
    'show'?: boolean;
  }
  interface WfActivityPicker extends JSXBase.HTMLAttributes<HTMLWfActivityPickerElement> {
    'activityDefinitions'?: Array<ActivityDefinition>;
    'onActivity-picked'?: (event: CustomEvent<any>) => void;
  }
  interface WfActivityRenderer extends JSXBase.HTMLAttributes<HTMLWfActivityRendererElement> {
    'activity'?: Activity;
    'activityDefinition'?: ActivityDefinition;
    'displayMode'?: ActivityDisplayMode;
  }
  interface WfBooleanField extends JSXBase.HTMLAttributes<HTMLWfBooleanFieldElement> {
    'checked'?: boolean;
    'hint'?: string;
    'label'?: string;
    'name'?: string;
  }
  interface WfCommunicationField extends JSXBase.HTMLAttributes<HTMLWfCommunicationFieldElement> {
    'hint'?: string;
    'label'?: string;
    'name'?: string;
    'syntax'?: string;
    'value'?: string;
  }
  interface WfContextMenu extends JSXBase.HTMLAttributes<HTMLWfContextMenuElement> {
    'onContext-menu'?: (event: CustomEvent<any>) => void;
    'target'?: HTMLElement | ShadowRoot;
    'targetSelector'?: string;
  }
  interface WfContextMenuItem extends JSXBase.HTMLAttributes<HTMLWfContextMenuItemElement> {
    'text'?: any;
  }
  interface WfDelayField extends JSXBase.HTMLAttributes<HTMLWfDelayFieldElement> {
    'hint'?: string;
    'label'?: string;
    'name'?: string;
    'syntax'?: string;
    'value'?: string;
  }
  interface WfDesigner extends JSXBase.HTMLAttributes<HTMLWfDesignerElement> {
    'activityDefinitions'?: Array<ActivityDefinition>;
    'canvasHeight'?: string;
    'onAdd-activity'?: (event: CustomEvent<any>) => void;
    'onEdit-activity'?: (event: CustomEvent<any>) => void;
    'onWorkflowChanged'?: (event: CustomEvent<any>) => void;
    'readonly'?: boolean;
    'workflow'?: Workflow;
  }
  interface WfDesignerHost extends JSXBase.HTMLAttributes<HTMLWfDesignerHostElement> {
    'activityDefinitionsData'?: string;
    'canvasHeight'?: string;
    'onWorkflowChanged'?: (event: CustomEvent<any>) => void;
    'pluginsData'?: string;
    'readonly'?: boolean;
    'workflow'?: Workflow;
    'workflowData'?: string;
    'workflowName'?: string;
  }
  interface WfExportButton extends JSXBase.HTMLAttributes<HTMLWfExportButtonElement> {
    'designerHostId'?: string;
    'onExport'?: (event: CustomEvent<any>) => void;
    'workflowFormats'?: WorkflowFormatDescriptorDictionary;
    'workflowName'?: string;
  }
  interface WfExpressionField extends JSXBase.HTMLAttributes<HTMLWfExpressionFieldElement> {
    'hint'?: string;
    'label'?: string;
    'multiline'?: boolean;
    'name'?: string;
    'syntax'?: string;
    'value'?: string;
  }
  interface WfHelloworld extends JSXBase.HTMLAttributes<HTMLWfHelloworldElement> {}
  interface WfImportExport extends JSXBase.HTMLAttributes<HTMLWfImportExportElement> {
    'onImport-workflow'?: (event: CustomEvent<Workflow>) => void;
  }
  interface WfIncentiveField extends JSXBase.HTMLAttributes<HTMLWfIncentiveFieldElement> {
    'hint'?: string;
    'label'?: string;
    'name'?: string;
    'syntax'?: string;
    'value'?: string;
  }
  interface WfJsonViewer extends JSXBase.HTMLAttributes<HTMLWfJsonViewerElement> {}
  interface WfListField extends JSXBase.HTMLAttributes<HTMLWfListFieldElement> {
    'hint'?: string;
    'items'?: string;
    'label'?: string;
    'name'?: string;
  }
  interface WfNumberField extends JSXBase.HTMLAttributes<HTMLWfNumberFieldElement> {
    'hint'?: string;
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }
  interface WfSelectField extends JSXBase.HTMLAttributes<HTMLWfSelectFieldElement> {
    'hint'?: string;
    'items'?: Array<SelectItem>;
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }
  interface WfSingleCriteriaField extends JSXBase.HTMLAttributes<HTMLWfSingleCriteriaFieldElement> {
    'hint'?: string;
    'label'?: string;
    'name'?: string;
    'syntax'?: string;
    'value'?: string;
  }
  interface WfTextField extends JSXBase.HTMLAttributes<HTMLWfTextFieldElement> {
    'hint'?: string;
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }

  interface IntrinsicElements {
    'wf-activity-editor': WfActivityEditor;
    'wf-activity-picker': WfActivityPicker;
    'wf-activity-renderer': WfActivityRenderer;
    'wf-boolean-field': WfBooleanField;
    'wf-communication-field': WfCommunicationField;
    'wf-context-menu': WfContextMenu;
    'wf-context-menu-item': WfContextMenuItem;
    'wf-delay-field': WfDelayField;
    'wf-designer': WfDesigner;
    'wf-designer-host': WfDesignerHost;
    'wf-export-button': WfExportButton;
    'wf-expression-field': WfExpressionField;
    'wf-helloworld': WfHelloworld;
    'wf-import-export': WfImportExport;
    'wf-incentive-field': WfIncentiveField;
    'wf-json-viewer': WfJsonViewer;
    'wf-list-field': WfListField;
    'wf-number-field': WfNumberField;
    'wf-select-field': WfSelectField;
    'wf-single-criteria-field': WfSingleCriteriaField;
    'wf-text-field': WfTextField;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


