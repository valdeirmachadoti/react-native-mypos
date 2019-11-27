import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Maria Santos',
            email: 'mariasantos@gmail.com',
            image: require('../../assets/imgs/boat.jpg'),
            comments: [{
                nickname: 'Valdeir Pereira',
                comment: 'I Belive..!'
            }, {
                nickname: 'Mayquelle Machado',
                comment: 'Foto linda..!!!'
            }]
        }, {
            id: Math.random(),
            nickname: 'May Santos',
            email: 'mariasantos@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Valdeir Pereira',
                comment: 'I Belive..!'
            }, {
                nickname: 'Mayquelle Machado',
                comment: 'Foto linda..!!!'
            }]
        }, {
            id: Math.random(),
            nickname: 'Gustavo..',
            email: 'felipevieiras@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        },
        {
            id: Math.random(),
            nickname: 'Maria Santos',
            email: 'mariasantos@gmail.com',
            image: require('../../assets/imgs/gate.jpg'),
            comments: [{
                nickname: 'Valdeir Pereira',
                comment: 'I Belive..!'
            }, {
                nickname: 'Mayquelle Machado',
                comment: 'Foto linda..!!!'
            }]
        }, {
            id: Math.random(),
            nickname: 'Maria Santos',
            email: 'mariasantos@gmail.com',
            image: require('../../assets/imgs/today.jpg'),
            comments: [{
                nickname: 'Valdeir Pereira',
                comment: 'I Belive..!'
            }, {
                nickname: 'Mayquelle Machado',
                comment: 'Foto linda..!!!'
            }]
        },]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item} />} />
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

export default Feed

