import axios, { AxiosResponse } from 'axios';

import { HASH } from 'dictionaries/default-path'; 
import { KOREAN } from 'dictionaries/language';
import {
  getUserNumberPath,
  topRankersPath,
  userRankPath,
  userStatsPath,
  userMatchesPath,
  matchResultsPath,
  getGameDataTablePath,
  getLanguageDataPath,
} from '@/utils/api/open-api';
import {
  Nickname,
  SeasonId,
  MatcingTeamMode,
  UserNum,
  GameId,
  MetaType,
  Language,
  GetUserNumberResponse,
  TopRankersResponse,
  UserRankResponse,
  UserStatsResponse,
  UserMatchesResponse,
  MatchResultsResponse,
  GetGameDataTableResponse,
  GetLanguageDataResponse,
} from 'types/api/open-api';

const bserRequest = axios.create({ baseURL: process.env.NEXT_PUBLIC_BSER_API_URL });

export const getUserNumber = async (nickname: Nickname): Promise<AxiosResponse<GetUserNumberResponse>> => {
  const response = await bserRequest.get<GetUserNumberResponse>(getUserNumberPath(nickname));

  return response;
};

export const topRankers = async (seasonId: SeasonId = 0, matchingTeamMode: MatcingTeamMode = 1): Promise<AxiosResponse<TopRankersResponse>> => {
  const response = await bserRequest.get<TopRankersResponse>(topRankersPath(seasonId, matchingTeamMode));

  return response;
};

export const userRank = async (userNum: UserNum, seasonId: SeasonId = 0, matchingTeamMode: MatcingTeamMode = 1): Promise<AxiosResponse<UserRankResponse>> => {
  const response = await bserRequest.get<UserRankResponse>(userRankPath(userNum, seasonId, matchingTeamMode));

  return response;
};

export const userStats = async (userNum: UserNum, seasonId: SeasonId = 0): Promise<AxiosResponse<UserStatsResponse>> => {
  const response = await bserRequest.get<UserStatsResponse>(userStatsPath(userNum, seasonId));

  return response;
};

export const userMatches = async (userNum: UserNum): Promise<AxiosResponse<UserMatchesResponse>> => {
  const response = await bserRequest.get<UserMatchesResponse>(userMatchesPath(userNum));

  return response;
};

export const matchResults = async (gameId: GameId): Promise<AxiosResponse<MatchResultsResponse>> => {
  const response = await bserRequest.get<MatchResultsResponse>(matchResultsPath(gameId));

  return response;
};

export const getGameDataTable = async (metaType: MetaType = HASH): Promise<AxiosResponse<GetGameDataTableResponse>> => {
  const response = await bserRequest.get<GetGameDataTableResponse>(getGameDataTablePath(metaType));

  return response;
};

export const getLanguageData = async (language: Language = KOREAN): Promise<AxiosResponse<GetLanguageDataResponse>> => {
  const response = await bserRequest.get<GetLanguageDataResponse>(getLanguageDataPath(language));

  return response;
};