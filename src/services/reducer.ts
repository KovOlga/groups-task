import { Group } from "../types/data";
import {
  GET_GROUPS_FAILED,
  GET_GROUPS_REQUEST,
  GET_GROUPS_SUCCESS,
  TGroupsActions,
} from "./actions";

export interface IInitialState {
  groups: Group[];
  colors: string[];
  reqInProccess: boolean;
  reqFailed: boolean;
}

const initialState: IInitialState = {
  groups: [],
  colors: [],
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
        reqFailed: false,
      };
    }
    case GET_GROUPS_SUCCESS: {
      const colorsArr: string[] = [];
      action.groups.forEach((group) => {
        if (group.avatar_color) {
          colorsArr.push(group.avatar_color);
        }
      });
      const uniqueArr = colorsArr.filter((value, index, array) => {
        return array.indexOf(value) === index;
      });
      return {
        ...state,
        reqInProccess: false,
        reqFailed: false,
        groups: action.groups,
        colors: uniqueArr,
      };
    }
    case GET_GROUPS_FAILED: {
      return { ...state, reqFailed: true, reqInProccess: false };
    }
    default:
      return state;
  }
};
