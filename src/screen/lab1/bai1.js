import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header_components from '../../components/lab1/header.components'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'
import ItemEventInfo from '../../components/lab1/ItemEventInfo'
import { eventInfo } from '../../data/DataBai1'
export default function Bai1({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Header_components showLeft={true} showRight={true} title={'Home Screen'} showCenter={true} iconRight={faUserCircle} navigation={navigation} />
      <ScrollView style={{ width: '100%', height: '80%' }}>
        {
          eventInfo?.map((item, id) => <ItemEventInfo eventInfo={item} key={id} />)
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

})