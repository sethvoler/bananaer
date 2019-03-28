
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Alert} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';
import {BackHandler} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';


type Props = {};
class IndexPage extends Component<Props> {
  static navigationOptions = {
    header: null,
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    const {dispatch, nav} = this.props;
    if (nav.routes[1].index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  }
 
  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <DynamicTabNavigator />
  }
};

const mapStateToProps = state => ({
  nav: state.nav
});
export default connect(mapStateToProps)(IndexPage);

const styles = StyleSheet.create({
  sy: {
    width: unitWidth*48,
    height: unitWidth*48
  },
})
