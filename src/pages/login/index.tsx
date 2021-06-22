import React from 'react';
import styles from './index.less';
import classNames from 'classnames';

class Login extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
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
          'Login',
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
          value: 'Login',
          className: classNames(
            styles.input,
            styles.button,
            styles['neumorphism'],
            styles.submit,
          ),
        }),
      ),
    );
  }
}

export default Login;
