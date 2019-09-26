import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getList } from '../store/actions/events'

import {
    View,
    StyleSheet,
    FlatList,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

//Components
import Menu from '../components/Feed/Menu/Menu'
import Event from '../components/Feed/Events/Events'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Fonts } from '../../src/utils/fonts'

export default function Feed({ navigation }) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getList())
    }, [])

    let eventList1 = {
        event: [
            {
                id: '1',
                imageLink: 'https://s2.glbimg.com/hPZXUAStHS4R8PUIR0mEUhF_7Lk=/0x0:1846x1232/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/r/j/08PObBSlC4dxJzCLjctQ/roupa-nova.jpg',
                title: 'Rock in Rio',
                subTitle: 'O maior show de rock da América Latina',
                local: 'R. Manuel da Nóbrega, 1361 - Ibirapuera, São Paulo - SP, 04001-140',
                category: ['Música', 'Show de banda', 'Entretenimento'],
                description: 'Muse, Imagine Dragons e Nickelback no Rock in Rio 2019',
                price: '100',
                unsold: '19',
                duration: '90m',
                date: 'SET 19',
                responsibleEntity: 'Rock enterprise',
                subscribed: []
            },
            {
                id: '2',
                imageLink: 'https://www.unip.br/modulos/comunicacao/noticia/img_noticia/3820_22381.jpg',
                title: 'Carreira, Liderança e Startup',
                subTitle: 'Como mergulhar de vez no empreendedorismo',
                local: 'Av. Comendador Enzo Ferrari, 280 - Swift, Campinas - SP, 13045-770',
                category: ['', 'Politica'],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
                price: '700',
                unsold: '20',
                duration: '60m',
                date: 'NOV 15',
                responsibleEntity: 'Unip - Universidade Paulista',
                subscribed: []
            },
            {
                id: '3',
                imageLink: 'https://s2.glbimg.com/owRzXuQNMwTCElFbzITcpgFe92U=/940x523/e.glbimg.com/og/ed/f/original/2018/04/26/architecture-auditorium-blue-382297.jpg',
                title: 'Jantar de gala da OAB de Campinas',
                subTitle: 'O evento é destinado aos profissionais de toda a demanda jurídica de Campinas',
                local: 'Rua Armando Strazzacappa - Fazenda Santa Cândida, Campinas - SP, 13092-599',
                category: ['Conferência'],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
                price: '0',
                unsold: '503',
                duration: '120m',
                date: 'NOV 15',
                responsibleEntity: 'OAB Campinas',
                subscribed: []
            },
            {
                id: '4',
                imageLink: 'https://www.iwu.edu/tedx/tbankstedx.jpg',
                title: 'TED',
                subTitle: 'Tom Thum: A orquestra em minha boca',
                local: '317 Pitt St, Sydney NSW 2000, Austrália',
                category: ['Entretenimento', 'Música'],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
                price: '30',
                unsold: '20',
                duration: '60m',
                date: 'NOV 15',
                responsibleEntity: 'TED TALKS',
                subscribed: []
            },
            {
                id: '5',
                imageLink: 'https://www.e-dublin.com.br/wp-content/uploads/2016/09/electric-picnic-723x370.jpg',
                title: 'Festa de ação de graças na comunidade evangélica de Nilópolis',
                subTitle: 'Rock in Rio',
                local: 'Umuarama',
                category: ['Entretenimento', 'Musica', 'Politica'],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
                price: '700',
                unsold: '20',
                duration: '20m',
                date: 'NOV 15',
                responsibleEntity: 'Rock enterprise',
                subscribed: []
            },
            {
                id: '6',
                imageLink: 'https://i0.wp.com/www.zedudu.com.br/wp-content/uploads/2019/09/Desfile-de-7-de-Setembro-ser%C3%A1-realizado-%C3%A0-tarde-na-Pra%C3%A7a-de-Eventos.jpg?fit=788%2C466&ssl=1',
                title: 'Onça Pintada',
                subTitle: 'Rock in Rio',
                local: 'Umuarama',
                category: ['Entretenimento', 'Musica', 'Politica'],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
                price: '700',
                unsold: '20',
                duration: '20m',
                date: 'NOV 15',
                responsibleEntity: 'Rock enterprise',
                subscribed: []
            },
            {
                id: '7',
                imageLink: 'https://i0.wp.com/www.zedudu.com.br/wp-content/uploads/2019/09/Desfile-de-7-de-Setembro-ser%C3%A1-realizado-%C3%A0-tarde-na-Pra%C3%A7a-de-Eventos.jpg?fit=788%2C466&ssl=1',
                title: 'Onça Pintada',
                subTitle: 'Rock in Rio',
                local: 'Umuarama',
                category: ['Entretenimento', 'Musica', 'Politica'],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
                price: '700',
                unsold: '20',
                duration: '20m',
                date: 'NOV 15',
                responsibleEntity: 'Rock enterprise',
                subscribed: []
            },
            {
                id: '8',
                imageLink: 'https://i0.wp.com/www.zedudu.com.br/wp-content/uploads/2019/09/Desfile-de-7-de-Setembro-ser%C3%A1-realizado-%C3%A0-tarde-na-Pra%C3%A7a-de-Eventos.jpg?fit=788%2C466&ssl=1',
                title: 'Onça Pintada',
                subTitle: 'Rock in Rio',
                local: 'Umuarama',
                category: ['Entretenimento', 'Musica', 'Politica'],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
                price: '700',
                unsold: '20',
                duration: '20m',
                date: 'NOV 15',
                responsibleEntity: 'Rock enterprise',
                subscribed: []
            },
            {
                id: '9',
                imageLink: 'https://i0.wp.com/www.zedudu.com.br/wp-content/uploads/2019/09/Desfile-de-7-de-Setembro-ser%C3%A1-realizado-%C3%A0-tarde-na-Pra%C3%A7a-de-Eventos.jpg?fit=788%2C466&ssl=1',
                title: 'Onça Pintada',
                subTitle: 'Rock in Rio',
                local: 'Umuarama',
                category: ['Entretenimento', 'Musica', 'Politica'],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
                price: '700',
                unsold: '20',
                duration: '20m',
                date: 'NOV 15',
                responsibleEntity: 'Rock enterprise',
                subscribed: []
            },
        ]
    }

    const event = useSelector((state) => state.event)

    console.log('eventList1')
    console.log(eventList1)
    console.log('event')
    console.log(event)

   return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity>
                        <Icon name="calendar" color='#EBEBEB' size={30} style={styles.icon} />
                    </TouchableOpacity>

                    <Text style={styles.textHeader}>EVENTOS</Text>

                    <TouchableOpacity>
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
                    data={eventList1.event}
                    renderItem={({ item }) => <Event event={item} navigation={navigation} />}
                    showsVerticalScrollIndicator={false}
                    disableVirtualization={true}
                >
                </FlatList>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#EBEFF7',
    },

    header: {
        flex: 1.9,
        backgroundColor: '#5257f2',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        position: 'relative'
    },

    containerEvents: {
        flex: 7,
        justifyContent: 'flex-start',
        backgroundColor: '#EBEFF7',
    },

    input: {
        marginTop: 10,
        marginHorizontal: 30,
        borderBottomWidth: 2,
        borderBottomLeftRadius: 10,
        borderBottomColor: '#DDDDDD',
        fontSize: 16,
    },

    containerHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },

    textHeader: {
        fontWeight: 'bold',
        fontFamily: Fonts.ProductSans_Black,
        color: '#ebebeb',
        fontSize: 24,
        marginTop: 25,
    },

    imageHeader: {
        borderRadius: 20,
        borderColor: '#EBEBEB',
        borderWidth: 1,
        width: 40,
        height: 40,
        marginTop: 21,
        marginRight: 18,
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 2, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
    },

    icon: {
        marginLeft: 18,
        paddingTop: 27,
    },
});
