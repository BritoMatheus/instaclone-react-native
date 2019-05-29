import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Alert
} from 'react-native';
import { Gravatar } from 'react-native-gravatar'

class Comments extends Component {
    render() {
        let view = null;

        if (this.props.comments) {
            view = this.props.comments.map((item, index) => {
                return (
                    <View style={styles.commentsContainer} key={index}>
                        <Text style={styles.nickname}>{item.nickname}</Text>
                        <Text style={styles.comment}>{item.comment}</Text>
                    </View>
                )
            })
        }

        return (
            <View style={styles.container}>
                {view}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    commentsContainer: {
        flexDirection: 'row',
        marginTop: 5,
        marginRight: 2,
    },
    nickname: {
        marginRight: 5,
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    },
    comment: {
        color: '#555'
    }
});

export default Comments;