import React, {Component} from 'react';
import {Platform, Modal, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

export default class ModalBox extends Component<Props> {
  render () {
    const {content, isModal, noClear, sure, status} = this.props;
    return (
      <Modal
        transparent={true}             
        visible={isModal}
        // onRequestClose={() => {this.onRequestClose()}}  // android必须实现
      >
        <View style={styles.all}>
          <View style={styles.alert}>
            <Text style={styles.alertTitle} >提醒</Text>
            <Text style={styles.alertContent}>{content}</Text>
            {
              status === 1 
              ? (
                <View style={styles.box}>
                  <TouchableOpacity onPress={() => {
                    noClear()
                  }}>
                    <Text style={styles.lbtn}>手滑了</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    sure()
                  }}>
                    <Text style={styles.rbtn}>确定</Text>
                  </TouchableOpacity>             
                </View>)
              : (<View style={styles.box}>
                <TouchableOpacity onPress={() => {
                  sure()
                }}>
                  <Text style={styles.rbtn}>确定</Text>
                </TouchableOpacity>             
              </View>)
            }
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(39,39,39,.8)',
  },
  alert: {
    flexDirection: 'column',
    alignItems: 'center',
    width: unitWidth*464,
    height: unitWidth*266,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: unitWidth*30,
  },
  alertTitle: {
    marginTop: unitWidth*28,
    marginBottom: unitWidth*24,
    color: '#2a2a2a',
    fontSize: 14,
  },
  alertContent: {
    color: '#82828A',
    fontSize: 14,
  },
  box: {
    marginTop: unitWidth*58,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lbtn: {
    overflow: 'hidden',
    borderRadius: unitWidth*31.5,
    marginRight: unitWidth*109,
    backgroundColor: '#ED6059',
    textAlign: 'center',
    width: unitWidth*182,
    height: unitWidth*63,
    lineHeight: unitWidth*63,
    color: '#fff',
    fontSize: 14,
  },
  rbtn: {
    color: '#000',
    fontSize: 14,
  },
});