import axios from 'axios'
axios.defaults.withCredentials = true// Cookie跨域

//根据 账号密码 获取token
export function wtyGetToken(loginNameParameter,passwordParameter)
{
  
  return axios.get('/api/api/getToken', {
    params: {
      loginName: `${loginNameParameter}`,
      password: `${passwordParameter}`
    }
  })
    .then(parsedData => {
      if (parsedData.statusText == 'OK') 
      {
        const token = parsedData.data?.data?.token
        return token
      }
      throw new Error('Invalid JSON format or empty array.');
    })
    .catch(error => {
      console.error('Error fetching/parsing/extracting JSON:', error)
      return null
    })
}

// 1 根据 设备地址 获取 设备 实时数据
export function wtyGetRealTimeDeviceData(loginNameParameter,passwordParameter,deviceAddrParameter)
{
  return wtyGetToken(loginNameParameter,passwordParameter)
  .then(token => {
    const headers = {
      authorization: `${token}`
    };
    return axios.get('/api/api/device/getDevice', {
      headers,
      params: {
        deviceAddr: deviceAddrParameter
      }
    });
  })
  .then(response => {
    const datas = response.data
    return datas
  })
  .catch(error => {
    console.error('Error fetching real-time data:', error)
    throw error
  })
}

// 1 根据 设备地址 获取 设备的 监测信息 的实时数据
export function wtyGetRealTimeFactorData(loginNameParameter,passwordParameter,deviceAddrParameter) 
{
  return wtyGetToken(loginNameParameter,passwordParameter)
    .then(token => {
      const headers = {
        authorization: `${token}`
      };
      return axios.get('/api/api/data/getRealTimeDataByDeviceAddr', {
        headers,
        params: {
          deviceAddrs: deviceAddrParameter
        }
      });
    })
    .then(response => {
      const registerItems = response.data.data[0].dataItem[0].registerItem
      const datas = registerItems.map(item => item.data)
      return datas
    })
    .catch(error => {
      console.error('Error fetching real-time data:', error)
      throw error
    })
}

// 2 根据 设备地址 获取 设备的 监测信息 的历史数据
export function wtyGetHistoryData(loginNameParameter,passwordParameter,deviceAddrParameter,nodeIdParameter,startTimeParameter,endTimeParameter)
{
  return wtyGetToken(loginNameParameter,passwordParameter)
  .then(token => {
    const headers = {
      authorization: `${token}`
    };
    return axios.get('/api/api/data/historyList', {
      headers,
      params: {
        deviceAddr: deviceAddrParameter,
        nodeId:nodeIdParameter,
        startTime:startTimeParameter,
        endTime:endTimeParameter
      }
    });
  })
  .then(response => {
    const datas = response.data.data.map(item => item.data).map(item => item.map(item => item.text))
    return datas
  })
  .catch(error => {
    console.error('Error fetching real-time data:', error)
    throw error
  })
}