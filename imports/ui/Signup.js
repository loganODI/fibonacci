import React from 'react';
import { Link } from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';


export default class Signup extends React.Component{
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
                Accounts.createUser({email, password}, (err) =>{
                        console.log('Signup callback', err);
                });


        // this.setState({
        //         error: 'Something went wrong.'
        // });
    }

    render() {
      return (
        <div>
        <h3>Join Fibonacci</h3>
          <form onSubmit={this.onSubmit.bind(this)}>
              <input type="email" ref="email" name="email" placeholder="Email"/>
              <input type="password" ref="password" name="password" placeholder="Password"/>
              {this.state.error ? <p>{this.state.error}</p> : undefined}
              <div>
              <button>Create Account</button>
              </div>
          </form>
          <a href="login">already have an account?</a>
        </div>
      )
    }
}
