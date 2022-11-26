/* eslint-disable*/

import {Link} from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

import styled from './Nav.module.css';


export default function Nav(){
    const {logout} = useLogout();
    return(
        <nav className={styled.nav}>
            <h1 className={styled.tit}>Secret Note</h1>
            <ul className={styled.list_nav}>
                <li><Link to="/login" >로그인</Link></li>
                <li><Link to="/signup" >가입하기</Link></li>
                <li><button type='button' onClick={logout}>로그아웃</button></li>
            </ul>

        </nav>
    )
}