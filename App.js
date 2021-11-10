import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NewText = () => {
	const [text, setText] = useState(true);
	const updateText = () => {
		setText(!text)
	}
	return <Text onPress={updateText} >
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
