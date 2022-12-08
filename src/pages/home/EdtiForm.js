/* eslint-disable*/

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useFirestore } from "../../hooks/useFirestore";

export default function EdtiForm({data}) {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [uid, setUid] = useState("");
    const [displayName, setDisplayName] = useState("");
    const { editDocument, response } = useFirestore("diary");// 컬랙션 이름 파라미터로 넣어주기

    const navigate = useNavigate(); // 리다이렉트

    const handleData = (event) => {
        if (event.target.id === 'tit') {
            setTitle(event.target.value);
        } else if (event.target.id === "txt") {
            setText(event.target.value);
        }
    }

    // 기존 내용 넣어주기
    useEffect(()=>{
        if(data){
            data.map((a,i) => {
                setTitle(a.title);
                setText(a.text);
                setUid(a.uid);
                setDisplayName(a.displayName);
            })
        }

    });

    const handleSubmit = (event) => {
        event.preventDefault();
        editDocument({uid, displayName, title, text});// uid:작성한 유저 id

        alert('아직이양..😀');
        navigate("/")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>기록 수정</legend>
                    <label htmlFor="tit">제목 : </label>
                    <input id="tit" type='text' value={title} required onChange={handleData} />
                    <label htmlFor="txt">내용 : </label>
                    <textarea id="txt" type='text' value={text} required onChange={handleData}></textarea>
                    <button  type="submit">수정하기</button>
                </fieldset>
            </form>
        </>
    )
}