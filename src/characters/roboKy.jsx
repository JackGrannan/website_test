import React from 'react';
import ReactDOM from 'react-dom';

import KeyHandler, { KEYPRESS } from 'react-key-handler';

class RoboKy extends React.Component {
  constructor(props) {
    super(props);

    this.togglePose  = this.togglePose.bind(this);
    this.poseToUse  = this.poseToUse.bind(this);

    this.moveBackward = this.moveBackward.bind(this);
    this.moveForward = this.moveForward.bind(this);

    this.state = {
      pose: "stand",
      x: 0,
      y: 0,
    };

  }

  moveBackward() {
    let x2 = Math.max((this.state.x - 6), 0);

    this.setState({
      pose: "walk",
      x: x2
    });
  }


  moveForward() {
    let x2 = this.state.x + 6;

    this.setState({
      pose: "walk",
      x: x2
    });
  }

  togglePose() {

      let pose = this.state.pose;

      let new_pose = ( pose === "stand" ) ? "walk"
                     : pose === "walk" ? "run" 
                     : pose === "run" ? "stand"
                     : "stand";

      this.setState({
        pose: new_pose
      });
      console.log('new pose is ', new_pose);
  }

  poseToUse() {

      //debugger;
      let pose = this.state.pose;

      let address = "/roboky/stand.gif";

      if ( pose === "run" )
      {
        address = "/roboky/run.gif";
      }
      else if ( pose === "walk" )
      {
        address = '/roboky/walk.gif';
      }
      return address;
  }

  render() {

      let image_to_use = this.poseToUse();

      const x = this.state.x;
      const y = this.state.y;

      const divStyle = {
        transform: `translate(${x}px, ${y}px)`
        //WebkitTransition: 'all', // note the capital 'W' here
        //msTransition: 'all' // 'ms' is the only lowercase vendor prefix
        //transform: translate(20px,20px);
      }


    return (
    <React.Fragment>
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="d"
        onKeyHandle={this.moveForward}
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="a"
        onKeyHandle={this.moveBackward}
      />

      <div style={divStyle} onClick={ this.togglePose } >
        <img className="roboky" src={ image_to_use } />
      </div>
    </React.Fragment>
    );
  }
}

export default RoboKy;
