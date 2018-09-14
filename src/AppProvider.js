import React from "react";
import request from "./request";

export const AppContext = React.createContext();

class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.handleStateUpdate = state => {
      this.setState(state);
    };

    this.state = {
      handleStateUpdate: this.handleStateUpdate,

      isFetching: false,
      data: []
    };
  }

  componentDidMount() {
    request(this.state);
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
