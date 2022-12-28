# 커뮤니티 토이 프로젝트

https://mydiary-b33c4.firebaseapp.com/

![](/assets/images/readme/2022-12-17-13-36-21.png)


## 사용 라이브러리 및 기술

### Front
#### React
<a href="#1" style="color:pink">react-router-dom</a>  
<a href="#2" style="color:pink">custom hook</a>  
<a href="#3" style="color:pink">useReducer</a>  

### Back & DB
#### Firebase

![](/assets/images/readme/2022-12-28-11-41-27.png)

<hr/>

<h3 id="1"> react-router-dom </h3>  

- 사용자가 요청한 url 에 맞는 페이지를 보여주도록 구현
- 사용자 상태에 따른 Route 화면 구현


```js

// App.js
//생략
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
//생략
```

<hr/>

<h3 id="2"> custom hook </h3>  

- 자주 사용될 데이터 저장/수정/삭제로직과 유저 회원가입/로그인 관리를 위해 custom hook 사용
- 코드와 로직의 반복을 최소화시킴

![](/assets/images/readme/2022-12-28-13-28-04.png)



<hr/>

<h3 id="3"> useReducer </h3>  


- 객체 데이터를 여러 상황에 맞게 다루기 위해 useReducer 훅 사용

```js

// useFirestore.js
//생략
const [response, dispatch] = useReducer(storeReducer, initState);


const storeReducer = (state, action) => {
    switch (action.type) {
        case 'isPending':
            return { isPending: true, document: null,            success: false, error: null }
        case 'addDoc':
            return { isPending: false, document: action.payload, success: true,  error: null }
        case 'editDoc':
            return { isPending: false, document: action.payload, success: true,  error: null }
        case 'deleteDoc':
            return { isPending: false, document: action.payload, success: true,  error: null }
        case 'error':
            return { isPending: false, document: null,           success: false, error: action.payload }
        default:
            return state
    }
}
//생략

```

<hr/>

