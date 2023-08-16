import s from './Post.module.css';

const Post = (props) => {
    return (
        <section className={s.post}>
            <img className={s.post__img} src="../img/background.jpg" alt="" />
            <section className={s.post__item}>{props.message}</section>
            <p className={s.post__like}>Лайков: {props.count}</p>
        </section>
    )
};

export default Post;