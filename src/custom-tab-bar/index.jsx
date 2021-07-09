import { View } from '@tarojs/components'

export default () => {
  return (
    <View style={{ display: 'flex', justifyContent: 'space-between', height: '50px', textAlign: 'center' }}>
      <View style={{flex: '1'}}>首页</View>
      <View style={{flex: '1'}}>菜单2</View>
    </View>
  )
}
