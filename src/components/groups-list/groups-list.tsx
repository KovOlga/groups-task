import { Div, List, Spinner } from "@vkontakte/vkui";
import { FC, useEffect } from "react";
import GroupItem from "../group-item/group-item";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getGroups } from "../../services/actions";
import { RootState } from "../../types";

const GroupsList: FC = () => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector((store: RootState) => store.groups.groups);
  const loading = useAppSelector(
    (store: RootState) => store.groups.reqInProccess
  );
  const error = useAppSelector((store: RootState) => store.groups.reqFailed);
  useEffect(() => {
    dispatch(
      getGroups({
        isClosed: null,
        color: null,
        hasFriends: null,
      })
    );
  }, []);
  return (
    <List>
      {loading && !groups.length && (
        <Spinner size="large" style={{ margin: "20px 0" }} />
      )}
      {!loading && !error && groups.length === 0 && (
        <Div>Подходящих групп нет</Div>
      )}
      {groups.length > 0 &&
        !loading &&
        !error &&
        groups.map((item) => {
          return <GroupItem key={item.id} {...item} />;
        })}
      {error && <Div>Произошла ошибка. Здесь должна быть ее обработка</Div>}
    </List>
  );
};

export default GroupsList;
