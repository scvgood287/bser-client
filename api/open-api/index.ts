import axios from 'axios';

import { HASH } from '@/dictionaries/default-path'; 
import { KOREAN } from '@/dictionaries/language';
import {
  getUserNumberPath,
  topRankersPath,
  userRankPath,
  userStatsPath,
  userMatchesPath,
  matchResultsPath,
  getGameDataTablePath,
  getLanguageDataPath,
} from 'utils/path';
import {
  Nickname,
  SeasonId,
  MatcingTeamMode,
  UserNum,
  GameId,
  MetaType,
  Language,
} from 'utils/path/path-type';
import {
  GetUserNumberResponse,
  TopRankersResponse,
  UserRankResponse,
  UserStatsResponse,
  UserMatchesResponse,
  MatchResultsResponse,
  GetGameDataTableResponse,
  GetLanguageDataResponse,
} from './response-type';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BSER_API_URL;

export const getUserNumber = async (nickname: Nickname): Promise<GetUserNumberResponse> => {
  const response = await axios.get(getUserNumberPath(nickname));

  return response.data;
};

export const topRankers = async (seasonId: SeasonId = 0, matchingTeamMode: MatcingTeamMode = 1): Promise<TopRankersResponse> => {
  const response = await axios.get(topRankersPath(seasonId, matchingTeamMode));

  return response.data;
};

export const userRank = async (userNum: UserNum, seasonId: SeasonId = 0, matchingTeamMode: MatcingTeamMode = 1): Promise<UserRankResponse> => {
  const response = await axios.get(userRankPath(userNum, seasonId, matchingTeamMode));

  return response.data;
};

export const userStats = async (userNum: UserNum, seasonId: SeasonId = 0): Promise<UserStatsResponse> => {
  const response = await axios.get(userStatsPath(userNum, seasonId));

  return response.data;
};

export const userMatches = async (userNum: UserNum): Promise<UserMatchesResponse> => {
  const response = await axios.get(userMatchesPath(userNum));

  return response.data;
};

export const matchResults = async (gameId: GameId): Promise<MatchResultsResponse> => {
  const response = await axios.get(matchResultsPath(gameId));

  return response.data;
};

export const getGameDataTable = async (metaType: MetaType = HASH): Promise<GetGameDataTableResponse> => {
  const response = await axios.get(getGameDataTablePath(metaType));

  return response.data;
};

export const getLanguageData = async (language: Language = KOREAN): Promise<GetLanguageDataResponse> => {
  const response = await axios.get(getLanguageDataPath(language));

  return response.data;
};
