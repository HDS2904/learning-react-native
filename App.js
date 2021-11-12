import React, { useState } from 'react';
import { Alert, Button, Modal, StyleSheet, Text, View } from 'react-native';

const createDialog = () => Alert.alert(
	'Alerta de prueba',
	'Esta alerta es una prueba para verificar que todo anda bien',
	[
		{
			text: 'Cancelar',
			onPress: () => {console.log("Cancelar")},
			style: 'cancel'
		},
		{
			text: 'Aceptar',
			onPress: () => {console.log("Aceptar")},
			style: 'acept'
		},
	]
)

export default function App() {
	const [alert, setAlert] = useState(false);
  return (
    <View style={styles.container}>
			<Button title='Abrir Alerta' onPress={()=>{createDialog()}} />
    </View>
  );
}

const styles = StyleSheet.create({
	content: {
		backgroundColor: 'grey',
		width: 300,
		height: 250
	},
	center: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
