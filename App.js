import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NewText = ({ style }) => {
	const [text, setText] = useState(true);
	const updateText = () => {
		setText(!text)
	}
	return <Text style={[ styles.text, style ]} onPress={ updateText } >
		{text ? "Hola mundo" : "Hasta luego mundo" }
	</Text>
}

export default function App() {
  return (
    <View style={styles.container}>
      <NewText style={styles.red} />
      <NewText style={styles.green} />
      <NewText style={styles.blue} />
    </View>
  );
}

const styles = StyleSheet.create({
	text: {
		color: 'white',
		fontSize: 24,
		height: 100,
		width: 100,
		backgroundColor: 'grey'
	},
	red: {
		backgroundColor: 'red',
		flex: 3,
	},
	green: {
		backgroundColor: 'green',
		flex: 2,
	},
	blue: {
		backgroundColor: 'blue',
		flex: 1,
	},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
