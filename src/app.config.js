export default {
  pages: [
    'pages/index/index',
    'pages/menu2/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#ccc',
    selectedColor: '#bdbdbd',
    borderStyle: 'white',
    backgroundColor: '#ffffff',
    list: [{
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      pagePath: 'pages/menu2/index',
      text: '菜单2'
    }]
  },
}
