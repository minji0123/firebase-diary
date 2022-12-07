/* eslint-disable*/

import {useNavigate} from 'react-router-dom';
import { useFirestore } from "../../hooks/useFirestore";

export default function DetailForm({data}){
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
                        <button type='button' onClick={() => {deleteDocument(item.id)
                                                                navigate('/');
                        }}>삭제</button>

                    </div>
                )
            })}

        </>
    )   
}