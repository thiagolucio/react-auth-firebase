import React, {Component} from 'react';
import fire from './config/Fire';

require('firebase/auth');

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.delete = this.delete.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    logout() {
        fire.auth().signOut();
    }

    delete(e) {
        e.preventDefault();
        fire.auth().currentUser.delete().then(() => {
            console.log('delete successful!');
        }).catch(function (error) {
            console.error({error});
        })
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                        <span className="navbar-brand logo-font">JetCake</span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado"
                                aria-expanded="false" aria-label="Alterna navegação">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                            <div className="navbar-nav mr-auto mt-2 mt-lg-0"/>
                            <div className="form-inline my-2 my-lg-0">
                                <button className="btn btn-outline-warning my-2 my-sm-0" onClick={this.logout}>
                                    <i className="fas fa-sign-out-alt"></i> Logout
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="row">
                    <div className="col-12">
                        <div className="animated flipInX">
                            <div className="container bg-dark p-5 mt-5 shadow">
                                <h4 className="text-light"><i className="far fa-id-card fa-lg"/> User Account Info</h4>
                                <div className="card w-100">
                                    <div className="row">
                                        <div className="col-md-4 d-flex justify-content-center mt-5">
                                            <i className="fas fa-user-circle fa-9x"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-12">

                                                    </div>
                                                </div>
                                                <form>
                                                    <div className="input-group input-group-lg p-4">
                                                        <div className="input-group-append">
                                                            <span className="input-group-text brl-6"><i
                                                                className="fas fa-at"/></span>
                                                        </div>
                                                        <input value={this.state.email} onChange={this.handleChange}
                                                               type="email" name="email" className="form-control"
                                                               placeholder="email"/>
                                                    </div>
                                                    <div className="input-group input-group-lg pl-4 pr-4">
                                                        <div className="input-group-append">
                                                            <span className="input-group-text brl-6"><i
                                                                className="fas fa-key"/></span>
                                                        </div>
                                                        <input value={this.state.password} onChange={this.handleChange}
                                                               type="password" name="password" className="form-control"
                                                               placeholder="password"/>
                                                        {/*<button type="submit" onClick={this.forgotPassword} className="btn btn-warning btn-lg btn-block">*/}
                                                        {/*    Change password*/}
                                                        {/*</button>*/}
                                                    </div>
                                                    <div className="d-flex justify-content-center m-4">
                                                        <button type="submit" onClick={this.delete}
                                                                className="ml-2 btn-danger btn-lg btn-block">
                                                            Remove
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

