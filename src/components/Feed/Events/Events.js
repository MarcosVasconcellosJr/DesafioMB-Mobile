import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';

function Event() {

    return (
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity>
                    <View style={styles.box}>
                        <Text>Ola</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.box}>
                        <Text>Ola</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.box}>
                        <Text>Ola</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: 200,
    },

    box: {
        flex: 1,
        backgroundColor: 'white',
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
})

export default Event