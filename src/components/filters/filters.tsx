import { FormItem, FormLayoutGroup, NativeSelect } from "@vkontakte/vkui";
import { ChangeEvent, FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import { getGroups } from "../../services/actions";

const Filters: FC = () => {
  const colors = useAppSelector((store: RootState) => store.groups.colors);
  const onFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("valu", e.target.value);
    console.log("name", e.target.id);
    // getGroups({
    //   privacy: "all",
    //   color: "any",
    //   friends: "all",
    // });
  };
  return (
    <FormLayoutGroup mode="horizontal">
      <FormItem top="По типу приватности" htmlFor="privacy">
        <NativeSelect onChange={onFilterChange} id="privacy">
          <option value="all">Все</option>
          <option value="closed">Закрытая</option>
          <option value="opened">Открытая</option>
        </NativeSelect>
      </FormItem>
      <FormItem top="По цвету аватарки" htmlFor="color">
        <NativeSelect onChange={onFilterChange} id="color">
          <option value="any">Любой</option>
          {colors.map((color, index) => {
            return (
              <option key={index} value={color}>
                {color}
              </option>
            );
          })}
        </NativeSelect>
      </FormItem>
      <FormItem top="По наличию друзей в группе" htmlFor="friends">
        <NativeSelect onChange={onFilterChange} id="friends">
          <option value="all">Все</option>
          <option value="presence">Есть друзья в группе</option>
          <option value="absence">Нет друзей в группе</option>
        </NativeSelect>
      </FormItem>
    </FormLayoutGroup>
  );
};

export default Filters;
