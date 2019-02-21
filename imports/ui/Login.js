import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';





export default class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            error:""
        };
    }

    onSubmit(e){
        e.preventDefault();
            let email = this.refs.email.value;
            let password = this.refs.password.value;
            Meteor.loginWithPassword({email}, password, (err) => {
                console.log("Login Callback", err);
            });
            window.location.replace("signup");

    }

    render() {
        return (
          <div>
          <h3>Login to Fibonacci</h3>
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="email" ref="email" name="email" placeholder="Email"/>
                <input type="password" ref="password" name="password" placeholder="Password"/>
                {this.state.error ? <p>{this.state.error}</p> : undefined}
                <div>
                <button>Login</button>
                </div>
            </form>
                <a href="signup">Don't have an account? Sign up!</a>
          </div>
        )
      }
    }