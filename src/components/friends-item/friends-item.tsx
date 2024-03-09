import { SimpleCell } from "@vkontakte/vkui";
import { FC } from "react";
import { User } from "../../types/data";

const FriendsItem: FC<User> = (friend) => {
  return <SimpleCell>{`${friend.first_name} ${friend.last_name}`}</SimpleCell>;
};

export default FriendsItem;
