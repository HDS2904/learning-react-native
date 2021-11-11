import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [newText, setNewText] = useState('');
	const [submit, setSubmit] = useState('')
  return (
    <View style={styles.container}>
      <Text>Texto: {submit}</Text>
      <TextInput 
				style={styles.input}
				placeholder = 'Ingrese un texto'
				onChangeText={i => setNewText(i)}
				defaultValue = {newText}
			/>
			<Button
				title='Texto enviado con exito'
				onPress={()=>{setSubmit(newText);alert('Texto enviado con exito')}}
			/>
    </View>
  );
}

const styles = StyleSheet.create({
	input: {
		height: 42,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		marginTop: 50,
		width: '50%',
	},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
