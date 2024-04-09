import { Text, View } from "react-native";
import { styles } from "./styles";

type TaskProps = {
  numberTasksFinished: number,
  numberTasks: number,
}

export function TaskSummary({ numberTasksFinished, numberTasks }: TaskProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textCreate}>Criadas</Text>
        <Text style={styles.textAmount}>{numberTasks}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textFinished}>Concluídas</Text>
        <Text style={styles.textAmount}>{numberTasksFinished}</Text>
      </View>
    </View>
  );
}