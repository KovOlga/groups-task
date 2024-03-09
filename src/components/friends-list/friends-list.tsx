import { List } from "@vkontakte/vkui";
import { FC } from "react";
import { User } from "../../types/data";
import FriendsItem from "../friends-item/friends-item";

const FriendsList: FC<{ friends: User[] }> = ({ friends }) => {
  return (
    <List>
      {friends.map((friend, index) => {
        return <FriendsItem key={index} {...friend} />;
      })}
    </List>
  );
};

export default FriendsList;
