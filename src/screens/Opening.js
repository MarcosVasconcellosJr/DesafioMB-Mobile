import React from 'react'
import {
    ImageBackground,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

//Assets
import { Fonts } from '../utils/fonts'
import background from '../../assets/imgs/bg3.jpg'

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

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
    },

	container: {
		flex: 1,
		justifyContent: 'flex-end',
    },

    buttons: {
		backgroundColor: '#1DDCAF',
		height: 50,
		marginHorizontal: 30,
        borderRadius: 5,
        flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 150,
    },

    btnText: {
		fontSize: 20,
		color: 'white',
        fontFamily: Fonts.ProductSans_Bold,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})