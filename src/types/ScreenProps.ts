import { NavigationProp, RouteProp } from "@react-navigation/native";

export type { NavigationProp, RouteProp };

export interface ScreenProps {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}
