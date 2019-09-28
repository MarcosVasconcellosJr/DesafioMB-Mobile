import { StyleSheet } from 'react-native'

import {Fonts} from '../../utils/fonts'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '',
        justifyContent: 'flex-start',
        backgroundColor: '#5257f2'
    },

    box: {
        flex: 6,
        marginVertical: 100,
        marginHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 25,
    },

    containerHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
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

    iconsHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 18,
    },

    icon: {
        paddingTop: 27,
    },
})