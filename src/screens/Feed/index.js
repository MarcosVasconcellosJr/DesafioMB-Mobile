import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEvents } from '../../store/actions/events'

import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import styles from './styles'

import Icon from 'react-native-vector-icons/FontAwesome'

//Components
import Menu from '../../components/Feed/Menu'
import Event from '../../components/Feed/Event'


export default function Feed({ navigation }) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEvents())
    }, [])
    
    const eventList = useSelector((state) => state.event)
    console.log(eventList)
    
    function screenCalendarPicker(){
        navigation.navigate('CalendarPicker')
    }

    function screenUserEvents(){
        navigation.navigate('UserEvents', {eventList})
    }

   return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity onPress={screenCalendarPicker}>
                        <Icon name="calendar" color='#EBEBEB' size={30} style={styles.icon} />
                    </TouchableOpacity>

                    <Text style={styles.textHeader}>EVENTOS</Text>

                    <TouchableOpacity onPress={screenUserEvents}>
                        <Image
                            style={styles.imageHeader}
                            source={{ uri: `https://scontent.fcpq11-1.fna.fbcdn.net/v/t1.0-9/18836031_1300011196781130_9167086581992927295_n.jpg?_nc_cat=109&_nc_oc=AQlC72YZDyIiVzNVje9pKDAkDFb45femFS_gT9N6WfFEhcX5wHDgIukpPJaWOPlymuw&_nc_ht=scontent.fcpq11-1.fna&oh=bf0eace129db794c5c80e325c103bbe3&oe=5E092070` }}>
                        </Image>
                    </TouchableOpacity>
                </View>

                <Menu />
            </View>

            <View style={styles.containerEvents}>

                <FlatList
                    data={eventList.eventList}
                    renderItem={({ item }) => <Event event={item} navigation={navigation} />}
                    showsVerticalScrollIndicator={false}
                    disableVirtualization={true}
                >
                </FlatList>

            </View>
        </View>
    );
}

// 