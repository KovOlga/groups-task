import { List, SimpleCell } from "@vkontakte/vkui";
import { FC } from "react";
import { User } from "../../types/data";

const FriendsList: FC<{ friends: User[] }> = ({ friends }) => {
  return (
    <List>
      {friends.map((friend, index) => {
        return <SimpleCell key={index}>{friend.first_name}</SimpleCell>;
      })}
    </List>
  );
};

export default FriendsList;
