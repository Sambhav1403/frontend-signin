import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    //gets the token from local storage
    const token = localStorage.usertoken

    //contains the decoded token
    const decoded = jwt_decode(token)
    //then sets the state values recieved from data of database
    this.setState({
      first_name: decoded.first_name,
      email: decoded.email
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text" style={{"font-size":"30px", "margin-top": "70px"}} >PROFILE OF THE USER</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>User's Name: </td>
                <td>{this.state.first_name}</td>
              </tr>
              <br></br>
              <tr>
                <td>User's Email: </td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile