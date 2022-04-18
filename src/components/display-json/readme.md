# wf-tables-field



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type      | Default     |
| -------- | --------- | ----------- | --------- | ----------- |
| `name`   | `name`    |             | `string`  | `undefined` |
| `value`  | `value`   |             | `boolean` | `false`     |


## Events

| Event             | Description | Type                                                                  |
| ----------------- | ----------- | --------------------------------------------------------------------- |
| `displayWorkflow` |             | `CustomEvent<{ activities: Activity[]; connections: Connection[]; }>` |


## Dependencies

### Depends on

- [wf-designer-host](..\workflow-designer\designer-host)

### Graph
```mermaid
graph TD;
  wf-tables-field --> wf-designer-host
  wf-designer-host --> wf-activity-picker
  wf-designer-host --> wf-activity-editor
  wf-designer-host --> wf-import-export
  wf-designer-host --> wf-designer
  wf-activity-editor --> wf-activity-renderer
  wf-designer --> wf-context-menu
  wf-designer --> wf-context-menu-item
  wf-designer --> wf-activity-renderer
  style wf-tables-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
