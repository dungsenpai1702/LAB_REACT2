import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header_Components from '../../components/lab2/Header_Components'
import Body_Components from '../../components/lab2/Body_Components'
import Footer_Components from '../../components/lab2/Footer_Components'

export default function Main_lab2() {

    const [user, setUser] = useState({ name: 'Nguyễn Văn Dũng', avatar: 'https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/362619930_999090724776880_9017823758430265706_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFO0nupSR_GnKRZwUcXagb16xNMjg98JwjrE0yOD3wnCAtVy18tFu3M27UGfziJZ68vrvasHSG-x91ho33XwOzO&_nc_ohc=vjcAhtVqQIgAX-wJUJ0&_nc_ht=scontent.fsgn2-10.fna&oh=00_AfAJNqCoJqOCm-Ahp9H6mWk6qsV4uIbmlGfmKJ4mu8wpQQ&oe=65F33CD0' });

    const [color, setColor] = useState('white');
 

    return (
        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <Header_Components name={user.name} img={user.avatar} />
            <Body_Components user={user} setUser={setUser} setColor={setColor} color={color} />
            <Footer_Components backgroundColor={color} user={user}/>
        </View>
    )
}

const styles = StyleSheet.create({})