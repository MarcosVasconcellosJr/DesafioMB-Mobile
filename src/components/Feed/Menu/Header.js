import React, { useState } from 'react';
import { View, Picker, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Fonts } from '../../../utils/fonts'

function Header(){
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name="calendar" color='white' size={30} style={styles.icon} />
            </TouchableOpacity>

            <Text style={styles.textHeader}>EVENTOS</Text>

            <TouchableOpacity>
                <Image
                    style={styles.imageHeader} 
                    source={{ uri: `https://scontent.fcpq11-1.fna.fbcdn.net/v/t1.0-9/18836031_1300011196781130_9167086581992927295_n.jpg?_nc_cat=109&_nc_oc=AQlC72YZDyIiVzNVje9pKDAkDFb45femFS_gT9N6WfFEhcX5wHDgIukpPJaWOPlymuw&_nc_ht=scontent.fcpq11-1.fna&oh=bf0eace129db794c5c80e325c103bbe3&oe=5E092070`}}>
                </Image>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },

    pickerView: {
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        marginTop: 27,
    },

    picker: {
        marginHorizontal: 5,
        color: '#616161',
        width: 160,
        height: 30
    },

    textHeader: {
        fontWeight: 'bold',
        fontFamily: Fonts.ProductSans_Black,
        color: 'white',
        fontSize: 24,
        marginTop: 25
    },

    imageHeader: {
        borderRadius: 50,
        borderColor: '#444',
        width: 40,
        height: 40,
        marginTop: 21,
        marginRight: 18,    
        shadowColor: '#FFFFFF',
        shadowOffset: {width: 2, height: 1},
        shadowOpacity: 0.9,
        shadowRadius: 5,
    },  

    icon: {
        marginLeft: 18,
        paddingTop: 27
    },  
})

export default Header