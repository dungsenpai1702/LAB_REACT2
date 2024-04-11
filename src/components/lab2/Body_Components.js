import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputCustomer from '../lab1/InputCustomer'
import ButtonCustomer from '../lab1/ButtonCustomer'

export default function Body_Components({ user, setUser, setColor, color }) {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [errName, setErrName] = useState(false);
  const [errlink, setErrlink] = useState(false);
  const [errNameContent, setErrNameContent] = useState('');
  const [errLinkContent, setErrlinkContent] = useState('');

  const validation = () => {
    let cName, cLink;
    if (name.trim() == '') {
      setErrName(true);
      cName = true;
      setErrNameContent('Tên không được để trống')
    }
    if (link.trim() == '') {
      setErrlink(true);
      cLink = true;
      setErrlinkContent('Liên kết không được để trống');
    }
    console.log(errName);
    if(cName == true || cLink == true){
      return true;
    }
    return false;

  }

  const update = () => {
    const check = validation();
    // console.log(check);
    if (!check) { setUser({ name: name, avatar: link }); }
  }

  function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    setColor('rgb(' + r + ',' + g + ',' + b + ')');
  }



  return (
    <View style={{ width: '90%', height: '75%', paddingVertical: 30, alignItems: 'center' }}>
      <InputCustomer title={'Name: '} placeholder={'Tên của bạn'} marginV={20} value={name} setInput={setName} error={errName} setError={setErrName} errContent={errNameContent} />
      <InputCustomer title={'Image: '} marginV={20} placeholder={'Liên kết avatar'} value={link} setInput={setLink} error={errlink} setError={setErrlink} errContent={errLinkContent} />

      <ButtonCustomer w={50} h={50} lable={'Cập nhật thông tin'} mv={20} onPress={update} />

      <ButtonCustomer w={50} h={50} lable={'Đổi màu footer'} mv={20} bg={color} onPress={randomColor} />
    </View>
  )
}

const styles = StyleSheet.create({})