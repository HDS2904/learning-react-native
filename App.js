import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [newText, setNewText] = useState('');
  return (
    <View style={styles.container}>
      <Text>Texto: {newText}</Text>
      <TextInput 
				style={styles.input}
				placeholder = 'Ingrese un texto'
				onChangeText={i => setNewText(i)}
				defaultValue = {newText}
			/>
    </View>
  );
}

const styles = StyleSheet.create({
	input: {
		marginTop: 50,
		height: 42,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		width: '50%'
	},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
