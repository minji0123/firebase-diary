/* eslint-disable*/

import { useAuthContext } from '../../../hooks/useAuthContext'
import DiaryForm from '../InputForm.js'
import styles from '../Home.module.css';

export default function Input() {

    //유저정보 받아서 diaryform 에 넣어줄거임(props로...)
    const {user} = useAuthContext();
    // console.log(user);
    
    return (
        <main className={styles.cont}>
            <aside className={styles.side_menu}>
                <DiaryForm uid = {user.uid} displayName={user.displayName}></DiaryForm>
            </aside>           
        </main>
    )
}
