import { StyleSheet } from 'react-native'
import { Fonts } from '../../utils/fonts'

export default styles = StyleSheet.create({
    CalendarList: {
        borderRadius: 15,
        flex: 2,
        margin: 10,
        paddingBottom: 100
    },

    container: {
        flex: 1,
        backgroundColor: '#5257f2',
        justifyContent: 'center',
        alignItems: 'center'
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
})