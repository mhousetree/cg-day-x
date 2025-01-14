import React from "react";
import { LiveInfo } from "../lives";
import styles from "./card.module.css";

const dateToString = (date: Date, offset: number) => {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${
    date.getDate() + offset
  }日`;
};

export default function Card({
  title,
  date,
  days,
  color,
  tweetType,
}: LiveInfo) {
  const today = new Date();
  const nthDay = Math.floor((today.getTime() - date.getTime()) / 86400000) + 1;

  let tweetLinkQuery;
  let buttonContent;

  switch (tweetType.kind) {
    case "HashtagWithDay":
      tweetLinkQuery = `hashtags=${tweetType.hashtag}${nthDay}`;
      buttonContent = `#${tweetType.hashtag}${nthDay}`;
      break;
    case "Hashtag":
      tweetLinkQuery = `text=%23${tweetType.hashtag} Day${nthDay}`;
      buttonContent = `#${tweetType.hashtag} Day${nthDay}`;
      break;
    case "Title":
      tweetLinkQuery = `text=${title} Day${nthDay}`;
      buttonContent = tweetLinkQuery;
      break;
  }

  return (
    <a
      href={`https://twitter.com/intent/tweet?${tweetLinkQuery}`}
      target="_blank"
      className={styles.card}
      style={{ backgroundColor: color }}
      rel="noreferrer"
    >
      <h1 className={styles.eventTitle}>{title}</h1>
      <dl className={styles.datelists}>
        {Array(days)
          .fill(0)
          .map((_, i) => {
            return (
              <React.Fragment key={i}>
                <dt>Day{i + 1}</dt>
                <dd>{dateToString(date, i)}</dd>
              </React.Fragment>
            );
          })}
        <dt>︙</dt>
        <dd>︙</dd>
        <dt>Day{nthDay}</dt>
        <dd>今日！！！！！</dd>
      </dl>
      <p>今日は {buttonContent} です。</p>
    </a>
  );
}
