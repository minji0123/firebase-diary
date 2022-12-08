/* eslint-disable*/

import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollectionDtl } from '../../hooks/useCollectionDtl';

import DetailForm from './DetailForm';
import styles from './Detail.module.css';

export default function Detail(props){

    //유저정보
    const {user} = useAuthContext();

    // url 파라미터 id
    let {id} = useParams();
    const {documents,error} = useCollectionDtl("diary",["createdUqe","==",id]);
    
    return (
        <main className={styles.detail_form}>
            <fieldset>
                {error && <strong>{error}</strong>}
                {documents && <DetailForm data={documents}/>}
            </fieldset>
        </main>
    )
    
}