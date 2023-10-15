/*
* module
* - components/structure.js
* - structural components
*/

import React from 'react';
import { Text, View } from 'react-native';

// import default styles
import { styles } from '../styles/default.js';

/* 
* structure
*/

const Wrapper = props => {

	return (
		<View style={props.style}>
			{props.children}
		</View>
	);

}

const Main = props => {

	return (
		<View style={props.style}>
			<Content style={styles.defaultContent}>
				{props.children}
			</Content>
		</View>
	);

}

const Header = props => {

	return (
		<View style={props.style}>
			<Text style={props.type}>{props.heading}</Text>
		</View>
	);

}


const Content = props => {
	
	return (
		<View style={props.style}>
			{props.children}
		</View>
	);
}

const ContentText = props => {

	return (
		<Text style={props.style}>
			{props.children}
		</Text>
	);

}

export {
	ContentText,
	Header,
	Main,
	Wrapper
}; 
