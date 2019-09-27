import { StyleSheet } from 'react-native';
import { Fonts } from '../../utils/fonts'

export default styles = StyleSheet.create({

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
