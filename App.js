import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

export default function App() {
	const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
				animationType="slide"
				transparent={true}
				visible={modal}
			>
				<View style={styles.center}>
					<View style={styles.content}>
						<Text>Soy un Modal</Text>
						<Button title='Cerrar Modal' onPress={()=>{setModal(!modal)}} />
					</View>
				</View>
			</Modal>
			<Button title='Abrir Modal' onPress={()=>{setModal(!modal)}} />
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
