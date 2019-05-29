import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native';

import Header from '../components/Header';
import Post from '../components/Post';

export default class Feed extends Component {
    state = {
        posts: [
            {
                id: Math.random(),
                nickname: 'Matheus Brito',
                email: 'maatheusbrito@hotmail.com',
                image: require('../../assets/imgs/fence.jpg'),
                comments: [
                    {
                        nickname: 'Kamilla Coutinho',
                        comment: 'Lindo!'
                    },
                    {
                        nickname: 'Ana',
                        comment: 'Maravilhoso!'
                    }
                ]
            },
            {
                id: Math.random(),
                nickname: 'Kamilla Coutinho',
                email: 'kamillaCoutinho1@hotmail.com',
                image: require('../../assets/imgs/bw.jpg'),
                comments: [
                    {
                        nickname: 'Matheus Brito',
                        comment: 'QQ isso hein!'
                    }
                ]
            }
        ]
    };

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item}></Post>}>

                </FlatList>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})