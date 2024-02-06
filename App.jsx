import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Hello, World!</Text>
        <Image
          source={{ url: 'https://i.ytimg.com/vi/en7eEJezwNY/maxresdefault.jpg' }}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter text here"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default App;

