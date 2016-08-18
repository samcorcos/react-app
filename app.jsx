import React from 'react'
import ReactDOM from 'react-dom'
import ReactNPMComponent from 'react-npm-component'

class App extends React.Component {
  componentDidMount() {
    console.log(this.anotherRef)
  }
  
  render() {
    return (
      <div ref={ref => { this.anotherRef = ref}}>
        My App
        <ReactNPMComponent />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
