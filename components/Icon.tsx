import IconMdi from "@expo/vector-icons/MaterialCommunityIcons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

type Props = IconProps<any> & {
  name: string;
};

export function Icon(props: Props) {
  return (
    <IconMdi
      {...props}
      size={props.size ?? 28}
    />
  );
}
