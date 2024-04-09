import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { styles } from './styles';
import { TaskSummary } from '../../components/TaskSummary';
import { NoTask } from '../../components/Notask';
import { useEffect, useState } from 'react';
import unchecked from "../../assets/unchecked.png";
import checked from "../../assets/checked.png";
import unckeckedPressIn from "../../assets/unckeckedPressIn.png";
import checkedPressIn from "../../assets/checkedPressIn.png";
import trashCan from "../../assets/trashCan.png";
import trashCanPressIn from "../../assets/trashCanPressIn.png";


export default function Home() {
  const [isPressed, setIsPressed] = useState<string | null>(null);
  const [isPressedTrash, setIsPressedTrash] = useState<string | null>(null);
  const [task, setTask] = useState<{ id: string; content: string; checked: boolean; }[]>([]);

  function handlePress (id: string) { 
    setTask(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked}
      }
      return item
    }))
  }

  function handlePressDelete(id: string) {
    setTask(prev => prev.filter(item => item.id !== id))
  }

  const handlePressIn = (id: string) => setIsPressed(id);
  const handlePressOut = () => setIsPressed(null);
  const handlePressInTrash = (id: string) => setIsPressedTrash(id);
  const handlePressOutTrash = () => setIsPressedTrash(null);
  const numberTasksFinished = task.filter(item => item.checked).length
  
  return (
    <View style={styles.container}>
      <Header />
      <Input setTask={setTask}/>
      <TaskSummary numberTasksFinished={numberTasksFinished} numberTasks={task.length}/>
      <FlatList 
        data={task}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <View style={styles.taskRadioText}>
              <TouchableOpacity 
                onPress={() => handlePress(item.id)}
                style={styles.radioButton}
                onPressIn={() => handlePressIn(item.id)}
                onPressOut={handlePressOut}
                activeOpacity={1}
              >
                {
                  isPressed === item.id 
                  ? item.checked
                    ? <Image  source={checkedPressIn} alt='' style={styles.image}/>
                    : <Image  source={unckeckedPressIn} alt='' style={styles.image}/>
                  : item.checked 
                    ? <Image  source={checked} alt='' style={styles.image}/>
                    : <Image source={unchecked} alt=''style={styles.image}/>
                }
              </TouchableOpacity>
              <Text style={item.checked ? styles.textLineThrough : styles.text }>{item.content}</Text>
            </View>
            <TouchableOpacity 
              onPress={() => handlePressDelete(item.id)}
              onPressIn={() => handlePressInTrash(item.id)}
              onPressOut={handlePressOutTrash}
              activeOpacity={1}
            >
              {
                item.id === isPressedTrash
                  ? <Image  source={trashCanPressIn} alt='' style={styles.image}/>
                  : <Image source={trashCan} alt=''style={styles.image}/>
              }
            </TouchableOpacity>

          </View>
        )}
        ListEmptyComponent={<NoTask />}
      />
    </View>
  );
}
