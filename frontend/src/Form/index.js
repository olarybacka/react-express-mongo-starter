import React, { Component } from 'react'

class Form extends Component {

  handleSubmit = (e) => {
    e.preventDefault
    console.log(e)
  }
  render() {
    return (
      <article>
        <form onSubmit={this.handleSubmit}>
          <input type="email"/>
        </form>
      </article>
    )
  }
}
export default Form
