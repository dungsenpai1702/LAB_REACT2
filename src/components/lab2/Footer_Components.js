import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Footer_Components({ timeNow, backgroundColor, user }) {

    const [date, setDate] = useState('');
    useEffect(() => {
        const timeNow = getDate();
        setDate(timeNow)
    }, [user.avatar, user.name]);
    const getDate = () => {
        const now = new Date();
        const house = now.getHours();
        const seconds = now.getSeconds();
        const minute = now.getMinutes();
        const day = now.getDay();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();
        return `${day + 10}/${month}/${year}  ${house} : ${minute} : ${seconds}`;
    }
    return (
        <View style={{ width: '100%', height: '15%', backgroundColor: backgroundColor, flexDirection: 'row', padding: 20 }}>
            <Text style={{ color: 'black', fontSize: 18 }}>Thời gian cập nhật thông tin: {`    \n${date}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})