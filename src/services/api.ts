import { GetGroupsResponse, Group, IFilterRequest } from "../types/data";
import mock from "../utils/groups.json";

// const mockFetch = (): Promise<GetGroupsResponse> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ result: 1, data: mock });
//     }, 1000);
//   });
// };
//==>

const mockFetchFiltered = (
  filterReq: IFilterRequest
): Promise<GetGroupsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(backendFiltersResultSet(filterReq));
    }, 1000);
  });
};

const backendFiltersResultSet = (
  filterRequest: IFilterRequest
): GetGroupsResponse => {
  let resultSet = mock;
  console.log("filterRequest", filterRequest);
  if (filterRequest.isClosed !== null) {
    console.log("null1");
    resultSet = resultSet.filter(
      (item) => item.closed === filterRequest.isClosed
    );
  }
  if (filterRequest.color) {
    console.log("null2");
    resultSet = resultSet.filter(
      (item) => item.avatar_color === filterRequest.color
    );
  }
  if (filterRequest.hasFriends !== null) {
    console.log("null3");
    resultSet = resultSet.filter(
      (item) =>
        (filterRequest.hasFriends && item.friends != null) ||
        (!filterRequest.hasFriends && item.friends == null)
    );
  }
  return { result: 1, data: resultSet };
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

export const getGroupsList = (filReq: IFilterRequest): Promise<Group[]> => {
  return mockFetchFiltered(filReq).then(getResponse);
};
