import { View, Text } from 'react-native'
import React from 'react'
import PersonIcon from '@/assets/Icons/PersonIcon'
import BellIcon from '@/assets/Icons/BellIcon'
import BackIcon from '@/assets/Icons/BackIcon'
import className from 'twrnc'


// 除了返回按钮，其他按钮都还未实现功能
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