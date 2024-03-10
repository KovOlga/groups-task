import { GetGroupsResponse, Group } from "../types/data";
import mock from "../utils/groups.json";

const mockFetch = (): Promise<GetGroupsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ result: 1, data: mock });
    }, 1000);
  });
};
//==>

const mockFetchFiltered = (filterRequest: any): Promise<GetGroupsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(backendFiltersResultSet(filterRequest));
    }, 1000);
  });
};

const backendFiltersResultSet = (filterRequest: any): GetGroupsResponse => {
  if (filterRequest != null) {
    return { result: 1, data: backendFiltersResultSet(filterRequest) };
  }
  return { result: 1, data: backendFiltersResultSet(filterRequest) };
};

const getResponse = async (req: GetGroupsResponse) => {
  if (!req.data) {
    console.log(`Отсутствует дата`);
  }
  if (req.data && req.result) {
    return req.data;
  }
  return Promise.reject();
};

export const getGroupsList = (): Promise<Group[]> => {
  return mockFetch().then(getResponse);
};
