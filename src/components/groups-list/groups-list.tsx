import { List } from "@vkontakte/vkui";
import mock from "../../utils/groups.json";
import { FC } from "react";
import GroupItem from "../group-item/group-item";

const GroupsList: FC = () => {
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
