import React from 'react'

import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';
import { Fonts } from '../../utils/fonts'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function DescriptionExtended({ navigation }) {

    const event = navigation.getParam('event')

    function screenDetailEvent() {
        navigation.navigate('DetailEvent', {event})
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerHeader}>

                <View style={styles.iconsHeader}>
                    <TouchableOpacity onPress={screenDetailEvent}>
                        <Icon name="arrow-left" color='#EBEBEB' size={27} style={styles.icon}/>
                    </TouchableOpacity>
                    {/* This icon is used to style the header for better responsiveness */}
                    <Icon name="arrow-left" color='#5257f2' size={27} style={styles.icon}/>
                </View>

                <Text style={styles.textHeader}>DESCRIÇÃO</Text>

                <View style={styles.iconsHeader}>
                    {/* These icon are used to style the header for better responsiveness */}
                    <Icon name="arrow-left" color='#5257f2' size={27} style={styles.icon}/>
                    <Icon name="arrow-left" color='#5257f2' size={27} style={styles.icon}/>
                </View>

            </View>

            <View style={{flex: 1}} />

            <View style={styles.box}>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description} numberOfLines={25}>{event.description}</Text>
                </View>
            </View>

            <View style={{flex: 1}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5257f2'
    },

    box: {
        flex: 3,
        backgroundColor: 'white',
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 1
    },

    descriptionContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 15
    },

    description: {
        textAlign: 'auto'
    },

    containerHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    textHeader: {
        flex: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: Fonts.ProductSans_Black,
        color: '#ebebeb',
        fontSize: 24,
        marginTop: 25,
    },

    icon: {
        paddingTop: 27,
    },

    iconsHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 18,
    },
})