import React from "react";
import { Link } from "react-router";
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import { number, bool } from "prop-types";

import 'rc-slider/assets/index.css';

const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;

  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

handle.defaultProps = {
  value: 0,
  dragging: false,
  index: 0
};

handle.defaultProps = {
  dragging: false
}

handle.propTypes = {
  value: number.isRequired,
  dragging: bool,
  index: number.isRequired
};

class SlownessKills extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visitors: 10000000, // 10 million
      slowness: 1 // 1000 ms = 1 second
    };

    this.visitorSliderChange = this.visitorSliderChange.bind(this);
    this.slownessSliderChange = this.slownessSliderChange.bind(this);
  }

  visitorSliderChange(value) {
    this.setState({
      visitors: value
    });
  }

  slownessSliderChange(value) {
    this.setState({
      slowness: value
    })
  }

  calculateDeaths() {
    return this.state.visitors * this.state.slowness / 60 / 60 / 24 / 365;
  }

  render() {
    return <div className="container-fluid">
      <div className="page-header">
        <h2>
          Slowness Kills | <Link to={"/about"}>About</Link>
        </h2>
      </div>

      <div className="row">
        <div className="col-md-12">
          <p>
            How many monthly page views do you have on your site? <b>{this.state.visitors}</b>
          </p>

          <Slider
            step={1000000}
            defaultValue={10000000}
            value={this.state.visitors}
            min={0}
            max={10000000000}
            onChange={this.visitorSliderChange}
            handle={handle}
          />

          <p>
            How many seconds can be shaven off of each page load? <b>{this.state.slowness}</b>
          </p>

          <Slider
            step={0.1}
            defaultValue={1}
            value={this.state.slowness}
            min={0.1}
            max={10}
            onChange={this.slownessSliderChange}
            handle={handle}
          />

          <p>You kill <b>{this.calculateDeaths()}</b> people per year!</p>

        </div>
      </div>
    </div>
  }
}

export default SlownessKills;
