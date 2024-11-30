import { View, Text } from 'react-native'
import React from 'react'
import PersonIcon from '@/assets/Icons/PersonIcon'
import BellIcon from '@/assets/Icons/BellIcon'
import BackIcon from '@/assets/Icons/BackIcon'
import className from 'twrnc'


const TopBar = () => {
  const height = 7;
  return (
    <View style={className`p-5 flex-row items-center justify-between`}>
      {/* 顶部栏 */}
      <View style={className`flex-row`}>
        <BackIcon height={height} />
        <PersonIcon height={height} />
      </View>
      <Text>TopBar</Text>
      <BellIcon height={height}/>
    </View>
  );
}

export default TopBar