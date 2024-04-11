import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'



export default function Header_components({ showLeft, showCenter, showRight, navigation, title, iconName, iconRight }) {


    return (
        <View style={[{ width: '100%', height: '7%', flexDirection: 'row', backgroundColor: 'white' }, st.shadow]}>
            {showLeft ? (
                <TouchableOpacity style={{ width: '15%', height: '100%' }} onPress={() => { navigation.goBack() }}>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faArrowLeft} color={'black'} size={24} />
                    </View>
                </TouchableOpacity>
            ) : (
                <View style={{ width: '15%', height: '100%' }}>

                </View>
            )}
            {showCenter ? (
                <View style={{ width: '70%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '700' }}>{title}</Text>
                </View>
            ) : (
                <View style={{ width: '70%', height: '100%' }}>

                </View>
            )}
            {showRight ? (
                <View style={{ width: '15%', height: '100%', }} >
                    <TouchableOpacity style={{ width: '100%', height: '100%' }}>
                        <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={iconRight} color={'black'} size={24} />
                        </View>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={{ width: '15%', height: '100%' }} >

                </View>
            )}
        </View>
    )
}

const st = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10
    }
})