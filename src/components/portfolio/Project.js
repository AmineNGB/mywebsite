import React, { Component } from 'react';

export default class componentName extends Component {
  state = {
    showInfo: false
  }

  handleInfo = () => {
    this.setState({
      showInfo:!this.state.showInfo
    })
  }

  render() {
    const {name,address, languagesIcons, source, info, picture} = this.props.item;
  

    return (
      <div className="project">

        <div className="icons">
          {languagesIcons.map(icon =>
            <i className={icon} key={icon}></i>
          )}
        </div>
        <h3>{name}</h3>
        <img src={picture} onClick={this.handleInfo} alt=""/>
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-info-circle"></i>
        </span>

        {
          this.state.showInfo && (
            <div className="showInfos">
              <div className="infosContent">
                <div className="head">
                  <div className="cross" onClick={this.handleInfo}><i className="fas fa-times-circle"></i></div>
                  <p className="text">{info}</p>
                <div className="sourceCode">
                    <a href={address} rel="noopener noreferrer" target="_blank" className="button">Site web</a>
                    <a href={source} rel="noopener noreferrer" className="button" target="_blank">Repo Github</a>
                  </div>
              </div>
                </div> 
                
            </div>
          )
        }
      </div>
    );
  }
}