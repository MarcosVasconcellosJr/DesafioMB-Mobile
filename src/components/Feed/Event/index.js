import React from 'react'

import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

import { Fonts } from '../../../utils/fonts'

const {height, width} = Dimensions.get('window')

import Icon from 'react-native-vector-icons/FontAwesome'

export default function Event({ event, navigation }) {
    
    function screenDetailEvent(){
        navigation.navigate('DetailEvent', {event})
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>

                <View style={styles.eventInfo}>

                    <Image style={styles.eventImage} source={{ uri: event.imageLink }}/>
                    
                    <View style={styles.informations}>
                        <Text style={styles.date}>{event.inicialDate}</Text>
                        <Text style={styles.title} numberOfLines={2}>{event.title}</Text>
                        <Text style={styles.subTitle} numberOfLines={2}>{event.subTitle}</Text>
                    </View>

                    <View style={styles.eventActions}>
                        <Icon name="check" color='#13E1B0' size={20} />
                    </View>

                </View>

                <View style={styles.eventFooter}>
                    <View style={styles.footerContainers}>
                        <Text style={styles.footerContainerText}>Preço</Text>
                        <Text style={styles.priceText}>${event.price}</Text>
                    </View>

                    <View style={styles.footerContainers}>
                        <Text style={styles.footerContainerText}>Ingressos</Text>
                        <Text style={styles.unsold}>{event.unsold}</Text>
                    </View>

                    <View style={styles.footerContainers}>
                        <Text style={styles.footerContainerText}>Duração</Text>
                        <Text style={styles.priceText}>{event.duration}</Text>
                    </View>

                    <TouchableOpacity onPress={screenDetailEvent}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Ver mais</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    box: {
        height: width*0.9324/2,
        width: width*0.9324,
        backgroundColor: 'white',
        borderRadius: 15,
        marginHorizontal: width*0.0341,
        marginBottom: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        color: '#701710'
    },
    
    eventImage:{
        height: (width*0.9324/2)*0.601,
        width: width*0.3647,
        borderRadius: 15,
        marginLeft: width*0.0287,
        marginTop: height*0.01735,
    },
    
    eventInfo: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },

    eventFooter: {
        flex: 1.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    informations: {
        width: width*0.4527,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: height*0.01735,
        marginLeft: width*0.0261,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderWidth: 1,
        borderColor: 'white',
        overflow: 'hidden'
    },

    title: {
        fontFamily: Fonts.ProductSans_Medium,
        fontWeight: 'normal',
        fontSize: 20
    },

    info: {
        fontFamily: Fonts.ProductSans_Medium,
        fontWeight: '600',
        fontSize: 12
    },

    theme: {
        fontFamily: Fonts.ProductSans_Bold,
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 20
    },

    footerContainers: {
        borderRadius: 15,
        borderColor: '#DDE3F6',
        overflow: 'hidden',
        borderWidth: 1.5,
        height: (width*0.9324/2)*0.2072,
        width: width*0.1473,
        marginBottom: (width*0.9324/2)*0.0518,
        marginTop: (width*0.9324/2)*0.06904,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    eventActions: {
        width: width*0.0607,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: height*0.0173,
        alignItems: 'center'
    },

    footerContainerText: {
        fontFamily: Fonts.ProductSans_Medium,
        fontSize: 10    
    },
    
    priceText: {
        fontFamily: Fonts.ProductSans_Bold,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#2D3057'
    },

    unsold: {
        color: '#13E1B0',
        fontFamily: Fonts.ProductSans_Bold,
        fontSize: 17,
        fontWeight: 'bold'
    },

    btn: {
        backgroundColor: '#5257f2',
        borderRadius: 15,
        height: (width*0.9324/2)*0.2072,
        width: width*0.1473,
        marginBottom: (width*0.9324/2)*0.0518,
        marginTop: (width*0.9324/2)*0.06904,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnText: {
        color: '#EBEBEB',
        fontSize: 13,
        fontFamily: Fonts.ProductSans_Medium20
    },

    subTitle: {
        color: '#666666',
        fontSize: 14
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})