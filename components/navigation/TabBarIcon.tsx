import { MaterialCommunityIcons } from "@expo/vector-icons";

type IconProps = {
  name: string;
  color: string;
};

export function TabBarIcon(props: IconProps) {
  return (
    <MaterialCommunityIcons
      name={props.name as any}
      size={28}
      color={props.color}
    />
  );
}
