import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
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
            <h1>React-hook-form 라이브러리 데모</h1>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <label htmlFor="username">이름</label>
                <input
                    type="text"
                    placeholder="username"
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
                {errors.username?.message}
                <br />
                <label htmlFor="email">이메일</label>
                <input
                    type="email"
                    placeholder="email(gmail)"
                    id="email"
                    {...register('email', {
                        required: '이메일을 입력해주세요',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: '유효한 이메일 주소를 입력해주세요',
                        },
                        validate: {
                            useGmail: (v) =>
                                v.includes('gmail.com') ||
                                'gmail로만 가입 가능합니다',
                        },
                    })}
                />
                <br />
                <label htmlFor="pwd">비밀번호</label>
                <input
                    type="password"
                    placeholder="password"
                    id="pwd"
                    {...register('password')}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <p>미리보기: {username}</p>
        </div>
    );
}

//////////////////////////////////////////////////////////////////
// #2-2
// Q) ...(?)register 왜 사용하는가?
/**
 * register 메서드는 input 요소와 연결하기 위한 속성들로 구성된 "객체"를 반환함.
 * ...연산자를 사용하여 한 번에 모든 속성 props를 전달
 * 반환 객체 ex) {name: undefined, onChange: ƒ, onBlur: ƒ, ref: ƒ}
 * {
 *      name: "name",
 *      onChange: () => {}, // 입력 값이 변경될 때 호출되는 함수
 *      onBlur: () => {},   // 입력 필드가 포커스를 잃을 때 호출되는 함수
 *      ref: () => {},      // 해당 DOM 요소에 대한 참조를 설정하는 함수
 * }
 */

// # 일반 폼 작성과 라이브러리의 차이.
/**
 * [일반 폼]
 * - 각 입력 필드의 상태를 useState로 관리해야 함.
 *   ㄴ 모든 입력 값의 상태를 관리하고 값이 바뀔때마다 전체 컴포넌트가 리렌더링 될 수 있음.
 * - 검증 로직을 직접 작성해야 함. (= 유효성 검사)
 * - 폼 제출 시, 각 입력 필드의 상태를 모아서 폼 데이터를 수집해야 함.
 * - 간단한 폼 작성에 적합.
 */

/**
 * [라이브러리]
 * - 코드의 간결화
 * - 비제어 컴포넌트 / 필요한 경우에만 리렌더링
 *   ㄴ 입력 필드 변경 시 전체 컴포넌트를 리렌더링하지 않고 필요한 필드만 리렌더링 함.
 *   ㄴ 리렌더링을 최소화하여 성능 개선.
 * - 다양한 검증 규칙 쉽게 설정
 * - 'handleSubmit' 하나로 모든 폼 데이터를 쉽게 관리.
 *    ㄴ 폼 제출 시 자동으로 입력 필드를 수집하여 하나의 객체로 만들어주기 때문에 데이터를 수동으로 관리할 필요 x
 * - 복잡하고 대규모 폼 작성에 적합.
 */

////////////////////////////////////////////////////////////////
// # 제어 vs 비제어 컴포넌트
/**
 * 제어 컴포넌트
 * - React 상태(state)로 값을 관리하는 컴포넌트
 * - 입력 필드의 값이 useState와 같은 상태 변수에 저장되고, 상태 변경에 따라 리렌더링 됨.
 * - 입력값을 실시간으로 제어할 수 있어 동적인 폼 처리에 유리함.
 */

/**
 * 비제어 컴포넌트
 * - DOM의 상태를 직접 참조하여 값을 관리하는 컴포넌트
 * - ref를 통해 입력값을 읽고 사용.
 * - 상태(state)관리가 필요 없고, 폼 데이터를 빠르게 수집할 때 유리함.
 * - 리렌더링이 적어 성능이 더 좋을 가능성이 높음.
 */

/**
 * React Hook From (RHF)
 * - 비제어 컴포넌트 기반 동작
 * - 폼 필드가 업데이트 될 때마다 전체 폼이 리렌더링 되지 않도록 성능 최적화.
 * - 필요할 때만 폼 필드의 상태를 업데이트하여 불필요한 렌더링을 줄이고,
 * - 결과적으로 애플리케이션의 성능을 향상시켜줍니다.
 * - 내부적으로 **ref**를 통해 DOM 요소에 접근하여 값 변화를 감지한다.
 */