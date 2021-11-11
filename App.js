import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

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
			{/* <TouchableHighlight
				underlayColor={'#999'}
				activeOpacity={0.2}
				title='Texto enviado con exito'
				onPress={()=>{
					setSubmit(newText);
					alert('Texto enviado con exito')
				}}
			/> */}
			{/* <TouchableNativeFeedback
				background={TouchableNativeFeedback.Ripple('#00f',true)}
				onPress={()=>{
					setSubmit(newText);
					alert('Texto enviado con exito')
				}}
			>
				<View style={styles.view}>
					<Text>Aceptar</Text>
				</View>
			</TouchableNativeFeedback> */}
			{/* <TouchableOpacity
				style={styles.TouchableOpacity}
				onPress={()=>{
					setSubmit(newText);
					alert('Texto enviado con exito')
				}}
			>
				<View style={styles.view}>
					<Text>Aceptar</Text>
				</View>
			</TouchableOpacity> */}
			<TouchableWithoutFeedback
				style={styles.TouchableOpacity}
				onPress={()=>{
					setSubmit(newText);
					alert('Texto enviado con exito')
				}}
			>
				<View style={styles.view}>
					<Text>Aceptar</Text>
				</View>
			</TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
	TouchableOpacity: {
		backgroundColor: '#EEE',
	},
	view: {
		height: 40,
		width: 300,
		alignItems: 'center',
		justifyContent: 'center',
	},
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
