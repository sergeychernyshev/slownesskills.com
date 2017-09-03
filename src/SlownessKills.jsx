import React from "react";
import Slider from 'rc-slider/lib/Slider';
import numeral from "numeral";

import "rc-slider/assets/index.css";

const SECONDS_IN_ONE_HOUR = 60 * 60;
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
    const hours = numeral(this.state.views * this.state.slowness / SECONDS_IN_ONE_HOUR).format('0,0');
    const deaths = this.state.views * 12 * this.state.slowness / SECONDS_IN_HUMAN_LIFE;

    const deathsOneDigit = Math.round(10 * deaths) / 10;

    let hoursMessage = (
      <p>
        takes away<br/>
        <b className="text-danger">{hours}</b><br/>
        hours per month
      </p>
    );

    let deathsMessage;
    if (this.state.views === 0) {
      hoursMessage = '';
      deathsMessage = <span>Speed doesn&apos;t matter if nobody looks at your site</span>;
    } else if (deathsOneDigit >= 1 && deathsOneDigit < 2) {
      deathsMessage = (
        <p>
          enough to kill<br />
          <b className="text-danger">one person</b><br />
          every year
        </p>
      );
    } else if (deathsOneDigit >= 2) {
      deathsMessage = (
        <p>
          enough to kill<br />
          <b className="text-danger">{Math.round(deaths)} people</b>
          <br />
          every year
        </p>
      );
    } else if (deaths > 0.01) {
      deathsMessage = (
        <p>
          enough to kill<br />
          <b className="text-danger">one person</b>
          <br />
          every <b className="text-danger">{Math.round(10 / deaths) / 10}</b> years
        </p>
      );
    } else {
      hoursMessage = '';
      deathsMessage = (
        <p className="text-success">
          Your site seems to be fast enough for people to survive
        </p>
      );
    }

    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Slowness Kills</h1>
          <p>When you build slow sites, you take time out of people&apos;s lives.</p>
        </div>

        <section style={{textAlign: "center", fontSize: "xx-large"}}>
          <div className="row">
            <div className="col-sm-6">
              <div>
                <p>
                  Monthly Page Views<br />
                  <b className="text-warning">
                    {numeral(this.state.views).format('0,0a').toUpperCase()}
                  </b>
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
            <div className="col-sm-6">
              <div>
                <p>
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
          </div>

          <div className="row">
            {hoursMessage && <div className="col-sm-6" style={{marginTop: '2em'}}>
              {hoursMessage}
            </div>}
            <div className={hoursMessage ? "col-sm-6" : "col-sm-12"} style={{marginTop: '2em'}}>
              {deathsMessage}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SlownessKills;
