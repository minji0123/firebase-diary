/* eslint-disable*/

import {Link} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

import styled from './Nav.module.css';


export default function Nav(){
    const {logout} = useLogout();
    const {user} = useAuthContext();


    return(
        <nav className={styled.nav}>
            <h1 className={styled.tit}>Secret Note</h1>
            <ul className={styled.list_nav}>
                {!user &&
                    <>
                        <li><Link to="/login" >로그인</Link></li>
                        <li><Link to="/signup" >가입하기</Link></li>
                    </>
                }
                {user &&
                    <li>
                        <strong>환영합니다 {user.displayName} 님!</strong>
                        <Link to="/input" >글작성</Link>
                        <button type='button' onClick={logout}>로그아웃</button>
                    </li>
                }
            </ul>
        </nav>
    )
}