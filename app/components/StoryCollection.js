import React, { Component } from 'react'; 
import { View, StyleSheet, Image, Text, Navigator } from 'react-native'; 


class StoryCollection extends Component { 
	
	render() { 
		return ( 
			<Image source={require('../images/temp.jpeg')} style={styles.container} />
		) 
	} 
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  },
});

export default StoryCollection;