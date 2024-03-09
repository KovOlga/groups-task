import { Avatar, Button, CardGrid, SimpleCell, Title } from "@vkontakte/vkui";
import { FC, useState } from "react";
import FriendsList from "../friends-list/friends-list";
import { Group } from "../../types/data";

const GroupItem: FC<Group> = (item) => {
  const [isFriendsListVisible, setIsFriendsListVisible] =
    useState<boolean>(false);
  const onFriendsClick = () => {
    setIsFriendsListVisible((prevState) => !prevState);
  };
  return (
    <CardGrid>
      <SimpleCell
        before={
          item.avatar_color ? (
            <Avatar
              gradientColor={"custom"}
              style={{ backgroundColor: `${item.avatar_color}` }}
            />
          ) : (
            <Avatar
              gradientColor={"custom"}
              style={{ backgroundColor: "inherit" }}
              noBorder
            />
          )
        }
        subtitle={`${item.members_count} подписчиков`}
        subhead={
          <Title style={{ color: "#d1deeb" }} level="1">
            {item.name}
          </Title>
        }
        indicator={
          item.friends &&
          item.friends?.length > 0 && (
            <Button size="s" mode="tertiary" onClick={onFriendsClick}>
              {`Друзей подписано: ${item.friends?.length}`}
            </Button>
          )
        }
      >
        <Title style={{ color: "var(--vkui--color_text_secondary)" }} level="3">
          {item.closed ? "Закрытая" : "Открытая"}
        </Title>
      </SimpleCell>
      {isFriendsListVisible && item.friends && (
        <FriendsList friends={item.friends} />
      )}
    </CardGrid>
  );
};

export default GroupItem;
