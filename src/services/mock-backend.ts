import {
  GetGroupsResponse,
  IGetFilterOptionsResponse,
  IFilterRequest,
} from "../types/data";
import mock from "../utils/groups.json";

export const mockFetchGroupsWithFilters = (
  filterReq: IFilterRequest
): Promise<GetGroupsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockBackendFiltersResultSet(filterReq));
    }, 1000);
  });
};

const mockBackendFiltersResultSet = (
  filterRequest: IFilterRequest
): GetGroupsResponse => {
  let resultSet = mock;
  console.log("filterRequest", filterRequest);
  if (filterRequest.isClosed !== null) {
    resultSet = resultSet.filter(
      (item) => item.closed === filterRequest.isClosed
    );
  }
  if (filterRequest.color) {
    resultSet = resultSet.filter(
      (item) => item.avatar_color === filterRequest.color
    );
  }
  if (filterRequest.hasFriends !== null) {
    resultSet = resultSet.filter(
      (item) =>
        (filterRequest.hasFriends && item.friends != null) ||
        (!filterRequest.hasFriends && item.friends == null)
    );
  }
  return { result: 1, data: resultSet };
};

export const mockFetchFilterOptions =
  (): Promise<IGetFilterOptionsResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockBackendFilterOptions());
      }, 1000);
    });
  };

const mockBackendFilterOptions = (): IGetFilterOptionsResponse => {
  const colorsArr: string[] = [];
  mock.forEach((group) => {
    if (group.avatar_color) {
      colorsArr.push(group.avatar_color);
    }
  });
  const uniqueArr = colorsArr.filter((value, index, array) => {
    return array.indexOf(value) === index;
  });
  return { result: 1, data: { colors: uniqueArr } };
};
