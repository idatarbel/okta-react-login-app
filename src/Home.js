import React, {Component} from 'react';
import { withOktaAuth } from '@okta/okta-react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);   
  }

  async login() {
    await this.props.oktaAuth.signInWithRedirect();
  }

  async logout() {
    await this.props.oktaAuth.signOut();
  }

  render() {
    return (
      <>
        <Header 
          userName={ this.props.authState.idToken.claims.name} 
          isAuthenticated={this.props.authState?.isAuthenticated}
          oktaAuth={this.props.oktaAuth}></Header>

          <div className="container" id="page-container">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <h1 className="display-4">Page Title</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>

        <Footer></Footer>
      </>
    );
  }
});