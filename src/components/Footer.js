import React, { Component } from 'react';

class Footer extends Component {
    render() {

        return (
          <footer className="text-center text-light bg-primary">
          <div className="container pb-2">    
          </div>
          <div className="text-center text-light pt-2 pb-3">
            © 2022 Copyright @TeamRealm
            <a className="text-light" href="https:/TeamRealm.com/">
              <br/>All Right Reserved</a>
          </div>
        </footer>
        );
    }
}

export default Footer;