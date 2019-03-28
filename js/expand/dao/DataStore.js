import {AsyncStorage} from 'react-native';

export default class DataStore {
  fetchData(url) {
    return new Promise((resolve, reject) => {
      this.fetchLocalData(url)
        .then((wrapData) => {
          if (wrapData && DataStore.checkTimestampValid(wrapData.timestamp)) {
            return wrapData;
          } else {
            this.fetchNetData(url).then((data) => {
              resolve(this._wrapData(data));
            }).catch((err) => {
              reject(err);
            })
          }
        })
        .catch((err) => {
          alert('-----')
          this.fetchNetData(url).then((data) => {
            resolve(this._wrapData(data));
          }).catch((err) => {
            reject(err);
          })
        })
    });
  }
  saveData (url, data, callback) {
    if (!data || !url) return;
    AsyncStorage.setItem(url, JSON.stringify(this._wrapData(data)), callback);
  }
  fetchLocalData(url) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(url, (error, result) => {
        alert(2)
        if (!error) {
          try {
            alert(3)
            resolve(JSON.parse(result));
          } catch (e) {
            reject(e);
            console.error(e);
          }
        } else {
          alert(4)
          //alert(error.toString())
          reject(error);
          console.error(error);
        }
      })
    });
  }
  fetchNetData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('Network response is not ok.')
        })
        .then((res) => {
          this.saveData(url, res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        })
    });
  }
  _wrapData(data) {
    return {data: data, timestamp: new Date().getTime()};
  }
  static checkTimestampValid(timestamp) {
    const currentDate = new Date();
    const targetDate = new Date();
    targetDate.setTime(timestamp);
    if (currentDate.getMonth() !== targetDate.getMonth()) return false;
    if (currentDate.getDate() !== targetDate.getDate()) return false;
    if (currentDate.getMonth() - targetDate.getMonth() > 4) return false;
    return true;
  }
}