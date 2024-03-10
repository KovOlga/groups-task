import { AppDispatch, AppThunk } from "../types";
import { Group, IFilterRequest } from "../types/data";
import { getGroupsList } from "./api";

export const GET_GROUPS_REQUEST = "GET_GROUPS_REQUEST";
export const GET_GROUPS_SUCCESS = "GET_GROUPS_SUCCESS";
export const GET_GROUPS_FAILED = "GET_GROUPS_FAILED";
export const SET_AVATAR_COLORS = "SET_AVATAR_COLORS";

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

interface ISetAvatarColorsAction {
  readonly type: typeof SET_AVATAR_COLORS;
  groups: Group[];
}

export type TGroupsActions =
  | IGetGroupsRequestAction
  | IGetGroupsSuccessAction
  | IGetGroupsFailedAction
  | ISetAvatarColorsAction;

export const getGroupsRequestAction = (): IGetGroupsRequestAction => ({
  type: GET_GROUPS_REQUEST,
});

export const getGroupsSuccessAction = (
  groups: Group[]
): IGetGroupsSuccessAction => ({
  type: GET_GROUPS_SUCCESS,
  groups,
});

export const setAvatarColorsAction = (
  groups: Group[]
): ISetAvatarColorsAction => ({
  type: SET_AVATAR_COLORS,
  groups,
});

export const getGroupsFailedAction = (): IGetGroupsFailedAction => ({
  type: GET_GROUPS_FAILED,
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

export const getGroupsInitial: AppThunk = (filterReq: IFilterRequest) => {
  return function (dispatch: AppDispatch) {
    dispatch(getGroupsRequestAction());
    return getGroupsList(filterReq)
      .then((groups) => {
        dispatch(getGroupsSuccessAction(groups));
        dispatch(setAvatarColorsAction(groups));
      })
      .catch(() => {
        dispatch(getGroupsFailedAction());
      });
  };
};
