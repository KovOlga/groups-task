import { Group } from "../types/data";
import {
  GET_GROUPS_FAILED,
  GET_GROUPS_REQUEST,
  GET_GROUPS_SUCCESS,
  SET_FILTERS,
  TGroupsActions,
} from "./actions";

export interface IInitialState {
  groups: Group[];
  colorsOptions: string[];
  reqInProccess: boolean;
  reqFailed: boolean;
}

const initialState: IInitialState = {
  groups: [],
  colorsOptions: [],
  reqInProccess: false,
  reqFailed: false,
};

export const groupsReducer = (
  state = initialState,
  action: TGroupsActions
): IInitialState => {
  switch (action.type) {
    case GET_GROUPS_REQUEST: {
      return {
        ...state,
        reqInProccess: true,
        groups: [],
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
    case SET_FILTERS: {
      return {
        ...state,
        colorsOptions: action.filters.colors,
      };
    }
    case GET_GROUPS_FAILED: {
      return { ...state, reqFailed: true, reqInProccess: false };
    }
    default:
      return state;
  }
};
