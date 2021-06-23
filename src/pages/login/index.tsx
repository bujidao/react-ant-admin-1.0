import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import Language from '@/components/Language';
import { injectIntl } from 'umi';
import { Button } from 'antd';

interface LoginParams {
  intl: any;
}

class Login extends React.Component<LoginParams> {
  constructor(props: any) {
    super(props);
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
        }),
        React.createElement('input', {
          type: 'password',
          placeholder: 'password',
          className: classNames(
            styles.input,
            styles.password,
            styles['neumorphism-inset'],
          ),
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
