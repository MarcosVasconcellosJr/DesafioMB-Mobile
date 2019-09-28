// import React, { useState } from 'react';
// import { 
//     View, 
//     Text, 
//     TouchableOpacity, 
//     Picker 
// } from 'react-native';

// import styles from './styles'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// export default function BuyScreen({ navigation }) {
//     const [qntIngressos, setQntIngressos] = useState(0)
    
//     const event = navigation.getParam('event')

//     function screenDetailEvent() {
//         navigation.navigate('DetailEvent', {event})
//     }

//     return (
//         <View style={styles.container}>
//             <View style={styles.containerHeader}>
//                 <View style={styles.iconsHeader}>

//                     <TouchableOpacity onPress={screenDetailEvent}>
//                         <Icon name="arrow-left" color='#EBEBEB' size={27} style={styles.icon} />
//                     </TouchableOpacity>
//                     {/* This icon is Used to stylized header, to get best responsible  */}
//                     <Icon name="arrow-left" color='#5257f2' size={27} style={styles.icon} />

//                 </View>
//                 <Text style={styles.textHeader}>COMPRA DE INGRESSO</Text>
//                 <View style={styles.iconsHeader} />

//             </View>
//             <View style={styles.box}>
//             {/* <View style={styles.pickerLayout}>
//                     <Picker style={styles.picker} mode='dropdown' selectedValue={city} onValueChange={setCity}>
//                         <Picker.Item color='#525252' label="Tecnologia" value="tecnologia" />
//                         <Picker.Item color='#525252' label="Corporativo" value="corporativo " />
//                         <Picker.Item color='#525252' label="Espiritual" value="espiritual " />
//                     </Picker>
//                 </View>
//             </View> */}

//             <Text>Deseja realmente comprar {qntIngressos} ingresso(s) para o evento {event.title}</Text>
//         </View>
//     );
// }
