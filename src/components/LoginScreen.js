import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import {
	StyleSheet,
	Image,
	View,
} from 'react-native';

export default class LoginScreen extends Component {
	render() {
		return (
			<View>
				<Logo />
				<Form />
				<SignupSection/>
				<ButtonSubmit/>
			</View>
		);
	}
}
