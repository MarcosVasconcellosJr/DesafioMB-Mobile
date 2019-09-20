import React from 'react'
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView
} from 'react-native'

//Assets
import background from '../../assets/imgs/bg.jpg'

export default function Feed({ navigation }) {
    return (
        <ImageBackground source={background} style={styles.background}>
            <View style={styles.container}>

                <View style={styles.header}></View>

                <View style={styles.containerEvents}>
                    <ScrollView>
                        <View style={styles.box}></View>
                        <View style={styles.box}></View>
                        <View style={styles.box}></View>
                    </ScrollView>
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
        justifyContent: 'flex-start',
    },

    header: {
        flex: 1,
        backgroundColor: '#222222'
    },

    containerEvents: {
        flex: 5,
        justifyContent: 'flex-start'
    },

    box: {
        flex: 2,
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 15,
        marginBottom: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 3,
    },
})