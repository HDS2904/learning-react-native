import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NewText = () => {
	const [text, setText] = useState(true);
	const updateText = () => {
		setText(!text)
	}
	return <Text style={styles.text} onPress={updateText} >
		{text ? "Hola mundo" : "Hasta luego mundo" }
	</Text>
}

export default function App() {
  return (
    <View style={styles.container}>
      <NewText />
    </View>
  );
}

const styles = StyleSheet.create({
	text: {
		color: 'green',
		fontSize: 48,
	},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
