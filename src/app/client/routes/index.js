import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../containers/App';
import {HomePage, ChooseBankPage, LoginPage, StatementPage, ErrorPage} from '../containers';

export default function Routes(store) {
  return (
    <Route path="/" component={App} >
      <IndexRoute component={HomePage} />
      <Route path="choose-bank" title="Choose Bank" component={ChooseBankPage} />
      <Route path="login" title="Login to Bank" component={LoginPage} />
      <Route path="statement" title="Bank Statement" component={StatementPage} />
      <Route path="505" error="505" component={ErrorPage} />
      {/* path="*" Should stay at the bottom */}
      <Route path="*" error="404" component={ErrorPage} />
    </Route>
  );
}
