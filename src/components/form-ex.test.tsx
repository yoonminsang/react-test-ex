import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormEx from './form-ex';

const renderComplex = () => {
  const onLogin = jest.fn();
  const { getByText, queryByText, container } = render(<FormEx onLogin={onLogin} />);
  const email = () => container.querySelector('input[name="email"]') as HTMLInputElement;
  const password = () => container.querySelector('input[name="password"]') as HTMLInputElement;
  const loginBtn = () => getByText('로그인');
  const disabledDiv = () => queryByText('이메일과 비밀번호를 입력해주세요');
  const changeEmail = (str: string) => {
    userEvent.type(email(), str);
  };
  const changePassword = (str: string) => {
    userEvent.type(password(), str);
  };
  const onClick = () => {
    userEvent.click(loginBtn());
  };
  return { onLogin, email, password, loginBtn, disabledDiv, changeEmail, changePassword, onClick };
};

describe('<CountEx />', () => {
  it('should render default component', () => {
    const { email, password, loginBtn, disabledDiv } = renderComplex();
    expect(email()).toBeInTheDocument();
    expect(password()).toBeInTheDocument();
    expect(loginBtn()).toBeInTheDocument();
    expect(disabledDiv()).toBeInTheDocument();
  });

  it('should update onchange', () => {
    const { email, password, changeEmail, changePassword } = renderComplex();
    changeEmail('email');
    expect(email().value).toBe('email');
    changePassword('pwd');
    expect(password().value).toBe('pwd');
  });

  describe('disabled test', () => {
    it('input values are not filled', () => {
      const { loginBtn, disabledDiv } = renderComplex();
      expect(loginBtn()).toBeDisabled();
      expect(disabledDiv()).toBeInTheDocument();
    });

    it('password value are not filled', () => {
      const { loginBtn, changeEmail, disabledDiv } = renderComplex();
      changeEmail('email');
      expect(loginBtn()).toBeDisabled();
      expect(disabledDiv()).toBeInTheDocument();
    });

    it('email value are not filled', () => {
      const { loginBtn, changePassword, disabledDiv } = renderComplex();
      changePassword('pwd');
      expect(loginBtn()).toBeDisabled();
      expect(disabledDiv()).toBeInTheDocument();
    });
  });

  it('if disabled, disable submit', () => {
    const { loginBtn, onLogin } = renderComplex();
    expect(loginBtn()).toBeDisabled();
    expect(onLogin).not.toHaveBeenCalled();
  });

  it('should submit', () => {
    const { onLogin, changeEmail, changePassword, onClick, disabledDiv } = renderComplex();
    changeEmail('email');
    changePassword('pwd');
    expect(disabledDiv()).not.toBeInTheDocument();
    onClick();
    expect(onLogin).toHaveBeenCalled();
  });
});
