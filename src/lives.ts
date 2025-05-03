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
    title:
      "THE IDOLM@STER CINDERELLA GIRLS STARLIGHT STAGE 10th ANNIVERSARY TOUR Let's AMUSEMENT!!! 東京公演",
    date: new Date("2025/4/26"),
    days: 2,
    color: "#a5a4ec",
    tweetType: {
      kind: "HashtagWithDay",
      hashtag: "デレステ10thツアー東京_day",
    },
  },
  {
    title:
      "THE IDOLM@STER CINDERELLA GIRLS STARLIGHT STAGE 10th ANNIVERSARY TOUR Let's AMUSEMENT!!! 大阪公演",
    date: new Date("2025/3/8"),
    days: 2,
    color: "#ffa1c6",
    tweetType: {
      kind: "HashtagWithDay",
      hashtag: "デレステ10thツアー大阪_day",
    },
  },
  {
    title: "THE IDOLM@STER M@STER EXPO LIVE SHOWCASE CINDERELLA STAGE",
    date: new Date("2024/12/14"),
    days: 2,
    color: "#2581c7",
    tweetType: { kind: "HashtagWithDay", hashtag: "アイマスEXPO_ライブ_DAY" },
  },
  {
    title: "THE IDOLM@STER CINDERELLA GIRLS STARLIGHT FANTASY",
    date: new Date("2024/9/14"),
    days: 2,
    color: "#4f86c4",
    tweetType: { kind: "HashtagWithDay", hashtag: "cgSF_day" },
  },
  {
    title:
      "THE IDOLM@STER CINDERELLA GIRLS UNIT LIVE TOUR ConnecTrip! 石川公演",
    date: new Date("2024/6/16"),
    days: 1,
    color: "#e6dd57",
    tweetType: { kind: "Hashtag", hashtag: "cgUT_石川" },
  },
  {
    title:
      "THE IDOLM@STER CINDERELLA GIRLS UNIT LIVE TOUR ConnecTrip! 東京公演",
    date: new Date("2024/6/1"),
    days: 1,
    color: "#83eb5e",
    tweetType: { kind: "Hashtag", hashtag: "cgUT_東京" },
  },
  {
    title:
      "THE IDOLM@STER CINDERELLA GIRLS UNIT LIVE TOUR ConnecTrip! 福岡公演",
    date: new Date("2024/5/19"),
    days: 1,
    color: "#e5774e",
    tweetType: { kind: "Hashtag", hashtag: "cgUT_福岡" },
  },
  {
    title:
      "THE IDOLM@STER CINDERELLA GIRLS UNIT LIVE TOUR ConnecTrip! 大阪公演",
    date: new Date("2024/4/6"),
    days: 1,
    color: "#5090e4",
    tweetType: { kind: "Hashtag", hashtag: "cgUT_大阪" },
  },
  {
    title:
      "THE IDOLM@STER CINDERELLA GIRLS UNIT LIVE TOUR ConnecTrip! 岩手公演",
    date: new Date("2024/3/10"),
    days: 1,
    color: "#58f0e5",
    tweetType: { kind: "Hashtag", hashtag: "cgUT_岩手" },
  },
  {
    title:
      "THE IDOLM@STER CINDERELLA GIRLS UNIT LIVE TOUR ConnecTrip! 山形公演",
    date: new Date("2024/2/3"),
    days: 1,
    color: "#f36061",
    tweetType: { kind: "Hashtag", hashtag: "cgUT_山形" },
  },
  {
    title: "異次元フェス アイドルマスター★♥ラブライブ！歌合戦",
    date: new Date("2023/12/9"),
    days: 2,
    color: "#eb369e",
    tweetType: { kind: "HashtagWithDay", hashtag: "アイラブ歌合戦_Day" },
  },
  {
    title:
      "TVアニメ「アイドルマスター シンデレラガールズ U149」 スペシャルトークイベント ～トゥインクルパーティー～",
    date: new Date("2023/11/11"),
    days: 2,
    color: "#75cbdd",
    tweetType: { kind: "HashtagWithDay", hashtag: "U149トークイベントDAY" },
  },
  {
    title: "THE IDOLM@STER CINDERELLA GIRLS Shout out Live!!!",
    date: new Date("2023/9/9"),
    days: 2,
    color: "#d30679",
    tweetType: { kind: "HashtagWithDay", hashtag: "cgSoL_day" },
  },
  {
    title: "THE IDOLM@STER CINDERELLA GIRLS 燿城夜祭 -かがやきよまつり-",
    date: new Date("2023/6/10"),
    days: 2,
    color: "#899fc1",
    tweetType: { kind: "HashtagWithDay", hashtag: "cgよまつり_day" },
  },
  {
    title: "THE IDOLM@STER M@STERS OF IDOL WORLD!!!!! 2023",
    date: new Date("2023/2/11"),
    days: 2,
    color: "#2b81c7",
    tweetType: { kind: "HashtagWithDay", hashtag: "アイマスMOIW2023_day" },
  },
  {
    title:
      "THE IDOLM@STER CINDERELLA GIRLS Twinkle LIVE Constellation Gradation",
    date: new Date("2022/11/26"),
    days: 2,
    color: "#184a91",
    tweetType: { kind: "HashtagWithDay", hashtag: "cgコンステ_day" },
  },
  {
    title: "THE IDLEM@STER CINDERELLA GIRLS LIKE4LIVE #cg_ootd",
    date: new Date("2022/9/3"),
    days: 2,
    color: "#e18490",
    tweetType: { kind: "HashtagWithDay", hashtag: "cg_ootd_day" },
  },
  {
    title: "バンダイナムコエンターテインメントフェスティバル 2nd",
    date: new Date("2022/5/14"),
    days: 2,
    color: "#f50602",
    tweetType: { kind: "HashtagWithDay", hashtag: "バンナムフェス2nd_day" },
  },
  {
    title:
      "THE IDOLM@STER CINDERELLA GIRLS 10th ANNIVERSARY M@GICAL WONDERLAND!!!",
    date: new Date("2022/4/2"),
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
    date: new Date("2022/1/30"),
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
    date: new Date("2021/12/25"),
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
    date: new Date("2021/11/27"),
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
    date: new Date("2021/10/2"),
    days: 2,
    color: "#f878cd",
    tweetType: {
      kind: "HashtagWithDay",
      hashtag: "シンデレラ10周年_福岡day",
    },
  },
];
