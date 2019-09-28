import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    Alert
} from 'react-native'

//Estilization for this component
import styles from './styles'

//Assets
import background from '../../../assets/imgs/bg2.jpg'

//Action for get users from redux-store
import { getUsers } from '../../store/actions/users'

//Action for login user to application
import { login } from '../../store/actions/users'

export default function Authenticate({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const users = useSelector((state) => state.users)

    // console.log(users.userList)

    function processLogin(email, password) {
        if (email === '' || password === '') {
            Alert.alert('Email ou Senha inválidos')
        } else if(login({ email, password }, users.userList) == 1){
            Alert.alert('Email ou Senha inválidos')
        } else {
            dispatch(login({ email, password }, users.userList))
            navigation.navigate('Feed')
        }
    }

    function screenSignup() {
        navigation.navigate('Signup')
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
                        <Text style={styles.boxHeadText}>Entre</Text>
                    </View>

                    {/*  View of the inputs of signin and signup, with conditional render */}
                    <View style={styles.inputsView}>
                        <TextInput
                            style={styles.input}
                            placeholder="    email"
                            placeholderTextColor="#DDDDDD"
                            autoCompleteType="email"
                            textContentType="emailAddress"
                            returnKeyType="done"
                            autoFocus={true}
                            value={email}
                            onChangeText={(mail) => setEmail(mail)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="    senha"
                            placeholderTextColor="#DDDDDD"
                            secureTextEntry={true}
                            returnKeyType="done"
                            value={password}
                            onChangeText={(pass) => setPassword(pass)}
                        />
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={() => processLogin(email, password, users)}>
                            <View style={styles.buttons}>
                                <Text style={styles.btnText}>Entrar</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.signup}>
                            <Text>Ainda não tem uma conta? </Text>
                            <TouchableOpacity onPress={screenSignup}>
                                <Text style={styles.buttonSignup}>Cadastrar-se</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}