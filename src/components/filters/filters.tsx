import { FormItem, FormLayoutGroup, NativeSelect } from "@vkontakte/vkui";
import { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";

const Filters: FC = () => {
  const colors = useAppSelector((store: RootState) => store.groups.colors);
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
          {colors.map((color) => {
            return <option value="color">{color}</option>;
          })}
        </NativeSelect>
      </FormItem>
      <FormItem top="По наличию друзей в группе" htmlFor="friends">
        <NativeSelect id="friends">
          <option value="all">Все</option>
          <option value="presence">Есть друзья в группе</option>
          <option value="absence">Нет друзей в группе</option>
        </NativeSelect>
      </FormItem>
    </FormLayoutGroup>
  );
};

export default Filters;
