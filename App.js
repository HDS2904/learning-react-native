import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NewText = ({ children }) => {
	return <Text>
		{children}
	</Text>
}

export default function App() {
  return (
    <View style={styles.container}>
      <NewText>
				Me llamo Jonathan, y
				<NewText> soy ingeniero de sistemas</NewText>
			</NewText>
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
