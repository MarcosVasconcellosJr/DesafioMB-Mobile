import React, { useState } from 'react';
import { View, Picker, StyleSheet, Text, Switch } from 'react-native';
import { Fonts } from '../../../utils/fonts'

function Header() {
    const [city, setCity] = useState('')
    const [free, setFree] = useState(false)

    return (
        <View style={styles.container}>

            <View style={styles.menuContainers}>

                <Text style={styles.pickerLabelText}>Categoria</Text>

                <View style={styles.pickerLayout}>
                    <Picker style={styles.picker} mode='dropdown' selectedValue={city} onValueChange={setCity}>
                        <Picker.Item color='#525252' label="Tecnologia" value="tecnologia" />
                        <Picker.Item color='#525252' label="Corporativo" value="corporativo " />
                        <Picker.Item color='#525252' label="Espiritual" value="espiritual " />
                        <Picker.Item color='#525252' label="Acadêmico" value="acadêmico " />
                        <Picker.Item color='#525252' label="Entretenimento" value="entretenimento" />
                        <Picker.Item color='#525252' label="Esportivo" value="esportivo" />
                        <Picker.Item color='#525252' label="Político" value="político" />
                        <Picker.Item color='#525252' label="Educacional" value="educacional" />
                        <Picker.Item color='#525252' label="Música" value="música" />
                        <Picker.Item color='#525252' label="Comédia" value="comédia" />
                        <Picker.Item color='#525252' label="Conferência" value="conferência" />
                        <Picker.Item color='#525252' label="Moda" value="moda" />
                        <Picker.Item color='#525252' label="Feira" value="feira" />
                    </Picker>
                </View>
            </View>

            <View style={styles.menuContainers}>

                <Text style={styles.pickerLabelText}>Cidade</Text>

                <View style={styles.pickerLayout}>
                    <Picker style={styles.picker} mode='dropdown' selectedValue={city} onValueChange={setCity}
                    >
                        <Picker.Item color='#525252' label="Sumaré" value="sumaré" />
                        <Picker.Item color='#525252' label="Campinas" value="campinas" />
                        <Picker.Item color='#525252' label="Americana" value="americana" />
                        <Picker.Item color='#525252' label="Valinhos" value="valinhos" />
                        <Picker.Item color='#525252' label="Piracicaba" value="piracicaba" />
                        <Picker.Item color='#525252' label="Nova Odessa" value="nova odessa" />
                    </Picker>
                </View>
            </View>

            <View style={styles.menuContainers}>

                <Text style={styles.pickerLabelText}>Gratuito</Text>

                <View style={styles.pickerLayout}>
                    <Switch style={styles.switch} 
                        value={free} 
                        onValueChange={setFree}
                        thumbColor={free ? '#5257f2' : '#EBEBEB'} 
                        trackColor={{ false: 'white', true: '#87BCE6' }}
                    >
                    </Switch>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        marginHorizontal: 15
    },

    menuContainers: {
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    pickerLayout: {
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
    },

    picker: {
        marginHorizontal: 5,
        color: '#616161',
        width: 140,
        height: 30
    },

    switch: {
        height: 30
    },

    pickerLabelText: {
        fontSize: 15,
        color: '#EBEBEB',
        fontFamily: Fonts.ProductSans_Regular,
        fontWeight: '300'
    },

    imageHeader: {
        borderRadius: 50,
        borderColor: '#444',
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
})

export default Header