import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import TopBar from './TopBar'
import SearchBox from './SearchBox'
import HappyIcon from '@/assets/Icons/HappyIcon'
import Photos from './Photos'
const FlatListHeader: React.FC = () => {
  return (
    <View>
      <SearchBox />
      <Text style={ className`text-2xl font-semibold mt-5 ml-5`}>下面是来自西工大食堂的美食</Text>
      <HappyIcon />
    </View>
  )
}

const home = () => {
  return (
    <>
      <TopBar />
      <Photos Header={ FlatListHeader} />
    </>
  )
}

export default home