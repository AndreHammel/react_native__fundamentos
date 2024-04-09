import { Image, Text, View } from "react-native";
import clipboard from "../../assets/Clipboard.png";
import { styles } from "./styles";

export function NoTask() {
  return (
    <View style={styles.container}>
      <Image source={clipboard} alt=''/>
      <Text style={styles.mainText}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subText}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}