import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
              {/* homepage */}
            <h1 className="text-center" style={{"font-size":"50px", "text-align":"center" ,"padding":"35px"}}>WELCOME</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing