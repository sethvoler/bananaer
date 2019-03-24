export default class NavigationUtil {
  static goToPage(params, page) {
    const navigation = NavigationUtil.navigation;
    if (!navigation) {
      console.log('NavigationUtil.navigation 不能为空');
      return;
    } else {
      navigation.navigate(
        page,
        {
          ...params
        }
      );
    }
    return page
  }
  static goBackPage(navigation) {
    navigation.goBack();
  }
  static resetToHomePage(params) {
    const {navigation} = params;
    navigation.navigate('Main');
  }
  static goToQuickPage(params) {
    const {navigation} = params;
    navigation.navigate('Quick');
  }
  static goToNextQuickPage(params) {
    const {navigation} = params;
    navigation.navigate('Next');
  }
  static goToEditMsgPage(params) {
    const {navigation} = params;
    navigation.navigate('Edit');
  }
  static goToSwitchPage(params, page) {
    const {navigation} = params;
    navigation.navigate(page);
  } 
}