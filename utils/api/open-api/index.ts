import {
  Path,
  Nickname,
  SeasonId,
  MatcingTeamMode,
  UserNum,
  GameId,
  MetaType,
  Language,
} from 'types/api/open-api';
import {
  HASH,
  GET_USER_NUMBER_PATH,
  TOP_RANKERS_PATH,
  USER_RANK_PATH,
  USER_STATS_PATH,
  USER_MATCHES_PATH,
  MATCH_RESULTS_PATH,
  GET_GAME_DATA_TABLE_PATH,
  GET_LANGUAGE_DATA_PATH,
} from 'dictionaries/default-path';
import { KOREAN } from 'dictionaries/language';

export const getUserNumberPath = (nickname: Nickname): Path => `${GET_USER_NUMBER_PATH}?query=${nickname}`;
export const topRankersPath = (seasonId: SeasonId = 0, matchingTeamMode: MatcingTeamMode = 1): Path => `${TOP_RANKERS_PATH}/${seasonId}/${matchingTeamMode}`;
export const userRankPath = (userNum: UserNum, seasonId: SeasonId = 0, matchingTeamMode: MatcingTeamMode = 1): Path => `${USER_RANK_PATH}/${userNum}/${seasonId}/${matchingTeamMode}`;
export const userStatsPath = (userNum: UserNum, seasonId: SeasonId = 0): Path => `${USER_STATS_PATH}/${userNum}/${seasonId}`;
export const userMatchesPath = (userNum: UserNum): Path => `${USER_MATCHES_PATH}/${userNum}`;
export const matchResultsPath = (gameId: GameId): Path => `${MATCH_RESULTS_PATH}/${gameId}`;
export const getGameDataTablePath = (metaType: MetaType = HASH): Path => `${GET_GAME_DATA_TABLE_PATH}/${metaType}`;
export const getLanguageDataPath = (language: Language = KOREAN): Path => `${GET_LANGUAGE_DATA_PATH}/${language}`;