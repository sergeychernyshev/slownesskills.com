import React from "react";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";

const SECONDS_IN_HUMAN_LIFE = 60 * 60 * 24 * 365 * 80;

class SlownessKills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      views: 20000000, // 10 million
      slowness: 10, // 1000 ms = 1 second
    };

    this.viewSliderChange = this.viewSliderChange.bind(this);
    this.slownessSliderChange = this.slownessSliderChange.bind(this);
  }

  viewSliderChange(value) {
    this.setState({
      views: value,
    });
  }

  slownessSliderChange(value) {
    this.setState({
      slowness: value,
    });
  }

  render() {
    const deaths = this.state.views * 12 * this.state.slowness / SECONDS_IN_HUMAN_LIFE;

    const deathsOneDigit = Math.round(10 * deaths) / 10;

    let message;
    if (this.state.views === 0) {
      message = <span style={{fontSize: "xx-large"}}>Speed doesn&apos;t matter if nobody looks at your site</span>;
    } else if (deathsOneDigit >= 1 && deathsOneDigit < 2) {
      message = (
        <span style={{fontSize: "xx-large"}}>
          You kill<br />
          <b className="text-danger">one person</b>
          <br />
          per year
        </span>
      );
    } else if (deathsOneDigit >= 2) {
      message = (
        <span style={{fontSize: "xx-large"}}>
          You kill<br />
          <b className="text-danger">{Math.round(deaths)} people</b>
          <br />
          per year
        </span>
      );
    } else if (deaths > 0.01) {
      message = (
        <span style={{fontSize: "xx-large"}}>
          You kill<br />
          <b className="text-danger">one person</b>
          <br />
          every <b className="text-danger">{Math.round(10 / deaths) / 10}</b> years
        </span>
      );
    } else {
      message = (
        <span className="text-success" style={{fontSize: "xx-large"}}>
          Your site seems to be fast enough for people to survive
        </span>
      );
    }

    let views;
    if (this.state.views >= 1000000000) {
      views = (
        <b className="text-warning">
          {Math.round(this.state.views / 10000000) / 10}B
        </b>
      );
    } else if (this.state.views >= 1000000) {
      views = (
        <b className="text-warning">
          {Math.round(this.state.views / 100000) / 10}M
        </b>
      );
    } else {
      views = (
        <b className="text-warning">
          {this.state.views}
        </b>
      );
    }

    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Slowness Kills</h1>
          <p>When you build slow sites, you take time out of people&apos;s lives.</p>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div style={{textAlign: "center"}}>
              <p style={{fontSize: "xx-large"}}>
                Monthly Page Views<br />
                {views}
              </p>

              <Slider
                step={1000000}
                value={this.state.views}
                min={0}
                max={100000000}
                onChange={this.viewSliderChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div style={{textAlign: "center"}}>
              <p style={{fontSize: "xx-large"}}>
                Page Load Time<br />
                <b className="text-warning">{this.state.slowness} seconds</b>
              </p>

              <Slider
                step={0.1}
                defaultValue={10}
                value={this.state.slowness}
                min={0.1}
                max={30}
                onChange={this.slownessSliderChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div style={{textAlign: "center"}}>
              {message}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SlownessKills;
