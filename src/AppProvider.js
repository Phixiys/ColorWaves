import React from "react";
import request from "./request";

export const AppContext = React.createContext();

class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.handleStateUpdate = state => {
      this.setState(state);
    };

    let self = this;

    this.state = {
      handleStateUpdate: this.handleStateUpdate,

      isFetching: false,
      data: [],
      pageLoader(page) {
        request(2, self.state.handleStateUpdate);
      }
    };
  }

  componentDidMount() {
    request(1, this.state.handleStateUpdate);
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
