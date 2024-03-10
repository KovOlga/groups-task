import { AppDispatch, AppThunk } from "../types";
import { Group, IFilterOptions, IFilterRequest } from "../types/data";
import { getFiltersOptions, getGroupsList } from "./api";

export const GET_GROUPS_REQUEST = "GET_GROUPS_REQUEST";
export const GET_GROUPS_SUCCESS = "GET_GROUPS_SUCCESS";
export const GET_GROUPS_FAILED = "GET_GROUPS_FAILED";
export const SET_FILTERS = "SET_FILTERS";

interface IGetGroupsRequestAction {
  readonly type: typeof GET_GROUPS_REQUEST;
}

interface IGetGroupsSuccessAction {
  readonly type: typeof GET_GROUPS_SUCCESS;
  groups: Group[];
}

interface IGetGroupsFailedAction {
  readonly type: typeof GET_GROUPS_FAILED;
}

interface ISetFiltersAction {
  readonly type: typeof SET_FILTERS;
  filters: IFilterOptions;
}

export type TGroupsActions =
  | IGetGroupsRequestAction
  | IGetGroupsSuccessAction
  | IGetGroupsFailedAction
  | ISetFiltersAction;

export const getGroupsRequestAction = (): IGetGroupsRequestAction => ({
  type: GET_GROUPS_REQUEST,
});

export const getGroupsSuccessAction = (
  groups: Group[]
): IGetGroupsSuccessAction => ({
  type: GET_GROUPS_SUCCESS,
  groups,
});

export const getGroupsFailedAction = (): IGetGroupsFailedAction => ({
  type: GET_GROUPS_FAILED,
});

export const setFiltersAction = (
  filters: IFilterOptions
): ISetFiltersAction => ({
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
      .catch(() => {
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
      .catch(() => {});
  };
};
