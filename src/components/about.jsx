import React, { Component } from 'react';
class About extends Component {

  render() {
    return (
      <React.Fragment>
        <div class="col s12 m7">
          <h2 class="header center">ABOUT US </h2>
          <div class="card horizontal">
            <div class="card-image">
              <img src="https://lorempixel.com/100/190/nature/6" />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>WE ARE DOPE WEBSITE MAKERS ... JOIN US </p>
              </div>
              <div class="card-action">
                <a href="/">MORE ABOUT US : </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

    )
  }


}
export default About;