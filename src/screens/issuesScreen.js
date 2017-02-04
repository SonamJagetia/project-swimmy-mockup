import React from 'react';
import {observer} from 'mobx-react';
import views from '../config/views';
// import styles from './styles/loginScreen.css';
import AppWrapper from '../components/appWrapper'
import IssuesList from '../components/issuesList/index'

class IssuesScreen extends React.Component {
  render() {
    const {store} = this.props;

    return (
        <AppWrapper title='Issues' backButton>
            <p>What issues affect you the most?</p>
            <IssuesList issues={ store.issueStore.issues } />
            <p>Other issues</p>
            <button>Next</button>
        </AppWrapper>
    )
  }
}

export default observer(['store'], IssuesScreen);
