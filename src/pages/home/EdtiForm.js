/* eslint-disable*/

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useFirestore } from "../../hooks/useFirestore";

export default function EdtiForm({data}) {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [createdUqe, setCreatedUqe] = useState("");
    const [id, setId] = useState("");
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
        console.log(data)
        if(data){
            data.map((a,i) => {
                setTitle(a.title);
                setText(a.text);
                setCreatedUqe(a.createdUqe);
                setId(a.id);
                
            })
        }
    },data);

    const handleSubmit = (event) => {
        event.preventDefault();
        editDocument({ title, text},id);// uid:작성한 유저 id
        navigate(`/detail/${createdUqe}`)

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>수정하기</legend>
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