import React, { Component } from 'react'
import { post } from './form.service'
import './form.css'

class Form extends Component {

  state = {
    email: '',
    repeatEmail: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.emailsValid()) {
      const { email } = event.target.elements
      const person = {
        email: email.value
      }
      this.setState({ isLoading: true })
      post(person)
        .then((resp) => resp.json())
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  emailsValid = () => this.state.email === this.state.repeatEmail

  render() {
    return (
      <article>
        <form onSubmit={this.handleSubmit}>
          <div className="form-item">
            <label className="form-label" htmlFor="email">email:</label>
            <input className="form-input" onChange={this.handleInputChange} name="email" type="email" />
          </div>
          <div className="form-item">
            <label className="form-label" htmlFor="repeatEmail">repeat email:</label>
            <input className="form-input" onChange={this.handleInputChange} name="repeatEmail" type="email" />
          </div>
          {this.emailsValid() ? null : <div className="error"> Emails don't match </div>}
          <button className="btn-main" type="submit">Submit</button>
        </form>
      </article>
    )
  }
}
export default Form
