/* eslint-disable*/

import {useNavigate} from 'react-router-dom';
import styles from './Home.module.css'

export default function DiaryList({ diaries }) {
    const navigate = useNavigate();

    let ClickToMoveDetail = (id) => {
        navigate(`/detail/${id}`)
    }

    return (
        <>
            {/* jsx 리스트에는 key 프로퍼티가 있어야합니다. Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다. 
            key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.  https://ko.reactjs.org/docs/lists-and-keys.html */}
            {diaries.map((item) => {
                return (
                    <li key={item.id}
                        onClick={() => ClickToMoveDetail(item.createdUqe)}
                    >
                        <img  className={styles.img} src={item.downloadURL} />
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.text}> {item.displayName ? item.displayName : '익명'}</p>
                        <p className={styles.time}> {item.createdDate} </p>
                        <p className={styles.clear}></p>
                    </li>
                )
            })}
        </>
    )
}