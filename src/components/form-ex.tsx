import React, { useEffect, useState } from 'react';
import useInputs from '@/hooks/use-inputs';

interface IProps {
  onSubmit: (email: string, password: string) => void;
}

const FormEx: React.FC<IProps> = ({ onSubmit }) => {
  const [{ email, password }, onChange, reset] = useInputs({
    email: '',
    password: '',
  });
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const onSubmitFn = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
    reset();
  };

  return (
    <form onSubmit={onSubmitFn}>
      <input type="email" placeholder="user@gmail.com" value={email} onChange={onChange} name="email" />
      <input type="password" value={password} onChange={onChange} name="password" />
      {disabled && <div>이메일과 비밀번호를 입력해주세요</div>}
      <button type="submit" disabled={disabled}>
        로그인
      </button>
    </form>
  );
};

export default FormEx;
