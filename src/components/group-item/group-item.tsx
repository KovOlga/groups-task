import { Avatar, Button, CardGrid, SimpleCell, Title } from "@vkontakte/vkui";
import { FC, useState } from "react";
import FriendsList from "../friends-list/friends-list";
import { Group } from "../../types/data";

const GroupItem: FC<Group> = (item) => {
  const [isFriendsListVisible, setIsFriendsListVisible] =
    useState<boolean>(false);
  const onFriendsClick = () => {
    console.log("friends");
  };
  return (
    <CardGrid>
      <SimpleCell
        before={<Avatar gradientColor={item.avatar_color} />}
        subtitle={`${item.members_count} подписчиков`}
        subhead={
          <Title style={{ color: "#d1deeb" }} level="1">
            {item.name}
          </Title>
        }
        indicator={
          item.friends?.length > 0 && (
            <Button size="s" mode="secondary" onClick={onFriendsClick}>
              {item.friends?.length}
            </Button>
          )
        }
      >
        <Title style={{ color: "var(--vkui--color_text_secondary)" }} level="3">
          {item.closed ? "Закрытая" : "Открытая"}
        </Title>
      </SimpleCell>
      {isFriendsListVisible && <FriendsList />}
    </CardGrid>
  );
};

export default GroupItem;
