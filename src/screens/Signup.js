import React, { useState }from 'react'
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
	TextInput,
	Alert,
	ScrollView
} from 'react-native'

//Assets
import { Fonts } from '../utils/fonts'
import background from '../../assets/imgs/bg2.jpg'

export default function Authenticate({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
    const [inicialCash, setInicialCash] = useState('')

	async function processRegister() {
		Alert.alert('Registrou')
	}

    function screenSignin(){
        navigation.navigate('Signin')
    }

	return (
		<ImageBackground source={background} style={styles.background}>
			{/* Salutation for user :) */}
			<View style={styles.container}>
				<View style={styles.salutation}>
					<Text style={styles.textSalutation}>
						Tudo pronto para começar...
					</Text>
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
                                placeholderTextColor='#DDDDDD'
                                autoFocus={true}
                                value={name}
                                onChangeText={setName}
                            />
							<TextInput
								style={styles.input}
                                placeholder="    email"
                                autoCapitalize="none"
								placeholderTextColor='#DDDDDD'
								autoCompleteType="email"
								textContentType="emailAddress"
                                value={email}
                                onChangeText={setEmail}
							/>
							<TextInput
								style={styles.input}
                                placeholder="    senha"
                                autoCapitalize="none"
								placeholderTextColor='#DDDDDD'
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
							/>
							<TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                placeholder="    repita a senha"
                                placeholderTextColor='#DDDDDD'
                                secureTextEntry={true}
							/>
                            <TextInput
                                style={styles.input}
                                placeholder="    idade"
                                placeholderTextColor='#DDDDDD'
                                keyboardType="numeric"
                                value={age}
                                onChangeText={setAge}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="    cidade"
                                placeholderTextColor='#DDDDDD'
                                value={city}
                                onChangeText={setCity}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="    cash inicial"
                                placeholderTextColor='#DDDDDD'
                                keyboardType="numeric"
                                value={inicialCash}
                                onChangeText={setInicialCash}
                            />
							
						</ScrollView>

					</View>

					<View style={styles.btnContainer}>

						<TouchableOpacity onPress={processRegister}>
							<View style={styles.buttons}>
								<Text style={styles.btnText}>Registra-se</Text>
							</View>
						</TouchableOpacity>

						<View style={styles.signup}>
							<Text>Já tem uma conta?</Text>
							<TouchableOpacity
								onPress={screenSignin}>
								<Text style={styles.buttonSignup}>Entrar</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		width: null,
		height: null
    },
    
	container: {
		flex: 1,
		justifyContent: 'flex-end',
    },
    
	salutation: {
		flex: 1,
		marginBottom: 30,
		justifyContent: 'flex-end',
		alignItems: 'center'
    },
    
	textSalutation: {
		color: 'white',
		fontSize: 24,
		fontFamily: Fonts.ProductSans_Bold,
		fontWeight: 'bold',
		textAlign: 'center',
    },
    
	box: {
		flex: 7,
		backgroundColor: 'white',
		borderRadius: 10,
		marginBottom: 50,
		marginHorizontal: 25,
		flexDirection: 'column',
		justifyContent: 'center',
		shadowColor: '#FFFFFF',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.9,
		shadowRadius: 5,
		elevation: 3,
    },
    
	boxHead: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
    },
    
	boxHeadText: {
		fontSize: 24,
		fontFamily: Fonts.ProductSans_Bold,
		fontWeight: 'bold',
		color: '#222222'
    },
    
	inputsView: {
		flex: 4,
		justifyContent: 'flex-start',
    },
    
	input: {
		marginTop: 10,
		marginHorizontal: 30,
		borderBottomWidth: 2,
		borderBottomLeftRadius: 10,
		borderBottomColor: '#DDDDDD',
		fontSize: 16,
    },
    
	btnContainer: {
		flex: 1.8,
		justifyContent: 'flex-start',
    },
    
	buttons: {
		backgroundColor: '#1DDCAF',
		height: 40,
		marginHorizontal: 30,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.9,
		shadowRadius: 5,
		elevation: 3,
    },
    
	btnText: {
		fontSize: 20,
		color: 'white',
		fontFamily: Fonts.ProductSans_Bold,
    },
    
	signup: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 90
    },
    
	buttonSignup: {
		color: '#5257F2',
		fontWeight: 'bold'
	}
})