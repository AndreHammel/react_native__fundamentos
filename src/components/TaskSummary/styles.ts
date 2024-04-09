import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 32,
    marginBottom: 20,
  },
  content: {
    flexDirection: 'row',
    gap: 8,
  },
  textCreate: {
    color: '#4EA8DE',
    fontWeight: 'bold',
  },
  textFinished: {
    color: '#8284FA',
    fontWeight: 'bold',
  },
  textAmount: {
    color: '#D9D9D9',
    backgroundColor: '#333333',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 999,
  }
})

