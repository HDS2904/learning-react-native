import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NewText = ({ texto, type }) => {
	return <Text>
		{type === 1 ?`Hola, me llamo ${texto}` : `Nos vemos ${texto}`}
	</Text>
}

export default function App() {
  return (
    <View style={styles.container}>
      <NewText texto={'Jonathan'} type={1} />
      <NewText texto={'Mundo'} type={2} />
      <StatusBar style="auto" />
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
