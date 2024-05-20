import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1A183F',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: 'white',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
  },
  picker: {
    height: 50,
    width: '100%',
    marginVertical: 10,
    backgroundColor: 'white',
  },
  input: {
    marginVertical: 10,
  },
  button: {
    marginVertical: 20,
  },
  modalTitle: {
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
  modalContainer: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  modalButtonText: {
    fontSize: 18,
    color: 'white',
  },
  report: {
    padding: 20,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    marginTop: 20,
    position: 'relative',
  },
  reportText: {
    fontSize: 18,
    marginVertical: 2,
  },
  deleteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalCloseButton: {
    padding: 8,
    width: '80%',
    alignSelf: 'center',
    marginTop: 30,
  },
  emptyMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  modalButton: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
});

