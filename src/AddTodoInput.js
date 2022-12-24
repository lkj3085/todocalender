import { TextInput, TouchableOpacity, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default ({
  value,
  onChangeText,
  placeholder,
  onPressAdd,
  onSubmitEditing,
  onFocus,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: 220,
        alignItems: "center",
        alignSelf: "center",
      }}>
      <TextInput
        style={{ flex: 1, padding: 5, color: "#595959" }}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={false}
        onFocus={onFocus}
      />
      <TouchableOpacity onPress={onPressAdd} style={{ padding: 5 }}>
        <AntDesign name="plus" size={18} color="#595959" />
      </TouchableOpacity>
    </View>
  );
};
