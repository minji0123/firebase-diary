/* eslint-disable*/

import { useAuthContext } from '../../hooks/useAuthContext';
import {useNavigate} from 'react-router-dom';
import { useFirestore } from "../../hooks/useFirestore";
import styles from './Detail.module.css';

export default function DetailForm({data}){
    
    const {user} = useAuthContext();


    const {deleteDocument} = useFirestore('diary');    
    const navigate = useNavigate();


    return(
        <>        
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        <div className={styles.btn}>
                            <h1>{item.title}</h1>
                            {item.uid === user.uid
                            ?<>
                                <button type='button' 
                                    onClick={() => {
                                                navigate(`/edit/${item.createdUqe}`);
                                            }}
                                >수정</button>
                                <button type='button' 
                                    onClick={() => {deleteDocument(item.id);
                                                    navigate('/');
                                            }}
                                >삭제</button>
                            </>
                            : ''
                            }
                        </div>
                        <p className={styles.left}>{item.displayName} 님</p>
                        <p className={styles.right}>{item.createdDate}</p>
                        <p className={styles.clear}></p>
                        <hr/>
                        <img  className={styles.img} src={item.downloadURL} />
                        <p>{item.text}</p>
                        
                    </div>
                )
            })}

        </>
    )   
}