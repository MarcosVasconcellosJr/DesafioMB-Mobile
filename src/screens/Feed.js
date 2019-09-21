import React from 'react';
import {
	View,
    StyleSheet,
    TextInput,
    ScrollView
} from 'react-native';

//Components
import Header from '../components/Feed/Menu/Header'
import Menu from '../components/Feed/Menu/Menu'

export default function Feed({ navigation }) {
	return (
		<View style={styles.container}>
            <View style={styles.header}>
                <Header />
                <Menu />
            </View>

			<View style={styles.containerEvents}>
                <ScrollView>
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="    senha"
                        placeholderTextColor="#DDDDDD"
                        secureTextEntry={true}
                    />
                </ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
        justifyContent: 'flex-start',
		backgroundColor: '#EBEBEB',
        
	},
    
    header: {
        flex: 1.8,
        backgroundColor: '#5257f2',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },

	containerEvents: {
		flex: 7,
		justifyContent: 'flex-start',
		backgroundColor: '#EBEBEB',
    },

    input: {
        marginTop: 10,
        marginHorizontal: 30,
        borderBottomWidth: 2,
        borderBottomLeftRadius: 10,
        borderBottomColor: '#DDDDDD',
        fontSize: 16,
      },
});
