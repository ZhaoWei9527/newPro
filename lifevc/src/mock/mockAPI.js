import apiData from './data.json'
import Mock from 'mockjs'
Mock.mock('/api/listleft', {errno: 0, data: apiData.listLeft})
