import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image
} from 'react-native';
import { connect } from 'react-redux';

import Author from './Author';
import Comments from './Comments';
import CommentAdd from './CommentAdd';

class Post extends Component {
    render() {
        const addComment = this.props.nome ?
            <CommentAdd postId={this.props.id} /> : null;

        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image}></Image>
                <Author email={this.props.email} nickname={this.props.nickname} />
                <Comments comments={this.props.comments} />
                {addComment}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
});

const mapStateToProps = ({ user }) => {
    return {
        nome: user.nome
    }
}
export default connect(mapStateToProps, null)(Post);