import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';


let sampleData = [
    { id: 1, title: "Title 1" },
    { id: 2, title: "Title 2" },
    { id: 3, title: "Title 3" },
    { id: 4, title: "Title 4" },
    { id: 5, title: "Title 5" },
    { id: 6, title: "Title 6" },
    { id: 7, title: "Title 7" },
    { id: 8, title: "Title 8" },
    { id: 9, title: "Title 9" },
    { id: 10, title: "Title 10" }
];


export default function Lab3_3() {

    const [focused, setFocused] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [opacityA, setOpacity] = useState(1);
    const [heightA, setHeightA] = useState(300);
    const [sticky, setSticky] = useState([0]);
    const [scrollE, setScrollE] = useState(true);
    const scrollViewRef = useRef(null);
    // console.log(scrollPosition);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            // opacity: withTiming(scrollPosition <= 300 ? 1 : 0, { duration: 1000 }),
            // height: withTiming(scrollPosition <= 300 ? 300 : 0, { duration: 1000 })
            opacity: withTiming(opacityA, { duration: 600 }),
            height: withTiming(heightA, { duration: 600 })
        }
    })

    const editScroll = () => {
        if (heightA > 0) {
            setScrollE(false);
        } else {
            setScrollE(true)
        }
    }


    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ width: '100%', height: '100%' }}
                ref={scrollViewRef}
                stickyHeaderIndices={[0]}
                scrollEventThrottle={0.0000000000000001}
                onScroll={(event) => {
                    const { y } = event.nativeEvent.contentOffset;
                    setScrollPosition(y);
                    // if (y >= 30 && y <= 330) {
                    //     setOpacity(1 - ((y - 30) / 270));
                    //     console.log(opacityA)
                    // }
                    editScroll()
                    if (y > 500) {
                        scrollViewRef.current.scrollTo({ y: 500, animated: false });
                    }

                    if (y >= 30 && y <= 300) {
                        setOpacity(1 - (y - 30) / 270); // Tính toán opacity tuyến tính trong khoảng từ 30 đến 300
                        setHeightA(300 - (y - 30))
                        if (y < y / 2) {
                            y = 0
                        }
                        // setSticky([0, 1])
                    } else if (y < 30) {
                        setHeightA(300)
                        setOpacity(1); // Nếu scrollY nhỏ hơn 30, thì opacity là 1
                        // setSticky([0])
                    } else if (y > 300) {
                        // setSticky([0])
                        setHeightA(0)
                        setOpacity(0); // Nếu scrollY lớn hơn 300, thì opacity là 0
                    }
                    // console.log(y)
                }}
            >
                <View style={{ width: '100%', position: 'absolute', top: 0 }}>
                    <View style={{ backgroundColor: 'orange', width: '100%' }}>

                        <Text style={{ color: 'white', fontSize: 24, fontWeight: '600', height: 30 }}>Netguru</Text>
                        <Animated.View style={[{ width: '100%', height: 300, backgroundColor: 'white' }, animatedStyle]}>

                        </Animated.View>
                        <ScrollView
                            style={{ width: '100%', height: 50, flexDirection: 'row', marginVertical: 10 }}
                            horizontal={true}
                        >
                            {sampleData.map((item, id) => {
                                return (
                                    <View key={id} style={[{ width: 80, backgroundColor: focused == id ? 'rgba(225, 204, 255, 1)' : 'rgba(225, 204, 255, 0.6)', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginHorizontal: 10 }]}>
                                        <TouchableOpacity onPress={() => { setFocused(id) }}>
                                            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>{item.title}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>

                    <View style={{ width: '100%', height: '70%' }}>
                        <ScrollView style={{ height: '100%', width: '100%' }}
                            scrollEnabled={scrollE}
                            scrollEventThrottle={1}
                            onScroll={(event) => {
                                const { y } = event.nativeEvent.contentOffset;
                                if (y == 0) {
                                    setScrollE(false)
                                }
                            }}
                        >
                            {sampleData.map((item, id) => {
                                return (
                                    <View key={id} style={[{ width: 80, backgroundColor: focused == id ? 'rgba(225, 204, 255, 1)' : 'rgba(225, 204, 255, 0.6)', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginHorizontal: 10, marginVertical: 100 }]}>
                                        <TouchableOpacity onPress={() => { setFocused(id) }}>
                                            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>{item.title}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>

                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})

    < FlatList

// ListHeaderComponent={() => {
//     return (
//         <View style={{ width: '100%', height: 50, backgroundColor: "orange" }}>

//         </View>
//     )
// }}
// />