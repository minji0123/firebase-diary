/* eslint-disable*/

import {useState} from 'react';
import { useLogin } from '../../hooks/useLogin';

import styles from './Login.module.css'


export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {error,isPending,login} = useLogin();


    const handleData = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value);
        } else if (event.target.type === "password") {
            setPassword(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        // submit 은 기본적으로 페이지 리로딩을 불러일으키기 때문에... 그런 현상을 막기 위해 적어준다.
        event.preventDefault();
        console.log('로그인: ',email, password);
        login(email, password);
    }

    return (
        <>
        <form className={styles.login_form} onSubmit={handleSubmit} >
            <fieldset >
                <legend>로그인</legend>

                <label htmlFor="myEmail">email : </label>
                <input type="email" id="myEmail" required onChange={handleData} value={email} />

                <label htmlFor="myPassWord">password : </label>
                <input type="password" id="myPassWord" required onChange={handleData} value={password} />
                {!isPending && 
                    <button type="submit" className={styles.btn}>로그인</button> }
                {isPending &&  
                    <strong>로그인 진행중...</strong> }
                {error && 
                    <strong>{error}</strong>}
            </fieldset>
        </form>
        </>
        
    )
}