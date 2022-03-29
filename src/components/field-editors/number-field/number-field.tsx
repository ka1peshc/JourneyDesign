import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'wf-number-field',
  styleUrl: 'number-field.scss',
  shadow: false
})
export class NumberField {

  @Prop({reflect: true})
  name: string;

  @Prop({reflect: true})
  label: string;

  @Prop({reflect: true})
  value: string;

  @Prop({reflect: true})
  hint: string;

  render() {
    const name = this.name;

    return (
      <host>
        <label htmlFor={ name }>{ this.label }</label>
        <input id={ name } name={ name } type="number" class="form-control" value={ this.value } min="1"/>
        <small class="form-text text-muted">{ this.hint }</small>
      </host>);
  }
}
