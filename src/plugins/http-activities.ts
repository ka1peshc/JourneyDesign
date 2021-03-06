import { OutcomeNames } from "../models/outcome-names";
import { WorkflowPlugin } from "../models";
import { ActivityDefinition } from "../models";
import pluginStore from '../services/workflow-plugin-store';

export class HttpActivities implements WorkflowPlugin {
  private static readonly Category: string = "HTTP";

  getName = (): string => "HttpActivities";
  getActivityDefinitions = (): Array<ActivityDefinition> => ([
    this.sendHttpRequest(),
    this.sendHttpResponse(),
    this.handleHttpRequest()
  ]);

  private sendHttpRequest = (): ActivityDefinition => ({
    type: "HttpRequestAction",
    displayName: "Send API Request",
    description: "Send an API request.",
    category: HttpActivities.Category,
    icon: 'fas fa-cloud',
    properties: [{
      name: 'url',
      type: 'text',
      label: 'URL',
      hint: 'The URL to send the HTTP request to.'
    },
      {
        name: 'method',
        type: 'select',
        label: 'Method',
        hint: 'The HTTP method to use when making the request.',
        options: {
          items: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD']
        }
      },
      {
        name: 'content',
        type: 'expression',
        label: 'Content',
        hint: 'The HTTP content to send along with the request.'
      }, {
        name: 'statusCodes',
        type: 'list',
        label: 'Status Codes',
        hint: 'A list of possible HTTP status codes to handle, comma-separated. Example: 200, 400, 404'
      }],
    outcomes: 'x => !!x.state.statusCodes ? x.state.statusCodes : []'
  });

  private handleHttpRequest = (): ActivityDefinition => ({
    type: "HttpRequestEvent",
    displayName: "Handle API Request",
    description: "Handle an incoming API request.",
    category: HttpActivities.Category,
    icon: 'fas fa-cloud',
    properties: [{
      name: 'path',
      type: 'text',
      label: 'Path',
      hint: 'The relative path that triggers this activity.'
    },
      {
        name: 'method',
        type: 'select',
        label: 'Method',
        hint: 'The API method that triggers this activity.',
        options: {
          items: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD']
        }
      },
      {
        name: 'readContent',
        type: 'boolean',
        label: 'Read Content',
        hint: 'Check if the API request content body should be read and stored as part of the API request model. The stored format depends on the content-type header.'
      }],
    runtimeDescription: `x => !!x.state.path ? \`<b>State: \${x.state.stateCount}</b><br/>Handle <strong>\${ x.state.method } \${ x.state.path }</strong>.\` : x.definition.description`,
    outcomes: [OutcomeNames.Done]
  });

  private sendHttpResponse = (): ActivityDefinition => ({
    type: "HttpResponseAction",
    displayName: "Send API Response",
    description: "Send an API response.",
    category: HttpActivities.Category,
    icon: 'fas fa-cloud',
    properties: [{
      name: 'statusCode',
      type: 'select',
      label: 'Status Code',
      hint: 'The HTTP status code to write.',
      options: {
        items: [
          { label: '2xx', options: [200, 201, 202, 203, 204] },
          { label: '3xx', options: [301, 302, 304, 307, 308] },
          { label: '4xx', options: [400, 401, 402, 403, 404, 405, 409, 410, 412, 413, 415, 417, 418, 420, 428, 429] }
        ]
      }
    },
      {
        name: 'content',
        type: 'expression',
        label: 'Content',
        hint: 'The HTTP content to write.',
        options: { multiline: true }
      },
      {
        name: 'contentType',
        type: 'select',
        label: 'Content Type',
        hint: 'The HTTP content type header to write.',
        options: {
          items: ['text/plain', 'text/html', 'application/json', 'application/xml']
        }
      },
      {
        name: 'responseHeaders',
        type: 'expression',
        label: 'Response Headers',
        hint: 'The headers to send along with the response. One \'header: value\' pair per line.',
        options: { multiline: true }
      }],
    runtimeDescription: `x => !!x.state.statusCode ? \`<b>State: \${x.state.stateCount}</b><br/>Send an HTTP <strong>\${ x.state.statusCode }</strong><br/><br/> \${ x.state.contentType }</strong><br/>\${ !!x.state.content ? x.state.content.expression ? x.state.content.expression.substr(0,100) + '...' : '' : '' }\` : x.definition.description`,
    outcomes: [OutcomeNames.Done]
  });
}

pluginStore.add(new HttpActivities());
