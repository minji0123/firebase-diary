/* eslint-disable*/
import styles from './Comment.module.css'

export default function Comment(){
    return(
        <>
        <br/>
        <h2>Comments</h2>

        <ul>
            <li>
                댓글 있을 때 여기 표시됨
            </li>
            <hr/>

            <li>
                댓글 있을 때 여기 표시됨
            </li>
            <hr/>
        </ul>


        <form>
            <fieldset className={styles.fld_reply}>
                <legend className={styles.screen_out}>댓글쓰기 폼</legend>

                <div className={styles.reply_write}>
                    <label htmlFor="comment" className={styles.lab_write}>내용</label>
                    <textarea name="comment" id="comment" className={styles.tf_reply} placeholder="댓글을 입력해주세요" tabIndex="3"></textarea>
                </div>
                <div>
                    <button className={styles.btn_enter} tabIndex="5">Send</button>
                </div>
            </fieldset>
        </form>
        </>
    )
}