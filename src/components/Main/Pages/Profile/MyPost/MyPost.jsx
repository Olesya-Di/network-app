import s from './MyPost.module.css';


const MyPost = () => {
    return (
        <article className={s.myPost}>
            <h3 className={s.title}>Мои посты</h3>
            
            <label>
                <textarea className={s.textarea} type="text"></textarea>
            </label>
            
            <button className={s.btn}>Отправить</button>
        </article>
    )
};

export default MyPost;