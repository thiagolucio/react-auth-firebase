import React, { Component } from 'react';
import fire from './config/Fire';
import './Login.css';
import logo from './justLogo.png';


class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
        document.getElementById("wrongUser").innerHTML = '<div class="alert alert-dismissible alert-danger animated flipInX"><button type="button" class="close" data-dismiss="alert"><i class="fas fa-times-circle"></i></button><strong>Your email not registered. Please Signup!</strong></div>';
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
        document.getElementById("wrongUser").innerHTML = '<div class="alert alert-dismissible alert-danger animated flipInX"><button type="button" class="close" data-dismiss="alert"><i class="fas fa-times-circle"></i></button><strong>Please, use a valid email format to register!</strong></div>';
      })
  }
  render() {
    return (
      <div className="App-header">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container animated flipInX">
              <img src={logo} className="brand_logo" alt="logo" />
            </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form>
                <div className="input-group input-group-lg p-4">
                  <div className="input-group-append">
                    <span className="input-group-text brl-6"><i className="fas fa-at"/></span>
                  </div>
                  <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" placeholder="email" />
                </div>
                <div className="input-group input-group-lg pl-4 pr-4">
                  <div className="input-group-append">
                    <span className="input-group-text brl-6"><i className="fas fa-key"/></span>
                  </div>
                  <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" placeholder="password" />
                </div>
                  <div className="d-flex justify-content-center m-4">
                    <button type="submit" onClick={this.login} className="btn btn-dark btn-lg btn-block">Login</button>
                  </div>
              </form>
            </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center text-dark">
                <div className="btn-group-horizontal mb-4">
                  <span className="badge badge-warning font13">Put your email and password to</span>
                  <button className="ml-2 btn btn-primary btn-sm" onClick={this.signup}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
            </div>
            <div className="alert animated flipInX text-danger" id="wrongUser"/>
          </div>
    );
  }
}
export default Login;

