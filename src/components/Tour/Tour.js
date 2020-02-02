import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { id, city, price, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="guanajuato tour" />
          <span className="close-btn" onClick={()=>removeTour(id)}>
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h3>${price}</h3>
          <h3>{name}</h3>
          {this.state.showInfo && <p>{info}</p>}
          <span onClick={this.handleInfo}>
            <i className="fas fa-caret-square-down"></i>
          </span>
        </div>
      </article>
    );
  }
}
