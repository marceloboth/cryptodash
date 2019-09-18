import React from 'react';
import {AppContext} from "../App/AppProvider";

function WelcomeMessageDiv() {
  return (
    <div>Welcome to CryptoDash, please select your favorite coins to begin {' '}</div>
  )
}
export default function ({firstVisit}) {
  return (
    <AppContext.Consumer>
      {
        ({firstVisit}) =>
          firstVisit ? <WelcomeMessageDiv/> : null
      }
    </AppContext.Consumer>
  )
}