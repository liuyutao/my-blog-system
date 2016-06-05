require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import NavBarComponent from './SideBarComponent';
import SideBarComponent from './SideBarComponent';

import {push } from 'react-router-redux';

import{connect} from 'react-redux';

import {accountAction,blogAction} from '../actions/';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {accountReady: false}
  }

  componentDidMount() {
    const {dispatch} = this.props;

    dispatch(accountAction.isAuthenticated()).
    then((json) => {
      if (!json.account.isLogin) dispatch(push('/login'));

      this.setState({accountReady: true});
    })
  }


  componentDidUpdate(prevProps){
    const {accountReady} = this.state;
    const {dispatch, account} = this.props;

    if(accountReady && prevProps.account.isLogin && !account.isLogin){
      dispatch(push('/login'));
    }

  }

  render() {
    const {accountReady} = this.state;

    const {account} = this.props;
    return (
      <div className="index">
        {account.isLogin ? <NavBarComponent/> : ''}
        {account.isLogin ? <SideBarComponent/> : ''}
        <section className={account.isLogin?'main':''}>
          {this.props.children}
        </section>

      </div>
    );
  }
}


AppComponent.defaultProps = {
  account: {
    isLogin: false,
    username: ''
  }
};


function mapStateToProps(state) {
  const {account} = state;
  return account;
}


export default connect(mapStateToProps)(AppComponent);
