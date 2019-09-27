import React, { useState } from 'react'
import {
	Text,
	View,
	TouchableOpacity,
	ImageBackground,
	TextInput,
	Alert,
	ScrollView,
} from 'react-native'

import styles from './styles'
//Assets
import background from '../../../assets/imgs/bg2.jpg'

export default function Authenticate({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
    const [cash, setCash] = useState('')
    const [likes, setLikes] = useState([])

	async function processRegister() {
        Alert.alert('Registrou')
        screenSignin()
	}

	function screenSignin() {
		navigation.navigate('Signin')
	}

	return (
		<ImageBackground source={background} style={styles.background}>
			{/* Salutation for user :) */}
			<View style={styles.container}>
				<View style={styles.salutation}>
					<Text style={styles.textSalutation}>Tudo pronto para começar...</Text>
				</View>

				{/* White box that own user inputs and action buttons */}
				<View style={styles.box}>
					<View style={styles.boxHead}>
						<Text style={styles.boxHeadText}>Cadastre-se</Text>
					</View>

					{/*  View of the inputs of signin and signup, with conditional render */}
					<View style={styles.inputsView}>
						<ScrollView>
							<TextInput
								style={styles.input}
								autoCapitalize="none"
								placeholder="    nome"
								placeholderTextColor="#DDDDDD"
								autoFocus={true}
								value={name}
								onChangeText={setName}
							/>
							<TextInput
								style={styles.input}
								placeholder="    email"
								autoCapitalize="none"
								placeholderTextColor="#DDDDDD"
								autoCompleteType="email"
								textContentType="emailAddress"
								value={email}
								onChangeText={setEmail}
							/>
							<TextInput
								style={styles.input}
								placeholder="    senha"
								autoCapitalize="none"
								placeholderTextColor="#DDDDDD"
								secureTextEntry={true}
								value={password}
								onChangeText={setPassword}
							/>
							<TextInput
								style={styles.input}
								autoCapitalize="none"
								placeholder="    repita a senha"
								placeholderTextColor="#DDDDDD"
								secureTextEntry={true}
							/>
							<TextInput
								style={styles.input}
								placeholder="    idade"
								placeholderTextColor="#DDDDDD"
								keyboardType="numeric"
								value={age}
								onChangeText={setAge}
							/>
							<TextInput
								style={styles.input}
								placeholder="    cidade"
								placeholderTextColor="#DDDDDD"
								value={city}
								onChangeText={setCity}
							/>
							<TextInput
								style={styles.input}
								placeholder="    cash inicial"
								placeholderTextColor="#DDDDDD"
								keyboardType="numeric"
								value={cash}
								onChangeText={setCash}
							/>
						</ScrollView>
					</View>

					<View style={styles.btnContainer}>
						<TouchableOpacity onPress={processRegister}>
							<View style={styles.buttons}>
								<Text style={styles.btnText}>Cadastrar-se</Text>
							</View>
						</TouchableOpacity>

						<View style={styles.signup}>
							<Text>Já tem uma conta? </Text>
							<TouchableOpacity onPress={screenSignin}>
								<Text style={styles.buttonSignup}>Entrar</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</ImageBackground>
	)
}