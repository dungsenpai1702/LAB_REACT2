import { Dimensions, PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { H, W } from '../../constants/theme';
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'


export default function Lab4_1() {
    const [img, setImg] = useState('')
    const [showToast, setShowToast] = useState(false);
    const openCamera = async () => {
        try {
            // yêu cầu quyền truy cập
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
                const result = await launchCamera({ mediaType: 'photo', cameraType: 'back' })

                setImg(result.assets[0].uri);
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };
    const openAlbum = async () => {
        try {
            // yêu cầu quyền truy cập
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
                const result = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 1 })

                setImg(result.assets[0].uri);
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const styleAnimated = useAnimatedStyle(() => {
        return {
            opacity: withTiming(showToast ? 1 : 0, { duration: 400 }),
            width: withTiming(showToast ? (W * 0.8) : 0, { duration: 400 }),
            height: withTiming(showToast ? 200 : 0, { duration: 400 })
        }
    })

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text>lab4_1</Text>
            <View style={[{ width: 100, height: 100, borderRadius: 50, overflow: 'hidden', marginVertical: 50, justifyContent: 'center', alignItems: 'center', }, st.shadowAvatar]}>
                {
                    img.trim() != '' ? (
                        <>
                            <Image source={{ uri: img }} style={{ width: 100, height: 100, objectFit: 'cover' }} />
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faUser} size={36} color='#999999' />
                        </>
                    )
                }
            </View>
            <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 50, borderWidth: 2, borderColor: 'black', backgroundColor: '#e6e6e6' }}
                onPress={() => { setImg('') }}
            >
                <FontAwesomeIcon icon={faXmark} size={26} color='black' />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setShowToast(!showToast)
                }}
                style={{ marginTop: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderStyle: 'dotted', borderWidth: 2 }}
            >
                <Text style={{}}>+</Text>
            </TouchableOpacity>



            <Animated.View style={[styleAnimated, st.toast, st.shadow,]}>
                <TouchableOpacity style={[st.itemToast, st.shadowItemToast, showToast ? {} : { width: 0, height: 0 }]}
                    onPress={() => {
                        openAlbum();
                        setShowToast(false)
                    }}
                >

                    <Text style={[st.textToast]}>Open Library</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[st.itemToast, st.shadowItemToast, showToast ? {} : { width: 0, height: 0 }]}
                    onPress={() => {
                        setShowToast(false);
                        openCamera()
                    }}
                >
                    <Text style={[st.textToast]}>Open Camera</Text>
                </TouchableOpacity>

            </Animated.View>
        </View>
    )
}

const st = StyleSheet.create({

    toast: {
        width: W * 0.8,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cce6ff',
        position: 'absolute',
        top: (H / 2) - 200,
        borderRadius: 10
    },
    shadow: {
        shadowColor: '#3399ff',
        elevation: 10,
        shadowOpacity: 10,
        shadowRadius: 10
    },
    shadowItemToast: {
        shadowColor: '#000000',
        elevation: 10,
        shadowOpacity: 10,
        shadowRadius: 10
    },
    itemToast: {
        width: W * 0.7,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textToast: {
        fontSize: 18,
        fontWeight: '600'
    },
    shadowAvatar: {
        shadowColor: '#000000',
        elevation: 1,
        shadowOpacity: 1,
        shadowRadius: 1
    }
})