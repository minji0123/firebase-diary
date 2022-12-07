/* eslint-disable*/

import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection';
import DiaryList from './DiaryList';
import styles from './Home.module.css';

export default function Home() {

    //유저정보 받아서 diaryform 에 넣어줄거임(props로...)
    const {user} = useAuthContext();
    
    // firebase 에 저장된 데이터 받아오기
    // const {documents,error} = useCollection("diary",["uid","==",user.uid]);
    const {documents,error} = useCollection("diary");
    
    return (
        <main className={styles.cont}>
            <ul className={styles.content_list}>
                {error && <strong>{error}</strong>}
                {documents && <DiaryList diaries={documents}/> }
            </ul>
        </main>
    )
}
