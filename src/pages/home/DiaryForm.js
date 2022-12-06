/* eslint-disable*/

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useFirestore } from "../../hooks/useFirestore";
export default function DiaryForm({uid,displayName}) {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const { addDocument, response } = useFirestore("diary");// 컬랙션 이름 파라미터로 넣어주기
    const navigate = useNavigate(); // 리다이렉트

    const handleData = (event) => {
        if (event.target.id === 'tit') {
            setTitle(event.target.value);
        } else if (event.target.id === "txt") {
            setText(event.target.value);
        }
    }

    // 내용 입력 후 필드값 초기화
    useEffect(()=>{
        if(response.success){
            setText('');
            setTitle('');
        }
    },[response.success]);
   
    const handleSubmit = (event) => {
        event.preventDefault();
        addDocument({uid, displayName, title, text});// uid:작성한 유저 id
        navigate("/")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>일기 쓰기</legend>
                    <label htmlFor="tit">일기 제목 : </label>
                    <input id="tit" type='text' value={title} required onChange={handleData} />

                    <label htmlFor="txt">일기 내용 : </label>
                    <textarea id="txt" type='text' value={text} required onChange={handleData}></textarea>

                    <button  type="submit">저장하기</button>
                </fieldset>
            </form>
        </>
    )
}