import { StyleSheet } from "react-native";

const baseHeight = 56;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 208,
    borderTopWidth: 1,
    borderColor: '#333',
    marginHorizontal: 24,
  },
  mainText: {
    marginTop: 16,
    color: '#808080',
    fontWeight: 'bold',
    lineHeight: 16,
  },
  subText: {
    color: '#808080',
    fontWeight: 'normal',
    lineHeight: 16,
  }
})