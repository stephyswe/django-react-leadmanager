import React, { Component } from "react"
import { render } from "react-dom"

import Header from "./layout/Header"
import Dashboard from "./leads/Dashboard"

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </>
    )
  }
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
)
