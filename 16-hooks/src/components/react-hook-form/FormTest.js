import React from 'react'
import { useForm } from 'react-hook-form';

export default function FormTest() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
} = useForm();

const onSubmit = (data) => {
  console.log('폼 제출 성공: ', data);
};

const onError = (err) => {
  console.log('폼 제출 실패: ', err);
};

const username = watch('username');

  return (
    <div>
      <h1>React-hook-test</h1>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label htmlFor="">이름 : </label>
        <input
                    type="text"
                    id="username"
                    {...register('username', {
                        required: '이름은 필수 항목입니다.',
                        minLength: {
                            value: 2,
                            message: '이름은 최소 2글자 이상 작성해주세요',
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9_]{5,15}$/,
                            message: '아이디는 영문, 숫자, 밑줄(_)로 5자 이상 15자 이하로 작성해야 합니다.',
                        },
                    })}
                />
        <br />
        <label htmlFor="">나이 : </label>
        <input type="text" />
        <br />
        <button type="submit"> 제출</button>

        </form>
    </div>
  )
}
