/* eslint-disable*/

import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import Nav from './components/Nav';

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup  from './pages/signup/Signup';
import Input from './pages/home/oper/Input';
import Detail from './pages/detail/Detail';
import Edit from './pages/home/oper/Edit';
import { useAuthContext } from './hooks/useAuthContext';
import styled from './App.css';


function App() {

  const {isAuthReady, user } = useAuthContext();

  
  /**
   * Navigate
   * 
   */
  return (
    <div>
      {isAuthReady 
      ? (
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            {/* 로그인 되있으면 홈으로, 아니라면 로그인 화면으로 이동 */}
            <Route path='/' 
                   element={user
                            ? <Home />
                            : <Navigate replace={true} to="/login"/>}> 
            </Route>
            {/* 로그인이 되어있다면, 로그인 화면이나 회원가입 화면으로 가지 못하게... */}
            <Route path='/login' 
                   element={!user
                            ? <Login />
                            :<Navigate replace={true} to="/"/>}> 
            </Route>
            <Route path='/signup' 
                   element={!user
                            ?<Signup />
                          :<Navigate replace={true} to="/" />}> 
            </Route>
            {/* 로그인이 되어있지 않다면 글작성 못하게... */}
            <Route path='/input' 
                   element={user
                            ?<Input />
                          :<Navigate replace={true} to="/login" />}> 
            </Route>
            {/* detail 페이지 */}
            <Route path='/detail/:id' 
                   element={user
                      ?<Detail />
                      :<Navigate replace={true} to="/login" />}> 
            </Route>
            {/* edit 페이지 */}
            <Route path='/edit/:id' 
                   element={user
                      ?<Edit />
                      :<Navigate replace={true} to="/login" />}> 
            </Route>
            {/* 없는 페이지 */}
            <Route path="*" element={<div>없는 페이지에요</div>}/>
          </Routes>
        </BrowserRouter>
      )
      : "loading..."
      }
    </div>
  );
}

export default App
