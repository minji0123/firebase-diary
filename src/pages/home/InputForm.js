/* eslint-disable*/

import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { useFirestore } from "../../hooks/useFirestore";
export default function DiaryForm({uid,displayName}) {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [pic, setPic] = useState("");
    const { addDocument, response } = useFirestore("diary");// 컬랙션 이름 파라미터로 넣어주기
    const navigate = useNavigate(); // 리다이렉트

    const handleData = (event) => {
        if (event.target.id === 'tit') {
            setTitle(event.target.value);
        } else if (event.target.id === "txt") {
            setText(event.target.value);
        }
    }
   
    const handleSubmit = (event) => {
        event.preventDefault();
        addDocument({uid, displayName, title, text },pic);// uid:작성한 유저 id
        navigate("/")
    } 
    
    // 이미지 
    const fileInput = useRef(null);
  
    const handleButtonClick = (event) => {
      fileInput.current.click();
    };
    
    const handleChange = (event) => {
        setPic(event.target.files[0]);
        // console.log(event.target.files[0]);
    };
    return (
        <>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
                <fieldset>
                    <legend>기록하기</legend>
                    <label htmlFor="tit">제목 : </label>
                    <input id="tit" type='text' value={title} required onChange={handleData} />

                    <label htmlFor="txt">내용 : </label>
                    <textarea id="txt" type='text' value={text} required onChange={handleData}></textarea>

                    <input  type="file"
                            accept="image/*" 
                            ref={fileInput}
                            onChange={handleChange}
                            style={{ display: "none" }}
                             />

                    <input id="pic" type='text' value={pic} onChange={handleChange} disabled />

                    <p onClick={handleButtonClick}>사진 업로드</p>

                    <button onClick={handleSubmit} type="submit">저장하기</button>
                </fieldset>
            </form>
        </>
    )
}