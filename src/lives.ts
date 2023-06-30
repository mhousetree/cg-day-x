type TweetType = HashtagWithDay | Hashtag | Title;
type HashtagWithDay = { kind: "HashtagWithDay"; hashtag: string };
type Hashtag = { kind: "Hashtag"; hashtag: string };
type Title = { kind: "Title" };

export type LiveInfo = {
  title: string;
  date: Date;
  days: number;
  color: string;
  tweetType: TweetType;
};

export const lives: LiveInfo[] = [
  {
    title: "THE IDOLM@STER CINDERELLA GIRLS 燿城夜祭 -かがやきよまつり-",
    date: new Date("2023-6-10"),
    days: 2,
    color: "#899fc1",
    tweetType: { kind: "HashtagWithDay", hashtag: "cgよまつり_day" },
  },
  {
    title: "THE IDOLM@STER M@STERS OF IDOL WORLD!!!!! 2023",
    date: new Date("2023-2-11"),
    days: 2,
    color: "#2b81c7",
    tweetType: { kind: "HashtagWithDay", hashtag: "アイマスMOIW2023_day" },
  },
  {
    title:
      "THE IDOLM@STER CINDERELLA GIRLS Twinkle LIVE Constellation Gradation",
    date: new Date("2022-11-26"),
    days: 2,
    color: "#184a91",
    tweetType: { kind: "HashtagWithDay", hashtag: "cgコンステ_day" },
  },
  {
    title: "THE IDLEM@STER CINDERELLA GIRLS LIKE4LIVE #cg_ootd",
    date: new Date("2022-9-3"),
    days: 2,
    color: "#e18490",
    tweetType: { kind: "HashtagWithDay", hashtag: "cg_ootd_day" },
  },
  {
    title: "バンダイナムコエンターテインメントフェスティバル 2nd",
    date: new Date("2022-5-14"),
    days: 2,
    color: "#f50602",
    tweetType: { kind: "HashtagWithDay", hashtag: "バンナムフェス2nd_day" },
  },
  {
    title:
      "THE IDOLM@STER CINDERELLA GIRLS 10th ANNIVERSARY M@GICAL WONDERLAND!!!",
    date: new Date("2022-4-2"),
    days: 2,
    color: "#12348b",
    tweetType: {
      kind: "HashtagWithDay",
      hashtag: "シンデレラ10周年_ファイナルday",
    },
  },
  {
    title:
      "THE IDOLM@STER CINDERELLA GIRLS 10th ANNIVERSARY M@GICAL WONDERLAND TOUR!!! Tropical Land",
    date: new Date("2022-1-30"),
    days: 2,
    color: "#fac238",
    tweetType: {
      kind: "HashtagWithDay",
      hashtag: "シンデレラ10周年_トロピカルday",
    },
  },
  {
    title:
      "THE IDOLM@STER CINDERELLA GIRLS 10th ANNIVERSARY M@GICAL WONDERLAND TOUR!!! CosmoStar Land",
    date: new Date("2021-12-25"),
    days: 2,
    color: "#15202b",
    tweetType: {
      kind: "HashtagWithDay",
      hashtag: "シンデレラ10周年_愛知day",
    },
  },
  {
    title:
      "THE IDOLM@STER CINDERELLA GIRLS 10th ANNIVERSARY M@GICAL WONDERLAND TOUR!!! Celebration Land",
    date: new Date("2021-11-27"),
    days: 2,
    color: "#f65050",
    tweetType: {
      kind: "HashtagWithDay",
      hashtag: "シンデレラ10周年_千葉day",
    },
  },
  {
    title:
      "THE IDOLM@STER CINDERELLA GIRLS 10th ANNIVERSARY M@GICAL WONDERLAND TOUR!!! MerryMaerchen Land",
    date: new Date("2021-10-2"),
    days: 2,
    color: "#f878cd",
    tweetType: {
      kind: "HashtagWithDay",
      hashtag: "シンデレラ10周年_福岡day",
    },
  },
];
