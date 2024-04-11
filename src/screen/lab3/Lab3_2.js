// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { H, W } from '../../constants/theme'
// import { FlatList, ScrollView } from 'react-native-gesture-handler'

// import Animated, {
//     useSharedValue,
//     useAnimatedStyle,
//     withSpring,
//     withTiming,
//     withRepeat,
// } from 'react-native-reanimated';


// const DATA = [
//     {
//         id: '1',
//         title: 'First Item',
//     },
//     {
//         id: '2',
//         title: 'Third Item',
//     },
//     {
//         id: '3',
//         title: 'Third Item',
//     },
//     {
//         id: '4',
//         title: 'Third Item',
//     },
//     {
//         id: '5',
//         title: 'Third Item',
//     },
//     {
//         id: '6',
//         title: 'Third Item',
//     },
//     {
//         id: '7',
//         title: 'Third Item',
//     },
//     {
//         id: '8',
//         title: 'Third Item',
//     },
//     {
//         id: '9',
//         title: 'Third Item',
//     },
//     {
//         id: '10',
//         title: 'Third Item',
//     },
//     {
//         id: '11',
//         title: 'Third Item',
//     },
//     {
//         id: '12',
//         title: 'Third Item',
//     },
//     {
//         id: '13',
//         title: 'Third Item',
//     },
//     {
//         id: '14',
//         title: 'Third Item',
//     },
//     {
//         id: '15',
//         title: 'Third Item',
//     },
//     {
//         id: '16',
//         title: 'Third Item',
//     },
//     {
//         id: '17',
//         title: 'Third Item',
//     },
//     {
//         id: '18',
//         title: 'Third Item',
//     },
// ];

// const Item = ({ title, sv, item }) => {
//     let animatedStyle = useAnimatedStyle(() => {
//         let isInvisible = sv.value
//             .filter(item => item.isViewable)
//             .find(itemViewable => itemViewable.item.id === item.id);
//         return {
//             opacity: withTiming(isInvisible ? 1 : 0, { duration: 500 }),
//             transform: [
//                 {
//                     scale: withTiming(isInvisible ? 1 : 0.5, { duration: 500 }),
//                 },
//             ],
//         };
//     }, []);

//     return (
//         <Animated.View style={[{ width: '100%', height: 80, backgroundColor: '#ccccff', marginBottom: 15, padding: 10 }, animatedStyle]}>
//             <Text>{title}</Text>
//         </Animated.View>
//     )
// }

// export default function Lab3() {


//     let sv = useSharedValue([]);

//     return (
//         <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center' }}>
//             <Text style={{ textAlign: 'center' }}>Lab 3</Text>

//             <View style={{ height: H * 0.8, width: '90%' }}>

//                 <FlatList
//                     onViewableItemsChanged={({ viewableItems: vItems }) => {
//                         sv.value = vItems;

//                     }}
//                     data={DATA}
//                     renderItem={item => <Item title={item.title} sv={sv} item={item} />}
//                     keyExtractor={item => item.id}
//                 />
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({})




import React, { useEffect } from 'react';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSpring,
} from 'react-native-reanimated';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';

const DATA = [
    {
        id: '33434-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '4343343-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '8787-3da1-471f-bd96-145571e23d72',
        title: 'Third Item',
    },
    {
        id: '454545-3da1-471f-bd96-145571e25d72',
        title: 'Third Item',
    },
    {
        id: '98989-3da1-471f-bd96-145571e79d72',
        title: 'Third Item',
    },
    {
        id: '1212-3da1-471f-bd96-145571e39d72',
        title: 'Third Item',
    },
    {
        id: '080909-3da1-471f-bd96-345571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-67676-371f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-67676-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-441f-67676-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-4716-3232-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-34343-471f-7d96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '67676-3da1-471f-557575-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '33333-3da1-471f-7676-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '545454-3da1-67676-7d96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '4345443-3da1-471f-32232-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '4343434-0909-471f-7d96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '454545-3da1-471f-7d96-35354545',
        title: 'Third Item',
    },
    {
        id: '233232-3da1-65656-7d96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title, sv, item }) => {
    let animatedStyle = useAnimatedStyle(() => {
        let isInvisible = sv.value
            .filter(item => item.isViewable)
            .find(itemViewable => itemViewable.item.id === item.id);
        return {
            opacity: withTiming(isInvisible ? 1 : 0, { duration: 400 }),
            transform: [
                {
                    scale: withTiming(isInvisible ? 1 : 0.7, { duration: 300 }),
                    // rotate: withTiming(isInvisible ? '45deg' : '0deg', { duration: 300 }),
                }
                // {
                //     // rotate: withTiming(isInvisible ? '360deg' : '0deg', { duration: 500 })
                // }
            ],
            backgroundColor: withTiming(isInvisible ? '#ccccff' : 'orange', { duration: 400 })



        };
    }, []);
    return (
        <Animated.View style={[styles.item, animatedStyle]}>
            <Text style={styles.title}>{title}</Text>
        </Animated.View>
    );
};

const Lab3_2 = () => {
    let sv = useSharedValue([]);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                onViewableItemsChanged={({ viewableItems: vItems }) => {
                    sv.value = vItems;
                }}
                renderItem={({ item }) => <Item sv={sv} title={item.title} item={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#ccccff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    title: {
        fontSize: 32,
    },
});

export default Lab3_2;
