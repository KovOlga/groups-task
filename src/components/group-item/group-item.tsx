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
          <Avatar
            size={100}
            gradientColor={"custom"}
            style={{
              backgroundColor: `${
                item.avatar_color ? item.avatar_color : "inherit"
              }`,
            }}
            noBorder={item.avatar_color ? false : true}
          />
        }
        subhead={item.closed ? "Закрытая" : "Открытая"}
        subtitle={`Подписчиков: ${item.members_count}`}
        indicator={
          item.friends &&
          item.friends.length > 0 && (
            <Button size="s" mode="tertiary" onClick={onFriendsClick}>
              {`Друзей подписано: ${item.friends?.length}`}
            </Button>
          )
        }
      >
        <Title level="1">{item.name}</Title>
      </SimpleCell>
      {isFriendsListVisible && item.friends && (
        <FriendsList friends={item.friends} />
      )}
    </CardGrid>
  );
};

export default GroupItem;
