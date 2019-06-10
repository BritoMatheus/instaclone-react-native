import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity as TO,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';

import { login } from '../store/actions/user';

class Login extends Component {
    state = {
        nome: 'Matheus',
        email: '',
        senha: ''
    }

    login = () => {
        this.props.onLogin({ ...this.state });
        this.props.navigation.navigate('Profile');
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='E-mail'
                    style={styles.input}
                    autoFocus={true}
                    value={this.state.email}
                    keyboardType='email-address'
                    onChangeText={email => this.setState({ email })}></TextInput>
                <TextInput placeholder='Senha'
                    style={styles.input}
                    value={this.state.senha}
                    secureTextEntry={true}
                    onChangeText={senha => this.setState({ senha })}></TextInput>
                <TO onPress={this.login}
                    style={styles.buttom}>
                    <Text style={styles.buttomText}>Entrar</Text>
                </TO>
                <TO onPress={() => { this.props.navigation.navigate('Register') }}
                    style={styles.buttom}>
                    <Text style={styles.buttomText}>Ainda não sou registrado</Text>
                </TO>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    }
})


const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login);