/* eslint-disable*/

import {Link} from 'react-router-dom';

import styled from './Nav.module.css';


export default function Nav(){
    return(
        <nav className={styled.nav}>
            <h1 className={styled.tit}>Secret Note</h1>
            <ul className={styled.list_nav}>
                <li><Link to="/login" >로그인</Link></li>
                <li><Link to="/signup" >가입하기</Link></li>
            </ul>

        </nav>
    )
}