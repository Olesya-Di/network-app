import Post from './Post/Post';
import s from './OtherPosts.module.css';

const OtherPosts = () => {
    return (
        <article className={s.otherPosts}>
            <Post message = "Привет, как ты?" count = "5" />
            <Post message = "Какой ты молодец" count = "20" />
        </article>
    )
};


export default OtherPosts;