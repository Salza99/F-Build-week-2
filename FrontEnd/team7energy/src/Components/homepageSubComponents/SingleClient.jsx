import { Component } from "react";

class SingleClient extends Component {
  render() {
    return (
      <div>
        <div>{this.props.client.contactName}</div>
      </div>
    );
  }
}
export default SingleClient;
