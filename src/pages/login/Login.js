/* eslint-disable*/

import {useState} from 'react';

import styles from './Login.module.css'


export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        console.log(email, password);
    }

    return (
        <>
        <form className={styles.login_form} onSubmit={handleSubmit} >
            <fieldset>
                <legend>로그인</legend>

                <label htmlFor="myEmail">email : </label>
                <input type="email" id="myEmail" required onChange={handleData} value={email} />

                <label htmlFor="myPassWord">password : </label>
                <input type="password" id="myPassWord" required onChange={handleData} value={password} />

                <button type="submit" className={styles.btn}>로그인</button>
            </fieldset>
        </form>
        </>
        
    )
}