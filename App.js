import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  //ketlen
  const seuNome= "ketlen";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>3° Bimestre</Text>
      <Text style={styles.title}>3° A</Text>
      <Text style={styles.title}>Prova</Text>
      <TextInput style={styles.input} value={seuNome} editable={false} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    width: 200,
    marginTop: 10,
  },
});

