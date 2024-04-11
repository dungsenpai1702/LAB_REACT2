import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { eventInfo } from '../../data/DataBai1'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { COLORS, W } from '../../constants/theme'
import ButtonCustomer from './ButtonCustomer'



export default function ItemEventInfo({ eventInfo, key }) {
  const { location, timeOpen, nameHotel, img, time2, address, transportation, time } = eventInfo
  const [showItem, setShowItem] = useState(false);
  return (
    <View style={[{ width: W, alignItems: 'center', justifyContent: 'center', marginVertical: 20 },]} key={key}>
      <View style={[{ width: '90%', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', padding: 20 }, st.shadow]}>
        <Text><Text style={{ fontWeight: '700', color: 'black' }}>Lịch Trình:  </Text>{location}</Text>
        <TouchableOpacity onPress={() => { setShowItem(!showItem) }}>
          <FontAwesomeIcon icon={faChevronDown} color='black' size={16} />
        </TouchableOpacity>
      </View>
      {
        showItem && (
          <>
            <ScrollView style={{ width: '100%' }}>
              <View style={{ width: '100%', alignItems: 'center', marginBottom: 30 }}>
                <View style={[{ width: '85%', paddingVertical: 10, marginVertical: 10, borderRadius: 5, paddingHorizontal: 20, }, st.shadow]}>
                  <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: COLORS.royalBlue }}>Lịch Trình</Text>
                  <Text style={[st.text]}><Text style={[st.title]}>Địa điểm: </Text>{`\n${location}`}</Text>
                  <Text style={[st.text]}><Text style={[st.title]}>Thời gian: </Text>{`\n${time}`}</Text>
                  <Text style={[st.text]}><Text style={[st.title]}>Phương tiện di chuyển: </Text>{`\n${transportation}`}</Text>
                  <Text style={[st.text]}><Text style={[st.title]}>Thời gian: </Text>{`\n${time2}`}</Text>
                  <Text style={[st.text]}><Text style={[st.title]}>Hình ảnh: </Text></Text>
                  <Image source={{ uri: img }} style={[{ width: '100%', height: 150 }]} />
                </View>

                <View style={[{ width: '85%', paddingVertical: 10, marginVertical: 10, borderRadius: 5, paddingHorizontal: 20 }, st.shadow]}>
                  <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: COLORS.royalBlue }}>Khách Sạn</Text>
                  <Text style={[st.text]}><Text style={[st.title]}>Tên khách sạn: </Text>{`\n${nameHotel}`}</Text>
                  <Text style={[st.text]}><Text style={[st.title]}>Thời gian mở cửa: </Text>{`\n${timeOpen}`}</Text>
                  <Text style={[st.text]}><Text style={[st.title]}>Địa chỉ: </Text>{`\n${address}`}</Text>
                  <ButtonCustomer h={40} w={100} lable={'Xem chi tiết'} bg={'#00bfff'} mv={10} color={'white'} />
                </View>
              </View>
            </ScrollView>
          </>


        )
      }
    </View>
  )
}

const st = StyleSheet.create({
  shadow: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10
  },
  text: {
    marginVertical: 10,
    color: COLORS.royalBlue,
    fontWeight: '700'
  },
  title: {
    color: '#8c8c8c',
    fontWeight: '500'
  }

})