import { GetGroupsResponse, Group } from "../types/data";
import mock from "../utils/groups.json";

const mockFetch = (): Promise<GetGroupsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ result: 1, data: mock });
    }, 1000);
  });
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
