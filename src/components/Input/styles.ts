import { StyleSheet } from "react-native";

const baseHeight = 56;

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: (baseHeight / 2) * -1,
  },
  input: {
    backgroundColor: '#262626',
    height: baseHeight,
    borderRadius: 6,
    color: '#F2F2F2',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    flex: 1,
  },
  button: {
    backgroundColor: '#1E6F9F',
    height: baseHeight,
    width: 56,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#F2F2F2',
    fontSize: 28,
  },
  buttonPressed: {
    backgroundColor: '#4EA8DE',
    height: baseHeight,
    width: 56,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  }
  
})

