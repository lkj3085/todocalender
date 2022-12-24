import dayjs from "dayjs";
import { FlatList, View, Text, TouchableOpacity } from "react-native";

import { getDayColor, getDayText } from "./util";
import { SimpleLineIcons } from "@expo/vector-icons";
import Margin from "./Margin";

const columnsSize = 35;

const Column = ({
  text,
  color,
  opacity,
  disabled,
  onPress,
  isSelected,
  hasTodo,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        width: columnsSize,
        height: columnsSize,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isSelected ? "#c2c2c2" : "transparent",
        borderRadius: columnsSize / 2,
      }}>
      <Text style={{ color, opacity, fontWeight: hasTodo ? "bold" : "normal" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ({
  selectedDate,
  onPressLeftArrow,
  onPressRightArrow,
  onPressHeaderDate,
  onPressDate,
  columns,
  todoList,
}) => {
  const ListHeaderComponent = () => {
    const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD");
    return (
      <View>
        <Margin height={15} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <TouchableOpacity style={{ padding: 15 }} onPress={onPressLeftArrow}>
            <SimpleLineIcons name="arrow-left" size={15} color={"404040"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressHeaderDate}>
            <Text style={{ fontSize: 20, color: "#404040" }}>
              {currentDateText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 15 }} onPress={onPressRightArrow}>
            <SimpleLineIcons name="arrow-right" size={15} color={"404040"} />
          </TouchableOpacity>
          <Margin height={15} />
        </View>
        <View style={{ flexDirection: "row" }}>
          {[0, 1, 2, 3, 4, 5, 6].map((day) => {
            const dayText = getDayText(day);
            const color = getDayColor(day);
            return (
              <Column
                key={`day - ${day}`}
                text={dayText}
                color={color}
                opacity={1}
                disabled={true}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const color = getDayColor(day);
    const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");
    const onPress = () => onPressDate(date);
    const isSelected = dayjs(date).isSame(selectedDate, "date");
    const hasTodo = todoList.find((todo) =>
      dayjs(todo.date).isSame(dayjs(date), "date")
    );
    return (
      <Column
        text={dateText}
        color={color}
        opacity={isCurrentMonth ? 1 : 0.5}
        onPress={onPress}
        isSelected={isSelected}
        hasTodo={hasTodo}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(_, index) => `column - ${index}`}
      data={columns}
      renderItem={renderItem}
      numColumns={7}
      ListHeaderComponent={ListHeaderComponent}
      scrollEnabled={false}
    />
  );
};
