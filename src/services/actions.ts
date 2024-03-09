import { AppDispatch, AppThunk } from "../types";
import { Group } from "../types/data";
import { getGroupsList } from "./api";

export const GET_GROUPS_REQUEST = "GET_GROUPS_REQUEST";
export const GET_GROUPS_SUCCESS = "GET_GROUPS_SUCCESS";
export const GET_GROUPS_FAILED = "GET_GROUPS_FAILED";

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

export type TGroupsActions =
  | IGetGroupsRequestAction
  | IGetGroupsSuccessAction
  | IGetGroupsFailedAction;

export const getGroupsAction = (): IGetGroupsRequestAction => ({
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

export const getGroups: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getGroupsAction());
    return getGroupsList()
      .then((users) => {
        dispatch(getGroupsSuccessAction(users));
      })
      .catch(() => {
        dispatch(getGroupsFailedAction());
      });
  };
};
