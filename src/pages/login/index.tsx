import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import Language from '@/components/Language';
import { history, injectIntl } from 'umi';
import { Button } from 'antd';
import { login } from '@/api/user';
import store from '@/store';
import { setLoginToken } from '@/store/user/index';

interface LoginParams {
  intl: any;
}

class Login extends React.Component<LoginParams> {
  state = {
    username: 'admin',
    password: '111111',
  };

  onSubmit() {
    const params = Object.assign({}, this.state);
    login(params).then((res) => {
      store.dispatch(setLoginToken(res.data.token));
      history.replace('/');
    });
  }

  render() {
    const { intl } = this.props;
    return React.createElement(
      'div',
      {
        className: styles.login,
      },
      React.createElement(
        'div',
        {
          className: styles['login-wrapper'],
        },
        React.createElement(
          'h2',
          {
            className: styles.title,
          },
          intl.formatMessage({
            id: 'login.login',
          }),
          React.createElement(
            Language,
            {
              className: styles['toggle-language'],
            },
            null,
          ),
        ),
        React.createElement('input', {
          type: 'text',
          placeholder: 'username',
          className: classNames(
            styles.input,
            styles.name,
            styles['neumorphism-inset'],
          ),
          autoComplete: 'off',
          defaultValue: this.state.username,
          onInput: (e: any) => {
            this.setState({
              username: e.target.value,
            });
          },
        }),
        React.createElement('input', {
          type: 'password',
          placeholder: 'password',
          className: classNames(
            styles.input,
            styles.password,
            styles['neumorphism-inset'],
          ),
          defaultValue: this.state.password,
          autoComplete: 'off',
        }),
        React.createElement('input', {
          type: 'button',
          value: intl.formatMessage({
            id: 'login.login',
          }),
          className: classNames(
            styles.input,
            styles.button,
            styles['neumorphism'],
            styles.submit,
          ),
          onClick: this.onSubmit.bind(this),
        }),
        React.createElement(
          'div',
          {
            className: styles.more,
          },
          React.createElement(
            Button,
            {
              type: 'text',
            },
            intl.formatMessage({
              id: 'login.register',
            }),
          ),
          React.createElement(
            Button,
            {
              type: 'text',
            },
            intl.formatMessage({
              id: 'login.forget',
            }),
          ),
        ),
      ),
    );
  }
}

export default injectIntl(Login);
