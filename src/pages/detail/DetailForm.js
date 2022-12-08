/* eslint-disable*/

import { useAuthContext } from '../../hooks/useAuthContext';
import {useNavigate} from 'react-router-dom';
import { useFirestore } from "../../hooks/useFirestore";

export default function DetailForm({data}){
    
    const {user} = useAuthContext();


    const {deleteDocument} = useFirestore('diary');    
    const navigate = useNavigate();


    return(
        <>        
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.displayName} 님</p>
                        <p>{item.createdDate}</p>
                        <p>{item.text}</p>
                        {item.uid === user.uid
                        ?<>
                            <button type='button' 
                                onClick={() => {deleteDocument(item.id);
                                                navigate('/');
                                        }}
                            >삭제</button>
                            <button type='button' 
                                onClick={() => {
                                            navigate(`/edit/${item.createdUqe}`);
                                        }}
                            >수정</button>
                        </>
                        : ''
                        }
                        
                    </div>
                )
            })}

        </>
    )   
}