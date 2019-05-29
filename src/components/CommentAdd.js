import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Alert,
    TouchableWithoutFeedback as TWF
} from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CommentAdd extends Component {
    state = {
        comment: 'Arromado',
        editMode: false
    };

    handleAdd = () => {
        Alert.alert('Adicionado', this.state.comment);
    }

    render() {
        let commentArea = null;
        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput style={styles.input} placeholder='Pode comentar...' autoFocus={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                        onSubmitEditing={this.handleAdd}>
                    </TextInput>
                    <TWF onPress={() => this.setState({ editMode: false })}>
                        <Icon name='times' size={20} color='#555'></Icon>
                    </TWF>
                </View>
            )
        } else {
            commentArea = (
                <TWF onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon name='comment-o' size={25} color='#555'></Icon>
                        <Text style={styles.caption}>
                            Adicione um comentário...
                        </Text>
                    </View>
                </TWF>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {commentArea}
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC'
    },
    input: {
        marginLeft: 10,
        fontSize: 12,
        width: '90%'
    }
});