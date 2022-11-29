/* eslint-disable*/

import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import Nav from './components/Nav';

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup  from './pages/signup/Signup';
import { appAuth } from './firebase/config';
import {useEffect} from "react";
import { useAuthContext } from './hooks/useAuthContext';


function App() {

  const {isAuthReady, user } = useAuthContext();
    // 파이어베이스가 실행되는 초기에 유저가 로그인 되어있는지 확인하는 로직은 비동기로 작동하기 때문에 
    // 시간이 필요함. 그래서 useEffect 에 넣어서 출력시켜줘야됨
  // useEffect(() => {
  //   appAuth.onAuthStateChanged((user) => {
  //       console.log('로그인상태: ',user);

  //   });
  // })
  
  /**
   * Navigate
   * 
   */
  return (
    <div className="App">
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
          </Routes>
        </BrowserRouter>
      )
      : "loading..."
      }
    </div>
  );
}

export default App
