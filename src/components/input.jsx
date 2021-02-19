import { Component } from 'react';

export class Input extends Component {
  render() {

    if (this.props.type === 'text') {
      return (
        <>
          <label htmlFor={this.props.for}>{this.props.placeholder}</label>
          <input type={this.props.type} name={this.props.for} id={this.props.for} placeholder={this.props.placeholder} />
        </>
      )
    } else if (this.props.for === 'message') {
      return (
        <>
          <label htmlFor={this.props.for}>{this.props.placeholder}</label>
          <textarea name={this.props.for} id={this.props.for} cols={this.props.width} rows={this.props.height} placeholder={this.props.placeholder} />
        </>
      )
    } else if (this.props.type === 'button') {
      return (
        <>
          <input type={this.props.type} value={this.props.value} />
        </>
      )
    } else {
      return (null)
    }
  }
}