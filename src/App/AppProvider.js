import React from 'react';

const cc = require("cryptocompare");

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    }
  }

  componentDidMount = () => {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList});
  }

  savedSettings() {
    let settingsData = JSON.parse(localStorage.getItem('cryptoDash'));

    if (!settingsData) {
      return {
        page: 'settings',
        firstVisit: true
      }
    }
    return {};
  }

  setPage = page => this.setState({page});

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });

    localStorage.setItem('cryptoDash', JSON.stringify({
      test: 'hello'
    }));
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        { this.props.children }
      </AppContext.Provider>
    )
  }
}