
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    flex: 1,
  },
  task: {
    flexDirection: 'row',
    marginHorizontal: 24,
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskRadioText: {
    flexDirection: 'row',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginLeft: 16,
    marginRight: 10,
  },
  text: {
    color: '#F2F2F2',
    paddingVertical: 12,
  },
  textLineThrough: {
    color: '#F2F2F2',
    paddingVertical: 12,
    textDecorationLine: 'line-through',
  }
})