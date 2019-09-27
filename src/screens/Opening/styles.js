import { StyleSheet } from 'react-native'
import { Fonts } from '../../utils/fonts'

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
    },

	container: {
		flex: 1,
		justifyContent: 'flex-end',
    },

    buttons: {
		backgroundColor: '#1DDCAF',
		height: 50,
		marginHorizontal: 30,
        borderRadius: 5,
        flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 150,
    },

    btnText: {
		fontSize: 20,
		color: 'white',
        fontFamily: Fonts.ProductSans_Bold,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})
