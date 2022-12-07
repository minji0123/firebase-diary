/* eslint-disable*/

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection';

import DetailForm from './DetailForm';
import styles from './Detail.module.css';

export default function Detail(props){

    //유저정보
    const {user} = useAuthContext();

    // url 파라미터 id
    let {id} = useParams();
    const {documents,error} = useCollection("diary",["createdUqe","==",id]);
    
    return (
        <main className={styles.detail_form}>
            <fieldset>
                {error && <strong>{error}</strong>}
                {documents ? <DetailForm data={documents}/> : <p>오류</p>}
            </fieldset>
        </main>
    )
    
}