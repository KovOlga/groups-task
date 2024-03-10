import {
  GetGroupsResponse,
  Group,
  IGetFilterOptionsResponse,
  IFilterRequest,
  IFilterOptions,
} from "../types/data";
import {
  mockFetchFilterOptions,
  mockFetchGroupsWithFilters,
} from "./mock-backend";

export const getGroupsList = (filterReq: IFilterRequest): Promise<Group[]> => {
  return mockFetchGroupsWithFilters(filterReq).then(parseGroupsResponse);
};

const parseGroupsResponse = async (req: GetGroupsResponse) => {
  if (!req.data) {
    console.log(`Отсутствует дата`);
    // todo: add exception handling
  }
  if (req.data && req.result) {
    return req.data;
  }
  return Promise.reject();
};

export const getFiltersOptions = (): Promise<IFilterOptions> => {
  return mockFetchFilterOptions().then(parseFilterOptionsResponse);
};

const parseFilterOptionsResponse = async (req: IGetFilterOptionsResponse) => {
  if (!req.data) {
    console.log(`Отсутствует дата`);
    // todo: add exception handling
  }
  if (req.data && req.result) {
    return req.data;
  }
  return Promise.reject();
};
