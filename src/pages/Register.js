import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity as TO } from 'react-native'

export default class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder='Nome'
                    autoFocus={true}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}></TextInput>
                <TextInput style={styles.input}
                    placeholder='Email'
                    keyboardType="email-address"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}></TextInput>
                <TextInput style={styles.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}></TextInput>
                <TO onPress={() => { }}
                    style={styles.buttom}>
                    <Text style={styles.buttomText}>Salvar</Text>
                </TO>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
})