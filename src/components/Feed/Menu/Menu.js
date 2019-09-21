import React, { useState } from 'react';
import { View, Picker, StyleSheet, Text, Switch } from 'react-native';

function Header(){
    const [city, setCity] = useState('')
    const [free, setFree] = useState(false)

    return (
        <View style={styles.container}>

            <View style={styles.menuContainers}>

                <Text style={styles.pickerLabelText}>Categoria</Text>

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

                <Switch onValueChange={setFree} thumbColor='#525299' trackColor={{ false: 'white', true: '#EBEBEE'}}>

                </Switch>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    
    menuContainers: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems:'flex-start'
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

    pickerLabelText:{
        fontSize: 10,
        color: '#EBEBEB'
    },

    imageHeader: {
        borderRadius: 50,
        borderColor: '#444',
        width: 40,
        height: 40,
        marginTop: 21,
        marginRight: 18,    
        shadowColor: '#FFFFFF',
        shadowOffset: {width: 2, height: 1},
        shadowOpacity: 0.9,
        shadowRadius: 5,
    },  

    icon: {
        marginLeft: 18,
        paddingTop: 27
    },  
})

export default Header