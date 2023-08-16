import s from './Main.module.css';

import Posts from './Pages/Profile/MyPost/MyPost';
import OtherPosts from './OtherPosts/OtherPosts';
import Profile from './Pages/Profile/Profile';


const Main = () => {
  return (
    <>
      <main className={s.main}>
        <img className={s.header} src="../img/background.jpg" alt="" />

       
      <Profile/>

      <Posts />

      <OtherPosts/>
      
      </main>
    </>
  );
};

export default Main;
