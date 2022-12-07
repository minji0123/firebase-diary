/* eslint-disable*/

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection';

import styles from './Detail.module.css';

export default function Detail(props){

    //유저정보
    const {user} = useAuthContext();

    // url 파라미터 id
    let {id} = useParams();
    const {documents,error} = useCollection("diary",["createdUqe","==",id]);
    console.log(documents);
    
    return (
        <>

            <div className={styles.main}>
                <h1>{documents[0].title}</h1>
                <p>{documents[0].displayName} 님</p>
            </div>
            
        </>
    )
    
}