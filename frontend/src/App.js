import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Form from './Form'

class App extends Component {
  render() {
    return (
      <section className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Mongo starter</h1>
        </header>
        <Switch>
          <Route exact={true} path="/" component={Form}></Route>
        </Switch>
      </section>
    )
  }
}

export default App
