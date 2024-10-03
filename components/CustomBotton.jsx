import { TouchableOpacity, View, Text } from "react-native";

const CustomBotton = ({
  title,
  TextStyle,
  BtnStyle,
  handlePress,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${BtnStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${TextStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBotton;
