import {
  Path,
  Nickname,
  SeasonId,
  MatcingTeamMode,
  UserNum,
  GameId,
} from 'utils/path/path-type';

// Primitive Types
export type Code = number;
export type Message = string;
export type Rank = number;
export type MMR = number;
export type RankSize = number;
export type TotalGames = number;
export type TotalWins = number;
export type TotalTeamKills = number;
export type RankPercent = number;
export type AverageRank = number;
export type AverageKills = number;
export type AverageAssistants = number;
export type AverageHunts = number;
export type Top1 = number;
export type Top2 = number;
export type Top3 = number;
export type Top5 = number;
export type Top7 = number;
export type CharacterCode = number;
export type Usages = number;
export type MaxKillings = number;
export type Wins = number;
export type Top3Rate = number;
export type MatchingMode = 2 | 3;
export type L10Path = Path;

// Reference Types
export interface User {
  userNum: UserNum,
  nickname: Nickname,
};

export interface UserRank extends User {
  rank: Rank,
  mmr: MMR,
};

export interface CharacterStat {
  characterCode: CharacterCode,
  totalGames: TotalGames,
  usages: Usages,
  maxKillings: MaxKillings,
  top3: Top3,
  wins: Wins,
  top3Rate: Top3Rate,
  averageRank: AverageRank,
};

export type CharacterStats = CharacterStat[];

export interface UserStat extends UserRank {
  seasonId: SeasonId,
  matchingMode: MatchingMode,
  matchingTeamMode: MatcingTeamMode,
  rankSize: RankSize,
  totalGames: TotalGames,
  totalWins: TotalWins,
  totalTeamKills: TotalTeamKills,
  rankPercent: RankPercent,
  averageRank: AverageRank,
  averageKills: AverageKills,
  averageAssistants: AverageAssistants,
  averageHunts: AverageHunts,
  top1: Top1,
  top2: Top2,
  top3: Top3,
  top5: Top5,
  top7: Top7,
  characterStats: CharacterStats,
};

export interface BattleUserResult extends User {

};

export interface LanguageData {
  l10Path: L10Path,
};

export type UserRanks = UserRank[];
export type UserStats = UserStat[];
export type UserGames = BattleUserResult[];

// Response Types
export interface DefaultResponse {
  code: Code,
  message: Message,
}

export interface GetUserNumberResponse extends DefaultResponse {
  user: User,
};

export interface TopRankersResponse extends DefaultResponse {
  topRanks: UserRanks,
};

export interface UserRankResponse extends DefaultResponse {
  userRank: UserRank,
};

export interface UserStatsResponse extends DefaultResponse {
  userStats: UserStats,
};

export interface UserMatchesResponse extends DefaultResponse {
  userGames: UserGames,
};

export interface MatchResultsResponse extends DefaultResponse {
  userGames: UserGames,
};

export interface GetGameDataTableResponse extends DefaultResponse {

};

export interface GetLanguageDataResponse extends DefaultResponse {
  data: LanguageData,
};
