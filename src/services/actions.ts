import { AppDispatch, AppThunk } from "../types";
import { Group, IFilterOptions, IFilterRequest } from "../types/data";
import { getFiltersOptions, getGroupsList } from "./api";

export const GET_GROUPS_REQUEST = "GET_GROUPS_REQUEST";
export const GET_GROUPS_SUCCESS = "GET_GROUPS_SUCCESS";
export const GET_GROUPS_FAILED = "GET_GROUPS_FAILED";
export const SET_FILTERS = "SET_FILTERS";

interface IGetGroupsRequest {
  readonly type: typeof GET_GROUPS_REQUEST;
}

interface IGetGroupsSuccess {
  readonly type: typeof GET_GROUPS_SUCCESS;
  groups: Group[];
}

interface IGetGroupsFailed {
  readonly type: typeof GET_GROUPS_FAILED;
}

interface ISetFilters {
  readonly type: typeof SET_FILTERS;
  filters: IFilterOptions;
}

export type TGroupsActions =
  | IGetGroupsRequest
  | IGetGroupsSuccess
  | IGetGroupsFailed
  | ISetFilters;

export const getGroupsRequestAction = (): IGetGroupsRequest => ({
  type: GET_GROUPS_REQUEST,
});

export const getGroupsSuccessAction = (groups: Group[]): IGetGroupsSuccess => ({
  type: GET_GROUPS_SUCCESS,
  groups,
});

export const getGroupsFailedAction = (): IGetGroupsFailed => ({
  type: GET_GROUPS_FAILED,
});

export const setFiltersAction = (filters: IFilterOptions): ISetFilters => ({
  type: SET_FILTERS,
  filters,
});

export const getGroups: AppThunk = (filterReq: IFilterRequest) => {
  return function (dispatch: AppDispatch) {
    dispatch(getGroupsRequestAction());
    return getGroupsList(filterReq)
      .then((groups) => {
        dispatch(getGroupsSuccessAction(groups));
      })
      .catch((err) => {
        console.log("ошибка при получении групп:", err);
        dispatch(getGroupsFailedAction());
      });
  };
};

export const getFilterOptions: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    return getFiltersOptions()
      .then((filters) => {
        dispatch(setFiltersAction(filters));
      })
      .catch((err) => {
        console.log("ошибка при загрузке опций фильтров", err);
      });
  };
};
