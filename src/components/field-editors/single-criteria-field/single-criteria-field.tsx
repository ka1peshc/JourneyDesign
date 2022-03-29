import { Component, h, Host, Prop, State, Watch } from '@stencil/core';

@Component({
    tag: 'wf-single-criteria-field',
    styleUrl: 'single-criteria-field.scss',
    shadow: false
})

export class SingleCriteriaField { 

  @Prop({ reflect: true })
  name: string;

  @Prop({ reflect: true })
  label: string;

  @Prop({ reflect: true })
  hint: string;

  @Prop({ reflect: true })
  value: string;

//   @Prop({ reflect: true })
//   multiline: boolean;

  @Prop({ reflect: true, mutable: true })
  syntax: string;

  private selectSyntax = (syntax) => this.syntax = syntax;

  private onSyntaxOptionClick = (e: Event, syntax: string) => {
    e.preventDefault();
    this.selectSyntax(syntax);
  };

  renderInputField = (cmd:string) => {
    const name = this.name;
    const value = cmd;
    return <input id={ name } name={ `${ name }.expression` } value={ value } type="text" class="form-control" />;
  };

  render() {
    const name = this.name;
    const label = this.label;
    const hint = this.hint;
    const syntaxes = ['Newsletter Opted','Profile Updated','other'];
    const selectedSyntax = this.syntax || 'welcome to program';

    return (
      <host>
        <label htmlFor={ name }>{ label }</label>
        <div class="input-group">
          <input name={ `${ name }.syntax` } value={ selectedSyntax } type="hidden"/>
          { this.renderInputField(selectedSyntax) }
          <div class="input-group-append">
            <button class="btn btn-primary dropdown-toggle" type="button" id={ `${ name }_dropdownMenuButton` } data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{ selectedSyntax }</button>
            <div class="dropdown-menu" aria-labelledby={ `${ name }_dropdownMenuButton` }>
              { syntaxes.map(x =>
                <a onClick={ e => this.onSyntaxOptionClick(e, x) } class="dropdown-item" href="#">{ x }</a>) }
            </div>
          </div>
        </div>
        <small class="form-text text-muted">{ hint }</small>
      </host>);
  }
}