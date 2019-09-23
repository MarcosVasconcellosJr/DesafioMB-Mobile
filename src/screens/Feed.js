import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Modal,
    Text,
    TouchableOpacity,
    Alert,
    Image
} from 'react-native';

//Components
import Menu from '../components/Feed/Menu/Menu'
import Events from '../components/Feed/Events/Events'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Fonts } from '../../src/utils/fonts'

export default function Feed({ navigation }) {
    const [modalVisible, setModalVisible] = useState(true)

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity onPress={setModalVisible}>
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
                <ScrollView>
                    <Events />
                    <Events />
                    <Events />
                    <Events />
                    <Events />
                </ScrollView>
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
        marginTop: 25
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
        paddingTop: 27
    },
});
