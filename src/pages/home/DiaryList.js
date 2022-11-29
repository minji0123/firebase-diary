/* eslint-disable*/

import styles from './Home.module.css'

// diaries는 props 로 전달되기 때문에 원래는 props.diaries 로 접근해야됨
// 근데 비구조화할당 쓸거임

export default function DiaryList({ diaries }) {
    return (
        <>

            {/* jsx 리스트에는 key 프로퍼티가 있어야합니다. Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다. 
            key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.  https://ko.reactjs.org/docs/lists-and-keys.html */}
            {diaries.map((item) => {
                return (
                    <li key={item.id}>
                        <strong className={styles.title}>{item.title}</strong>
                        <p className={styles.text}>{item.text}</p>
                    </li>
                )
            })}
        </>
    )
}