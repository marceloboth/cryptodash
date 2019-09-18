import React from 'react';

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