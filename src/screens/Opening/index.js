import React from 'react'

import {
    ImageBackground,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

//Estilization for this component
import styles from './styles'

//Assets
import background from '../../../assets/imgs/bg3.jpg'

export default function Opening({ navigation }) {

    function screenSignin(){
        navigation.navigate('Signin')
    }

    return (
        <ImageBackground source={background} style={styles.background}>
            <View style={styles.container}>

                <TouchableOpacity onPress={screenSignin}>
                    <View style={styles.buttons}>
                        <Text style={styles.btnText}>Começar  </Text>
                        <Icon name='angle-right' style={styles.Icon} size={20} color='white' />
                    </View>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}