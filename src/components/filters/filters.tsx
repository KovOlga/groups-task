import { FormItem, FormLayoutGroup, NativeSelect } from "@vkontakte/vkui";
import { FC } from "react";

const Filters: FC = () => {
  return (
    <FormLayoutGroup mode="horizontal">
      <FormItem top="По типу приватности" htmlFor="privacy">
        <NativeSelect id="privacy">
          <option value="all">Все</option>
          <option value="closed">Закрытая</option>
          <option value="opened">Открытая</option>
        </NativeSelect>
      </FormItem>
      <FormItem top="По цвету аватарки" htmlFor="color">
        <NativeSelect id="color">
          <option value="any">Любой</option>
          <option value="f">Зделать мэп</option>
        </NativeSelect>
      </FormItem>
      <FormItem top="По наличию друзей в группе" htmlFor="friends">
        <NativeSelect id="friends">
          <option value="presence">Есть друзья в группе</option>
          <option value="absence">Нет друзей в группе</option>
        </NativeSelect>
      </FormItem>
    </FormLayoutGroup>
  );
};

export default Filters;
