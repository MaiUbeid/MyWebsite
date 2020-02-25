import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/profilepic.jpg"
              alt="maiImage"
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <div>
              <p>{resumeData.aboutme}</p>
              <button className="download">
                <a
                  href="https://drive.google.com/file/d/1vgAWfsfS8vqfA2GNDeMwI75nDhiqGVby/view?usp=sharing"
                  target="_blank"
                >
                  View Resume
                </a>
              </button>
            </div>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <ul>
                  <li>
                    <b>Name: </b>
                    {resumeData.name}
                  </li>
                  <li>
                    <b>Languages: </b> {resumeData.languages}
                  </li>
                  <li>
                    <b>Address: </b> {resumeData.address}
                  </li>
                  <li>
                    <b>Website: </b> {resumeData.website}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
