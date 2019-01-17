import React from 'react';
import ReactDOM from 'react-dom';


const divStyle = {
  transform: translate(20px,20px);
}

class RoboKy extends React.Component {
  constructor(props) {
    super(props);

    this.togglePose  = this.togglePose.bind(this);
    this.poseToUse  = this.poseToUse.bind(this);

    this.state = {
      pose: "stand"
    };

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

    return (
      <div style={divStyle} onClick={ this.togglePose }>
        <img className="roboky" src={ image_to_use } />
      </div>
    );
  }
}

export default RoboKy;
