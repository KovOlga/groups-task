export interface GetGroupsResponse {
  result: 1 | 0;
  data?: Group[];
}

export interface IGetFilterOptionsResponse {
  result: 1 | 0;
  data?: IFilterOptions;
}

export interface IFilterOptions {
  colors: string[];
}

export interface IFilterRequest {
  isClosed: boolean | null;
  color: string | null;
  hasFriends: boolean | null;
}

export interface Group {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: string;
  members_count: number;
  friends?: User[];
}

export interface User {
  first_name: string;
  last_name: string;
}
