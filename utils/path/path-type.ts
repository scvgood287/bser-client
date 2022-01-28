export type Path = string;
export type Nickname = string;
export type SeasonId = 0 | 1 | 2 | 3 | 4;
export type MatcingTeamMode = 1 | 2 | 3;
export type UserNum = number;
export type GameId = number;
export type MetaType = "hash" | "";
export type Language =
  // 완전 제공 언어
  "Korean" |
  "English" |
  "Japanese" |
  "ChineseSimplified" |
  "ChineseTraditional" |

  // 부분 제공 언어
  "French" |
  "Spanish" |
  "SpanishLatin" |
  "Portuguese" |
  "PortugueseLatin" |
  "Indonesian" |
  "German" |
  "Russian" |
  "Thai" |
  "Vietnamese";