import { StyleSheet } from 'react-native'
import { Fonts } from '../../utils/fonts'


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5257f2'
    },

    box: {
        flex: 3,
        backgroundColor: 'white',
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 1
    },

    descriptionContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 15
    },

    description: {
        textAlign: 'auto'
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

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: Fonts.ProductSans_Medium,
        color: '#2D3057'
    }
})