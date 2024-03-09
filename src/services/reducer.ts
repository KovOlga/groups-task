import { Group } from "../types/data";
import {
  GET_GROUPS_FAILED,
  GET_GROUPS_REQUEST,
  GET_GROUPS_SUCCESS,
  TGroupsActions,
} from "./actions";

export interface IInitialState {
  groups: Group[];
  reqInProccess: boolean;
  reqFailed: boolean;
}

const initialState: IInitialState = {
  groups: [],
  reqInProccess: false,
  reqFailed: false,
};

export const usersReducer = (
  state = initialState,
  action: TGroupsActions
): IInitialState => {
  switch (action.type) {
    case GET_GROUPS_REQUEST: {
      return {
        ...state,
        reqInProccess: true,
        reqFailed: false,
      };
    }
    case GET_GROUPS_SUCCESS: {
      return {
        ...state,
        reqInProccess: false,
        reqFailed: false,
        groups: action.groups,
      };
    }
    case GET_GROUPS_FAILED: {
      return { ...state, reqFailed: true, reqInProccess: false };
    }
    default:
      return state;
  }
};
