import { StyleSheet } from 'react-native'

import { Fonts } from '../../utils/fonts'

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        width: null,
        height: null,
    },

    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    salutation: {
        flex: 1,
        marginBottom: 30,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    textSalutation: {
        color: 'white',
        fontSize: 24,
        fontFamily: Fonts.ProductSans_Bold,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    box: {
        flex: 3,
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        marginBottom: 50,
        marginHorizontal: 25,
        flexDirection: 'column',
        justifyContent: 'center',
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 3,
    },

    boxHead: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxHeadText: {
        fontSize: 24,
        fontFamily: Fonts.ProductSans_Bold,
        fontWeight: 'bold',
        color: '#222222',
    },

    inputsView: {
        flex: 2,
        justifyContent: 'flex-start',
    },

    input: {
        marginTop: 10,
        marginHorizontal: 30,
        borderBottomWidth: 2,
        borderBottomLeftRadius: 10,
        borderBottomColor: '#DDDDDD',
        fontSize: 16,
    },

    btnContainer: {
        flex: 1.8,
        justifyContent: 'flex-start',
    },

    buttons: {
        backgroundColor: '#1DDCAF',
        height: 40,
        marginHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },

    btnText: {
        fontSize: 20,
        color: 'white',
        fontFamily: Fonts.ProductSans_Bold,
        fontWeight: 'bold'
    },

    signup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 50,
    },

    buttonSignup: {
        color: '#5257F2',
        fontWeight: 'bold',
    },

})