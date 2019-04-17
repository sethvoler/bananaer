import {
  createStackNavigator, 
  createMaterialTopTabNavigator, 
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import WelcomePage from '../page/WelcomePage';
import LogPage from '../page/LogPage';
import IndexPage from '../page/IndexPage';
import DetailPage from '../page/DetailPage';
import SetUpPage from '../page/SetUpPage';
import SafePage from '../page/SafePage';
import ChangePhonePage from '../page/ChangePhonePage';
import BindPhonePage from '../page/BindPhonePage';
import MsgSetPage from '../page/MsgSetPage';
import EditPage from '../page/EditPage';
import EditNamePage from '../page/EditNamePage';
import EditSinePage from '../page/EditSinePage';
import FollowPage from '../page/FollowPage';
import FansPage from '../page/FansPage';
import ReleasePage from '../page/ReleasePage';
import CollectionPage from '../page/CollectionPage';
import MMPage from '../page/MMPage';
import NoticePage from '../page/NoticePage';
import LookedPage from '../page/LookedPage';
import QuickPage from '../page/QuickPage';
import NextQuickPage from '../page/NextQuickPage';
import MyPage from '../page/MyPage';
import EditMsgPage from '../page/EditMsgPage';
import ImgsPage from '../page/ImgsPage';
import MorePage from '../page/MorePage';
import PlayPage from '../page/PlayPage';
import VipPage from '../page/VipPage';
import FetchDemoPage from '../page/FetchDemoPage';
import AsyncStoragePage from '../page/AsyncStoragePage';
import DataStoreDemoPage from '../page/DataStoreDemoPage';
import FXPage from '../page/FXPage';

import Demo from '../page/Demo';

import {connect} from 'react-redux';
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from 'react-navigation-redux-helpers';

export const rootCom = 'Init';

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
  }
}, {
  navigationOptions: {
    header: null
  }
});

const MainNavigator = createStackNavigator({
  IndexPage: {
    screen: IndexPage,
  },
  EditMsgPage: {
    screen: EditMsgPage,
  },
  QuickPage: {
    screen: QuickPage,
  },
  LogPage: {
    screen: LogPage,
  },
  DetailPage: {
    screen: DetailPage
  },
  FetchDemoPage: {
    screen: FetchDemoPage
  },
  AsyncStoragePage: {
    screen: AsyncStoragePage
  },
  DataStoreDemoPage: {
    screen: DataStoreDemoPage
  },
  SetUpPage: {
    screen: SetUpPage,
    navigationOptions: {
      headerTitle: '设置'
    }
  },
  EditPage: {
    screen: EditPage,
    navigationOptions: {
      headerTitle: '个人信息'
    }
  },
  FXPage: {
    screen: FXPage,
    navigationOptions: {
      headerTitle: '我的分享'
    }
  },
  MorePage: {
    screen: MorePage,
    navigationOptions: {
      headerTitle: '全部高清影片'
    }
  },
  PlayPage: {
    screen: PlayPage,
    navigationOptions: {
      headerTitle: '全部高清影片'
    }
  },
  
  EditNamePage: {
    screen: EditNamePage,
    navigationOptions: {
      headerTitle: '编辑昵称'
    }
  },
  EditSinePage: {
    screen: EditSinePage,
    navigationOptions: {
      headerTitle: '编辑个性签名'
    }
  },
  ChangePhonePage: {
    screen: ChangePhonePage,
    navigationOptions: {
      headerTitle: '已绑定手机号'
    }
  },
  BindPhonePage: {
    screen: BindPhonePage,
    navigationOptions: {
      headerTitle: '手机号绑定'
    }
  },
  NextQuickPage: {
    screen: NextQuickPage,
  },
  SafePage: {
    screen: SafePage,
    navigationOptions: {
      headerTitle: '账号安全'
    }
  },
  MsgSetPage: {
    screen: MsgSetPage,
    navigationOptions: {
      headerTitle: '消息设置'
    }
  },
  FollowPage: {
    screen: FollowPage,
    navigationOptions: {
      headerTitle: '我的关注'
    }
  },
  FansPage: {
    screen: FansPage,
    navigationOptions: {
      headerTitle: '我的粉丝'
    }
  },
  ReleasePage: {
    screen: ReleasePage,
    navigationOptions: {
      headerTitle: '我的发布'
    }
  },
  CollectionPage: {
    screen: CollectionPage,
    navigationOptions: {
      headerTitle: '我的收藏'
    }
  },
  MMPage: {
    screen: MMPage,
    navigationOptions: {
      headerTitle: '我的消息'
    }
  },
  NoticePage: {
    screen: NoticePage,
    navigationOptions: {
      headerTitle: '系统公告'
    }
  },
  LookedPage: {
    screen: LookedPage,
    navigationOptions: {
      headerTitle: '浏览记录'
    }
  },
  MyPage: {
    screen: MyPage
  },
  VipPage: {
    screen: VipPage
  },
  ImgsPage: {
    screen: ImgsPage
  }
}, {
  navigationOptions: {
    header: null
  }
});

export const RootNavigator = createAppContainer(createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator,
}, {
  navigationoptions: {
    header: null
  }
}));

export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  'root',
);

const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);