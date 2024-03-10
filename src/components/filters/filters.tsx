import {
  Button,
  Div,
  FormItem,
  FormLayoutGroup,
  NativeSelect,
} from "@vkontakte/vkui";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import { getFilterOptions, getGroups } from "../../services/actions";
import { parseHasFriends, parseIsClosed } from "../../utils/parse-filters";

const Filters: FC = () => {
  const dispatch = useAppDispatch();
  const [filtersValues, setFiltersValues] = useState({
    privacy: "all",
    color: "any",
    friends: "all",
  });
  const colors = useAppSelector(
    (store: RootState) => store.groups.colorsOptions
  );

  useEffect(() => {
    dispatch(getFilterOptions());
  }, []);

  const onFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFiltersValues({ ...filtersValues, [e.target.id]: e.target.value });
  };
  const handleApplyFilters = () => {
    dispatch(
      getGroups({
        isClosed: parseIsClosed(filtersValues.privacy),
        color: filtersValues.color === "any" ? null : filtersValues.color,
        hasFriends: parseHasFriends(filtersValues.friends),
      })
    );
  };
  return (
    <>
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
            <option value="present">Есть друзья в группе</option>
            <option value="absent">Нет друзей в группе</option>
          </NativeSelect>
        </FormItem>
      </FormLayoutGroup>
      <Div>
        <Button
          type="button"
          onClick={handleApplyFilters}
          size="m"
          mode="secondary"
        >
          Применить
        </Button>
      </Div>
    </>
  );
};

export default Filters;
