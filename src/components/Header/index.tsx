import { Image, View } from "react-native";
import logoSVG from "../../assets/Logo.png";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={logoSVG} alt=''/>
    </View>
  );
}