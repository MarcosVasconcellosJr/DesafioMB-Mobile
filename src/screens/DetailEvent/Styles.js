import { Fonts } from '../../utils/fonts'
const { width, height } = Dimensions.get('window')
import { Dimensions, StyleSheet } from 'react-native'

export default styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#5257f2',
    },

    box: {
        flex: 10,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 1
    },

    eventImage: {
        flex: 1.5,
        height: 200,
        width: null,
        borderRadius: 15,
        marginHorizontal: width * 0.0287,
        marginTop: height * 0.01735,
    },

    informations: {
        flex: 2,
        marginRight: 27,
        paddingHorizontal: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: height * 0.01735,
    },

    title: {
        fontFamily: Fonts.ProductSans_Medium,
        fontWeight: 'bold',
        fontSize: 22,
        color: '#2D3057'
    },

    subTitle: {
        fontFamily: Fonts.ProductSans_Medium,
        color: '#777',
        fontSize: 14,
        color: '#2D3057'
    },

    info: {
        fontFamily: Fonts.ProductSans_Medium,
        color: '#333',
        fontSize: 14,
        color: '#2D3057'
    },

    priceText: {
        fontFamily: Fonts.ProductSans_Bold,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#2D3057'
    },

    unsold: {
        color: '#2D3057',
        fontFamily: Fonts.ProductSans_Bold,
        fontSize: 17,
        fontWeight: 'bold'
    },

    btn: {
        height: 40,
        backgroundColor: '#13E1B0',
        marginBottom: 15,
        marginHorizontal: 15,
        borderRadius: 15,
        justifyContent: 'center',
    },

    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
        fontFamily: Fonts.ProductSans_Medium20,
        fontWeight: 'bold'
    },

    containerHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    textHeader: {
        flex: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: Fonts.ProductSans_Black,
        color: '#ebebeb',
        fontSize: 24,
        marginTop: 25,
    },

    icon: {
        paddingTop: 27,
    },

    iconsHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 18,
    },

    infoIcons: {
        marginRight: 15
    },

    infoContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginRight: 19,
        marginBottom: 10,
    },

    infoSubContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    infoContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: 20,
        marginBottom: 10
    },

    especialInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
})