import React, { Component } from 'react';

class Footer extends Component {
    render() {

        return (
          <div style={{ width: "100%" }}>
            <footer className="bg-dark text-center text-white footer-responsive">
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />

              <div className="text-center p-4" style={{ marginTop: "-20px" }}>
                <b>
                  <tt>
                    Copyright © 2021
                    <a
                      className="text-white"
                      href="#!"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Remedi.com{" "}
                    </a>
                    All Rights Reserved.
                  </tt>
                </b>
              </div>
            </footer>
          </div>
        );
    }
}

export default Footer;