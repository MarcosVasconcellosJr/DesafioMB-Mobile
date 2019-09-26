import { Fonts } from '../../utils/fonts'
const { width, height } = Dimensions.get('window')
import { Dimensions, StyleSheet } from 'react-native'

export default styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#5257f2'
    },

    box: {
        flex: 8,
        backgroundColor: 'white',
        borderRadius: 15,
        marginHorizontal: width * 0.0341,
        marginBottom: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 1
    },

    eventImage: {
        flex: 1,
        height: null,
        width: null,
        borderRadius: 15,
        marginHorizontal: width * 0.0287,
        marginTop: height * 0.01735,
    },

    eventInfo: {
        flex: 3,
        marginHorizontal: 15
    },

    informations: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: height * 0.01735,
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

    footerContainers: {
        borderRadius: 15,
        borderColor: '#DDE3F6',
        overflow: 'hidden',
        borderWidth: 1.5,
        height: (width * 0.9324 / 2) * 0.2072,
        width: width * 0.1473,
        marginBottom: (width * 0.9324 / 2) * 0.0518,
        marginTop: (width * 0.9324 / 2) * 0.06904,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    eventActions: {
        width: width * 0.0607,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: height * 0.0173,
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
        color: '#2D3057',
        fontFamily: Fonts.ProductSans_Bold,
        fontSize: 17,
        fontWeight: 'bold'
    },

    btn: {
        flex: 1,
        backgroundColor: '#13E1B0',
        borderRadius: 15,
        marginBottom: (width * 0.9324 / 2) * 0.0518,
        marginTop: (width * 0.9324 / 2) * 0.06904,
        marginHorizontal: 15,
        justifyContent: 'center',
    },

    btnText: {
        color: 'white',
        fontSize: 13,
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
        marginRight: 20,
        marginBottom: 10
    },

    infoSubContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginRight: 15
    }

})