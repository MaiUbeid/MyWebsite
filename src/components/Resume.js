import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
                <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map(item => {
                    return (
                      <li>
                        {item.skillname}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map(item => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>
                        {item.title} {item.position ? `/ ${item.position}` : ''}
                      </h3>
                      <p className="info">
                        {item.CompanyName}
                        <br />
                        <em className="date">
                          {item.MonthOfStart}/{item.YearOfStart} -{' '}
                          {item.MonthOfLeaving}/{item.YearOfLeaving}
                        </em>
                        <em style={{ marginLeft: '50%' }}>{item.location}</em>
                      </p>
                      <p>{item.desc}</p>
                      {item.Achievements ? (
                        <p>
                          <b>Achievements / Tasks:</b> <br />{' '}
                          {item.Achievements}
                        </p>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

      </section>
    );
  }
}
