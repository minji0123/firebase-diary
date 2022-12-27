/* eslint-disable*/

import {  useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useCollection  } from "../../hooks/useCollection";
import { useCollectionDtl  } from "../../hooks/useCollectionDtl";

import styles from './Comment.module.css'

export default function Comment(){
    const [content, setContent] = useState("");
    const [diaryUqe, setDiaryUqe] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [uid, setUid] = useState("");


    //유저정보
    const {user} = useAuthContext();

    // url 파라미터 id
    let {id} = useParams();

    /*===============================================
    * 댓글 출력
    *===================================================*/
    const {documents, error} = useCollectionDtl("comment",["diaryUqe","==",id],"order");
    
    /*===============================================
    * 댓글 삭제
    *===================================================*/
    const {deleteDocument} = useFirestore('comment');    

    /*===============================================
    * 댓글 저장
    *===================================================*/
    const { addComment, response } = useFirestore("comment");// 컬랙션 이름 파라미터로 넣어주기

    const handleData = (event) => {
        if (event.target.id === 'content') {
            setContent(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addComment({uid, displayName, content,diaryUqe });
    } 

    useEffect(()=>{
        setDiaryUqe(id);
        setDisplayName(user.displayName);
        setUid(user.uid);
    });

    // 내용 입력 후 필드값 초기화
    useEffect(()=>{
        if(response.success){
            setContent("");
        }
    },[response]);


    return(
        <>

        <br/>
        <h2>Comments</h2>
        {documents && 
            <ul>
                {documents.map((a,i) => {
                    return(
                        <>
                            <li key={a.id}>
                                {a.content}
                            </li>
                            <div className={styles.reply_user}>
                                <p>{a.displayName} 님</p>
                                <p>{a.createdDate}</p>
                                {a.uid === user.uid
                                    ?<>
                                        {/* <button type='button' 
                                            onClick={() => {
                                                        navigate(`/edit/${item.createdUqe}`);
                                                    }}
                                        >수정</button> */}
                                        <button type='button' 
                                            onClick={() => {deleteDocument(a.id);
                                                    }}
                                        >삭제</button>
                                    </>
                                    : ''
                                }
                            </div>
                            <hr/>
                        </>
                    )
                })}
            </ul>
        }
        


        <form>
            <fieldset className={styles.fld_reply}>
                <legend className={styles.screen_out}>댓글쓰기 폼</legend>

                <div className={styles.reply_write}>
                    <label htmlFor="content" className={styles.lab_write}>내용</label>
                    <textarea name="content" id="content" className={styles.tf_reply}
                              placeholder="댓글을 입력해주세요" tabIndex="3"
                              required onChange={handleData} 
                              ></textarea>
                </div>
                <div>
                    <button className={styles.btn_enter} 
                            tabIndex="5"
                            onClick={handleSubmit}
                            >Send</button>
                </div>
            </fieldset>
        </form>


        </>
    )
}