import React from 'react'

import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import styles from './styles'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function DescriptionDetailed({ navigation }) {

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
                    <Text style={styles.title} numberOfLines={3}>{event.title}</Text>
                    <Text style={styles.description} numberOfLines={25}>{event.description}</Text>
                </View>
            </View>
            <View style={{flex: 1}} />
        </View>
    )
}