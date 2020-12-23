import React, { Component } from 'react'


class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             email : '',
             password : '',
             city : ''
        }
    }
    handleUsername = (event) => 
    {
        this.setState({
        username : event.target.value
        })
    }

    handleEmail = (event) => 
    {
        this.setState({
        email : event.target.value
        })
    }

    handlePassword = (event) => 
    {
        this.setState({
        password : event.target.value
        })
    }

    handleCity = (event) => 
    {
        this.setState({
        city : event.target.value
        })
    }
    
   handleSubmit = (event) =>
   {
    event.preventDefault(); 
    alert("Welcome "+ this.state.username)
   var u1 = document.getElementById("uname").value
    var em = document.getElementById("email").value
    var ps = document.getElementById("pass").value
    var ci = document.getElementById("city").value
    var result ="Your Form Details are : "+ "Username = "+ u1 + " , Email ID = "+em +" , Password = "+ ps + " , City = "+ ci
    document.getElementById('spanResult').innerHTML = result;

    
   }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div><h1>Registration From</h1></div>
                <br></br>
                <div>
                    <label> Username :  </label>
                    <input type="text" id="uname" value={this.state.username} onChange={this.handleUsername}/>
                </div>
                <br></br>
                <div>
                    <label> Email ID :    </label>
                    <input type="text" id="email" value={this.state.email} onChange={this.handleEmail}/>
                </div>
                <br></br>
                <div>
                    <label> Password :  </label>
                    <input type="password" id="pass" value={this.state.password} onChange={this.handlePassword}/>
                </div>
                <br></br>
                <div>
                    <label> City :  </label>
                    <input type="text" id="city" value={this.state.city} onChange={this.handleCity}/>
                </div>
                <br></br>
                <button type="submit">Register </button>
                <br></br>
                <br></br>
                <span id="spanResult"></span>
            </form>

        )
    }
}

export default Form