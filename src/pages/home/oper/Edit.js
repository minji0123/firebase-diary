/* eslint-disable*/

import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../../hooks/useAuthContext'
import { useCollectionDtl } from '../../../hooks/useCollectionDtl'

import EdtiForm from '../EdtiForm.js'
import styles from '../Home.module.css';

export default function Edit() {

    //유저정보
    const {user} = useAuthContext();

    // url 파라미터 id
    let {id} = useParams();

    // 내용도 넣어줘야 되는데... 서버에서 불러와서 넣어줘야 하나 고민중...
    // PROPS 로 넣어줘야되나??

    // firebase 에 저장된 데이터 받아오기
    const {documents,error} = useCollectionDtl("diary",["createdUqe","==",id]);
    
    return (
        <main className={styles.cont}>
            <aside className={styles.side_menu}>
                <EdtiForm data={documents}></EdtiForm>
            </aside>           
        </main>
    )
}