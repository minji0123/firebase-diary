/* eslint-disable*/

import {useState} from 'react';
import { useSignup } from '../../hooks/useSignup';

import styles from './Signup.module.css'

export default function Signup(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // displayName은 파이어베이스에서 유저 정보에 저장 할 수 있는 속성중 하나입니다. 
		// 다른 변수명을 사용하면 안된다. ( 참고 : https://firebase.google.com/docs/reference/js/auth.md#updateprofile)
    const [displayName, setDisplayName] = useState('');
    const {error, isPending, signup} = useSignup();// 만든 js 파일을 훅처럼 사용할 수 있음

    const handleData = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value);
        } else if (event.target.type === "password") {
            setPassword(event.target.value);
        } else if (event.target.type === "text") {
            setDisplayName(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        // submit 은 기본적으로 페이지 리로딩을 불러일으키기 때문에... 그런 현상을 막기 위해 적어준다.
        event.preventDefault();
        
        if(password.length < 6){
            alert('6자리 비밀번호를 입력해주세요');
        }else if(!document.writeln(isNaN(password))){
            alert('비밀번호는 숫자로 입력해주세요');
            location.reload();
        }else{
            signup(email,password,displayName);
        }
        
    }

    return (
        <>
            <form className={styles.signup_form} onSubmit={handleSubmit} >
                <fieldset>
                    <legend>회원가입</legend>

                    <label htmlFor="myEmail">email : </label>
                    <input type="email" id="myEmail" required onChange={handleData} value={email} />

                    <label htmlFor="myPassWord">password : </label>
                    <input type="password" id="myPassWord" required onChange={handleData} value={password} 
                    />

                    <label htmlFor="myNickName">닉네임 : </label>
                    <input type="text" id="myNickName" required onChange={handleData} value={displayName} />

                    <button type="submit" className="btn">회원가입</button>
                </fieldset>
            </form>
        </>
        
    )
}