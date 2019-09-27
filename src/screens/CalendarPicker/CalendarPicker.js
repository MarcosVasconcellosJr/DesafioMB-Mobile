import React, { useState }from 'react'

import { View, TouchableOpacity, Text, Alert } from 'react-native'

import Styles from './styles'

import { CalendarList } from 'react-native-calendars'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {LocaleConfig} from 'react-native-calendars'

LocaleConfig.locales['br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set.','Out','Nov.','Dez'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sáb.'],
  today: 'Hoje\'hui'
}

LocaleConfig.defaultLocale = 'br'

export default function CalendarPicker({ navigation }) {
    // const [date, setDate] = useState('')

    // function handleDate(day){
    //     setDate(day)
    // }

    // function screenFeed(){
    //     date
    // }
    function screenFeed(){
        navigation.navigate('Feed')
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.containerHeader}>
                <View style={Styles.iconsHeader}>
                    <TouchableOpacity onPress={screenFeed}>
                        <Icon name="arrow-left" color='#EBEBEB' size={27} style={Styles.icon} />
                    </TouchableOpacity>
                    {/* This icon is used to style the header for better responsiveness */}
                    <Icon name="arrow-left" color='#5257f2' size={27} style={Styles.icon} />
                </View>
                <Text style={Styles.textHeader}>QUANDO VOCÊ QUER SAIR?</Text>
                <View style={Styles.iconsHeader}>
                    {/* These icon are used to style the header for better responsiveness */}
                    <Icon name="arrow-left" color='#5257f2' size={27} style={Styles.icon} />
                    <Icon name="arrow-left" color='#5257f2' size={27} style={Styles.icon} />
                </View>
            </View>

            <View style={Styles.CalendarList}>
                <CalendarList
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}
                    onDayPress={(day) => Alert.alert(`Você selecionou o dia ${day.dateString} para sair`)}
                    calendarWidth={360}
                    calendarHeight={320}
                    style={{ backgroundColor: '#EBEBEB', elevation: 1, borderRadius: 15}}
                    theme={{ selectedDayTextColor: '#5257f2' }}
                />
            </View>
        </View>
    );
}