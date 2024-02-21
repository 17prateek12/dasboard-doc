import MainPage from "./dasboard/MainPage";
import Navbar from "./dasboard/Navbar";
import style from "./page.module.css";

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.leftside}>
      <Navbar />
      </div>
      <div className={style.rightside}>
     <MainPage />
     </div>
    </main>
  );
}
