import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
				style={styles.photo}
				source={{uri: 'http://placekitten.com/200/300'}}
			>
				<Text>Image Tests</Text>
			</ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
	photo: {
		height: 250,
		width: 250,
	},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
