import { List } from "@vkontakte/vkui";
import mock from "../../utils/groups.json";
import { FC, useEffect } from "react";
import GroupItem from "../group-item/group-item";
import { useAppDispatch } from "../../hooks/hooks";
import { getGroups } from "../../services/actions";

const GroupsList: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGroups());
  }, []);
  return (
    <List>
      {mock &&
        mock.map((item) => {
          return <GroupItem key={item.id} {...item} />;
        })}
    </List>
  );
};

export default GroupsList;
