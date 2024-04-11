import { Alert, Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
export default Header_Components = memo(function Header_Components({ name, img }) {
    const [checkImg, setCheckImg] = useState(false)
    const [loading, setLoading] = useState(false);
    // function randomColor() {
    //     var r = Math.floor(Math.random() * 256);
    //     var g = Math.floor(Math.random() * 256);
    //     var b = Math.floor(Math.random() * 256);
    //     return 'rgb(' + r + ',' + g + ',' + b + ')';
    // }
    const [bg, setBg] = useState("white");
    useEffect(() => {
        async function fetchImg() {
            setLoading(true)
            try {
                await checkImageLink(img);
                setCheckImg(true);
                console.log("img false");
            } catch (error) {
                setCheckImg(false);
                // Alert.alert('Error', 'Invalid image URL', [
                //     {
                //         text: "Ok",
                //         style: 'cancel'
                //     }
                // ]);
                console.log("imgTrue");
            } finally {
                setLoading(false)
            }
        }
        fetchImg();
    }, [img])


    const checkImageLink = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url, { method: 'HEAD' })
                .then((response) => {
                    if (response.ok) {
                        resolve(true);
                    } else {
                        reject(new Error('Invalid image URL'));
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    return (
        <View style={{ width: '100%', height: '10%', backgroundColor: bg, flexDirection: 'row' }}>
            <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                {!checkImg ? (
                    <FontAwesomeIcon icon={faUser} size={36} />
                ) : (
                    loading ? (
                        <>
                            <ActivityIndicator color={'red'} size={24} />
                        </>
                    ) : (
                        <>
                            <Image style={{ width: '80%', height: '80%', borderRadius: 50 }} source={{ uri: img }} /></>
                    )
                )}
            </View>
            <View style={{ width: '80%', height: '100%', justifyContent: 'center' }}>
                <Text>Chào ngày mới</Text>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '700' }}>{name}</Text>
            </View>
        </View>
    )
});

const styles = StyleSheet.create({})