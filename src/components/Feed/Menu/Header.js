import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Fonts } from '../../../utils/fonts'

function Header(props){
    return (
        <View style={styles.containerHeader}>
                
            <Icon name="calendar" color='#EBEBEB' size={30} style={styles.icon} />

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

    
})

export default Header