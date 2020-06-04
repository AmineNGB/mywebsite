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
    const {name, languagesIcons, source, info, picture} = this.props.item;

    console.log(this.props);
    

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
          <i className="fas fa-plus-circle"></i>
        </span>

        {
          this.state.showInfo && (
            <div className="showInfos">
              <div className="infosContent">
                
                <div className="head">
                  <h2>{name}</h2>
                  <div className="sourceCode">
                    <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code source</a>
                  </div>
                </div>
                
                <p className="text">{info}</p>

                <div className="button return" onClick={this.handleExit}>Retourner sur la page</div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}