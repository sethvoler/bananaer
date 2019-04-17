import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import {connect} from 'react-redux';
import actions from '../action';

class Imgs extends Component<Props> {
  render () {
    const {title, icon, obj, height} = this.props;
    return (
      <View style={styles.wrap}>
        {
          obj.length !== 0 ?
            (<View style={styles.header}>
              <Image source={icon} style={styles.icon}></Image>
              <Text style={styles.title}>{title}</Text>
            </View>) : null
        }
        <View style={styles.body}>
          {
            obj.map((item, index) => {
              return (
                <TouchableOpacity 
                  key={index}
                  onPress={() => {
                    if (this.props.status !== 0) {
                      NavigationUtil.goToPage({navigation: this.props.navigation}, 'ImgsPage');
                    } else {
                      NavigationUtil.goToPage({navigation: this.props.navigation}, 'LogPage');
                    }          
                  }}>
                  <View style={styles.item}>
                    <View style={{width: unitWidth*199, height: unitWidth*height, borderRadius: unitWidth*15, position: 'relative', backgroundColor: '#FAE04B'}}>
                      <Text style={styles.num}>{item.data.length}个图集</Text>
                    </View>
                    <Text style={styles.name}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  status: state.status.status,
});
export default connect(mapStateToProps)(Imgs);

const styles = StyleSheet.create({
  wrap: {
    width: unitWidth*673, 
    paddingTop: unitHeight*24,
  },
  header: {
    width: unitWidth*673,
    height: unitWidth*48,  
    borderRadius: unitWidth*24, 
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: unitWidth*24,
    height: unitWidth*24,
    marginRight: unitWidth*6,
  },
  title: {
    color: '#373737',
    fontSize: 13,
  },
  body: {
    width: unitWidth*723,
    paddingLeft: unitWidth*12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    display:'flex',
    marginTop: unitWidth*16,
  },
  item: {
    marginRight: unitWidth*28,
    marginBottom: unitWidth*32,
    flexDirection: 'column',
    alignItems: 'center',
  },
  num: {
    position: 'absolute',
    bottom: unitWidth*11,
    right: unitWidth*9,
    overflow: 'hidden',
    padding: unitWidth*10,
    height: unitWidth*28,
    lineHeight: unitWidth*13,
    borderRadius: unitWidth*14,
    backgroundColor: '#494949',
    color: '#fff',
    fontSize: 7,
  },
  name: {
    marginTop: unitWidth*10,
    color: '#373737',
    fontSize: 13,
  }
});