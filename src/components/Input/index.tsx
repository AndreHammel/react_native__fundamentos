import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Dispatch, SetStateAction, useState } from "react";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

type InputProps = {
  setTask: Dispatch<SetStateAction<{ id: string; content: string; checked: boolean; }[]>>;
}

export function Input({ setTask }: InputProps) {
  const [isPressed, setIsPressed] = useState(false);
  const buttonStyle = isPressed ? styles.buttonPressed : styles.button;
  const [inputValue, setInputValue] = useState<string>("");

  function handlePress() {
    const newTask = {
      id: uuidv4(),
      content: inputValue,
      checked: false,
    }
    setTask(prev => [...prev, newTask])
    setInputValue("")
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Adicione umanova tarefa"
        placeholderTextColor="#808080"
        value={inputValue} 
        onChangeText={setInputValue} 
      />
      <TouchableOpacity 
        style={ buttonStyle } 
        onPress={handlePress}
        onPressIn={() => setIsPressed(true)} 
        onPressOut={() => setIsPressed(false)} 
        activeOpacity={1}
        >
        <MaterialIcons name="add-circle-outline" size={24} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  );
}