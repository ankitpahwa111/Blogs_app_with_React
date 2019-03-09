import React, { Component } from 'react';
class Contact extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div class="col s12 m7">
          <h2 class="header center">CONTACT US </h2>
          <div class="card horizontal">
            <div class="card-image">
              <img src="https://lorempixel.com/100/190/nature/6"/>
          </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>You Can Contact Us Here</p>
                </div>
                <div class="card-action">
                  <a href="/">Talk To Us Via Email here</a>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
        )
      }
    
    
    }
    export default Contact;
