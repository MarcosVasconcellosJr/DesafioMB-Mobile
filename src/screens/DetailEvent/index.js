import React, { useState } from 'react'

import {
    Text,
    TouchableOpacity,
    View,
    Image,
    Linking,
    Alert,
    ScrollView
} from 'react-native';

import styles from './styles'

import Icon1 from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import { ScrollView } from 'react-native-gesture-handler';

export default function DetailEvent({ navigation }) {
    const [like, setLike] = useState(false)

    const event = navigation.getParam('event')

    function screenFeed() {
        navigation.navigate('Feed')
    }

    function screenDescriptionExtended() {
        navigation.navigate('DescriptionDetailed', { event })
    }

    function handleLike() {
        if (like) {
            setLike(false)
        } else if (!like) {
            setLike(true)
        }
    }

    function handleLikeShareButton() {
        Linking.canOpenURL(`whatsapp://send?text=E aí, tudo bem? \n\nQueria te mostrar esse evento sensacional que eu encontrei pra gente ir em ${event.date}, topa?\n\nO nome do evento é *${event.title}* e vai ser no local\n${event.local}`)
            .then(supported => {
                if (supported) {
                    Linking.openURL(`whatsapp://send?text=E aí, tudo bem? \n\nQueria te mostrar esse evento sensacional que eu encontrei pra gente ir em ${event.date}, topa?\n\nO nome do evento é *${event.title}* e vai ser no local\n${event.local}`)
                } else {
                    Alert.alert("Não foi possível compartilhar o evento")
                }
            })
    }

    function handleMapsButton() {
        Linking.canOpenURL(`https://www.google.com/maps/search/?api=1&query=${event.local}`)
            .then(supported => {
                if (supported) {
                    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${event.local}`)
                } else {
                    Alert.alert("Não foi possível visualizar o local")
                }
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.iconsHeader}>

                    <TouchableOpacity onPress={screenFeed}>
                        <Icon name="arrow-left" color='#EBEBEB' size={27} style={styles.icon} />
                    </TouchableOpacity>
                    {/* This icon is Used to stylized header, to get best responsible  */}
                    <Icon name="arrow-left" color='#5257f2' size={27} style={styles.icon} />

                </View>

                <Text style={styles.textHeader}>DETALHES</Text>

                <View style={styles.iconsHeader}>

                    <TouchableOpacity onPress={handleLikeShareButton}>
                        <Icon name="share-variant" color='#EBEBEB' size={27} style={styles.icon} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLike}>
                        <Icon name={like ? "heart" : "heart-outline"} color={like ? '#FF507C' : '#EBEBEB'} size={27} style={styles.icon} />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.box}>
                <ScrollView>
                    <Image style={styles.eventImage} source={{ uri: event.imageLink }} />

                    <View style={styles.informations}>
                        <View style={styles.infoContainer}>
                            <Icon name="calendar-today" color='#5257f2' size={30} style={styles.infoIcons} />
                            <View style={styles.infoSubContainer}>
                                <Text style={[styles.title, { fontSize: 17 }]} numberOfLines={2}>{event.date}</Text>
                            </View>
                        </View>
                        <View style={styles.infoContainer}>
                            <Icon name="format-title" color='#5257f2' size={30} style={styles.infoIcons} />
                            <View style={styles.infoSubContainer}>
                                <Text style={styles.title} numberOfLines={2}>{event.title}</Text>
                                <Text style={styles.subTitle} numberOfLines={2}>{event.subTitle}</Text>
                            </View>
                        </View>
                        <View style={styles.especialInfo}>
                            <View style={styles.infoContainer1}>
                                <Icon1 name="price-tag" style={styles.infoIcons} color='#5257F2' size={30} />
                                <View style={styles.infoSubContainer}>
                                    <Text style={styles.priceText}>${event.price}</Text>
                                </View>
                            </View>

                            <View style={styles.infoContainer1}>
                                <Icon name="ticket-confirmation" color='#5257f2' size={30} style={styles.infoIcons} />
                                <View style={styles.infoSubContainer}>
                                    <Text style={styles.unsold}>{event.unsold}</Text>
                                </View>
                            </View>

                            <View style={styles.infoContainer1}>
                                <Icon name="clock" color='#5257f2' size={30} style={styles.infoIcons} />
                                <View style={styles.infoSubContainer}>
                                    <Text style={styles.priceText}>{event.duration}</Text>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity onPress={handleMapsButton}>
                            <View style={styles.infoContainer}>
                                <Icon name="map-marker" color='#5257f2' size={30} style={styles.infoIcons} />
                                <View style={styles.infoSubContainer}>
                                    <Text style={styles.subTitle} numberOfLines={2}>{event.local}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.infoContainer}>
                            <Icon name="tag-text-outline" color='#5257f2' size={30} style={styles.infoIcons} />
                            <View style={styles.categoryContainer}>
                                <Text style={styles.subTitle}>
                                    {event.category[0] ? event.category[0] : ''}
                                    {event.category[1] && event.category[0] ? ', ' : ''}
                                </Text>
                                <Text style={styles.subTitle}>
                                    {event.category[1] ? event.category[1] : ''}
                                    {event.category[2] && event.category[1] ? ', ' : ''}
                                </Text>
                                <Text style={styles.subTitle}>
                                    {event.category[2] ? event.category[2] : ''}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.infoContainer}>
                            <Icon name="format-title" color='#5257f2' size={30} style={styles.infoIcons} />
                            <View style={styles.infoSubContainer}>
                                <Text style={styles.subTitle} numberOfLines={5}>{event.description}...</Text>
                                <TouchableOpacity onPress={screenDescriptionExtended}>
                                    <Text style={{ color: '#2D3057', fontWeight: 'bold' }}>Ver mais</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <TouchableOpacity>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Comprar</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}