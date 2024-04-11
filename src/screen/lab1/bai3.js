import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputCustomer from '../../components/lab1/InputCustomer'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Bai3() {
  const [error, setError] = useState(true);
  const [ipValue, setIpValue] = useState('');
  const [errContent, setErrContent] = useState('Mật khẩu không chính xác');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: '90%', marginVertical: 20 }}>
        <InputCustomer title={'Title:'} placeholder={'Place holder'} setInput={setIpValue} value={ipValue} error={error} setError={setError} pass={true} errContent={errContent} />
      </View>
      <TouchableOpacity style={{ width: 80, height: 30, borderRadius: 10, borderWidth: 1, justifyContent: 'center' }}
        onPress={() => { setError(true); setIpValue('') }}
      >
        <Text style={{ textAlign: 'center' }}>error</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})