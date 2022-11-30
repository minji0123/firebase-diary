/* eslint-disable*/
// 컬렉션을 만들고 데이터를 넘겨주는 작업을 위한 훅
import { useReducer } from "react"
import { appFireStore,timestamp } from "../firebase/config"
import { addDoc, deleteDoc,doc, collection } from "firebase/firestore"

// 우리가 받을 응답을 저장할 객체 (객체이기 때문에 리듀서로 관리)
// 상태를 관리할 때 error나 isPending을 useReducer로 한번에 관리

/**
 * document : 파이어스토어에 document의 생성을 요청하면 우리가 생성한 document를 반환
 *      파이어스토어의 데이터 저장 단위
 * isPending: 통신중인지 아닌지 상태
 * success : 요청에 대한 응답의 성공 유무
 */
const initState = {
    document: null,
    isPending: false,
    error: null,
    success: false
}

// 전달 받는 action에 따른 state 업데이트
const storeReducer = (state, action) => {
    /**case 마다 데이터가 다 달라서 spread operator 안쓰고 그냥 적음... */
    switch (action.type) {
        case 'isPending':
            return { isPending: true, document: null,            success: false, error: null }
        case 'addDoc':
            return { isPending: false, document: action.payload, success: true,  error: null }
        case 'deleteDoc':
            return { isPending: false, document: action.payload, success: true,  error: null }
        case 'error':
            return { isPending: false, document: null,           success: false, error: action.payload }
        default:
            return state
    }
}

// transaction: 우리가 데이터를 저장할 컬렉션(폴더)
export const useFirestore = (transaction) => {

    // response에 요청에 대한 firestore 의 응답 저장
    // 저장되는 데이터 === 저장 성공 또는 요청한 문서 데이터(객체)
    const [response, dispatch] = useReducer(storeReducer, initState);


    // colRef : 만들 컬랙션의 참조 (컬랙션 이름)
		// 원하는 컬렉션의 참조를 인자로 보내주면 파이어스토어가 자동으로 해당 컬렉션을 생성해줌 
    const colRef = collection(appFireStore, transaction);

    // 컬렉션에문서 를 저장
    const addDocument = async (doc) => {

        dispatch({ type: "isPending" });
        try {

            // 시간 저장
            const createdTime = timestamp.fromDate(new Date());

            // docRef : 참조(컬랙션 이름)
            // addDoc : 컬렉션에 문서를 추가
            const docRef = await addDoc(colRef,{ ...doc, createdTime});
            console.log('저장 docRef',docRef);
            dispatch({ type: 'addDoc', payload: docRef });
        } catch (error) {
            dispatch({ type: 'error', payload: error.message });
        }
    }

    // 컬렉션에서 문서를 삭제
    const deleteDocument = async (id) => {

        dispatch({ type: "isPending" });
        try {

            const docRef = await deleteDoc(doc(colRef,id));
            console.log('삭제 docRef',docRef);
            dispatch({ type: 'deleteDoc', payload: docRef });
        } catch (error) {
            dispatch({ type: 'error', payload: error.message });
        }
    }

    return { addDocument, deleteDocument, response }

}