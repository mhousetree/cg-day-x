import React from "react";
import styles from "./App.module.css";
import Card from "./components/card";
import { lives } from "./lives";

function App() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          今日はあのライブの
          <div>
            Day
            <img src="./xx.png" alt="xx" />
          </div>
          かぁ〜〜〜！！
        </h1>
      </header>
      <main className={styles.main}>
        <div className={styles.cardsWrapper}>
          {lives.map((live, index) => (
            <Card
              key={index}
              title={live.title}
              date={live.date}
              days={live.days}
              color={live.color}
              tweetType={live.tweetType}
            />
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <small>{new Date().getFullYear()} &copy; はやかわめぐる</small>
      </footer>
    </>
  );
}

export default App;
