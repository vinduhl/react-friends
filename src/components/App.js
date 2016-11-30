import React from "react";
import FriendsList from "./FriendsList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div>
        <h1>The <strong>facebook</strong> Friend Machine</h1>

        <div className="friends">
            <FriendsList />
        </div>
      </div>
    )
  }

}

export default App;
