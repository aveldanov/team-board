import React from 'react';
import _ from 'lodash';


const data = [

  {
    "_id": "5d3156d5449c71c50c5a0bd2",
    "message": "sv2",
    "user": {
      "admin": false,
      "_id": "5d3156cf449c71c50c5a0bd0",
      "name": "Svetlana Veldanova",
      "email": "lana.veldanova@gmail.com",
      "password": "$2a$10$.MTC5do8ClPG2KSJcvLAz.fg3b4.xzzzQK5DiBMqo1.S76P2poYtO",
      "date": "2019-07-19T05:36:15.753Z",
      "__v": 0
    },
    "date": "2019-07-19T05:36:21.822Z",
    "__v": 0
  },


  {
    "_id": "5d31580f64ebe8cfb1fcaad8",
    "message": "12234",
    "user": {
      "admin": false,
      "_id": "5d31468d82ba8d45beda1e69",
      "name": "Anton Veldanov",
      "email": "anton.veldanov@gmail.com",
      "password": "$2a$10$fj18aEo5.Rf.NaXr30Pl/OaM4ndo52AqK8Kf60EeMbmQ6hDDHmMoC",
      "date": "2019-07-19T04:26:53.808Z",
      "__v": 0
    },
    "date": "2019-07-19T05:41:35.590Z",
    "__v": 0
  },
  {
    "_id": "5d3150cad3b78f960db1d949",
    "message": "task 3",
    "user": {
      "admin": false,
      "_id": "5d31468d82ba8d45beda1e69",
      "name": "Anton Veldanov",
      "email": "anton.veldanov@gmail.com",
      "password": "$2a$10$fj18aEo5.Rf.NaXr30Pl/OaM4ndo52AqK8Kf60EeMbmQ6hDDHmMoC",
      "date": "2019-07-19T04:26:53.808Z",
      "__v": 0
    },
    "date": "2019-07-19T05:10:34.412Z",
    "__v": 0
  },
  {
    "_id": "5d3150c6d3b78f960db1d948",
    "message": "task 2",
    "user": {
      "admin": false,
      "_id": "5d31468d82ba8d45beda1e69",
      "name": "Anton Veldanov",
      "email": "anton.veldanov@gmail.com",
      "password": "$2a$10$fj18aEo5.Rf.NaXr30Pl/OaM4ndo52AqK8Kf60EeMbmQ6hDDHmMoC",
      "date": "2019-07-19T04:26:53.808Z",
      "__v": 0
    },
    "date": "2019-07-19T05:10:30.387Z",
    "__v": 0
  },
  {
    "_id": "5d3150c1d3b78f960db1d947",
    "message": "task 1",
    "user": {
      "admin": false,
      "_id": "5d31468d82ba8d45beda1e69",
      "name": "Anton Veldanov",
      "email": "anton.veldanov@gmail.com",
      "password": "$2a$10$fj18aEo5.Rf.NaXr30Pl/OaM4ndo52AqK8Kf60EeMbmQ6hDDHmMoC",
      "date": "2019-07-19T04:26:53.808Z",
      "__v": 0
    },
    "date": "2019-07-19T05:10:25.873Z",
    "__v": 0
  },
  {
    "_id": "5d3156d5449c71c50c5a0bd2",
    "message": "sv2",
    "user": {
      "admin": false,
      "_id": "5d3156cf449c71c50c5a0bd0",
      "name": "Svetlana Veldanova",
      "email": "lana.veldanova@gmail.com",
      "password": "$2a$10$.MTC5do8ClPG2KSJcvLAz.fg3b4.xzzzQK5DiBMqo1.S76P2poYtO",
      "date": "2019-07-19T05:36:15.753Z",
      "__v": 0
    },
    "date": "2019-07-19T05:36:21.822Z",
    "__v": 0
  }
]

const grouped = _.groupBy(data, 'user.name')


console.log(grouped);
const fixed = JSON.stringify({
  name: grouped
}, null, 2)

console.log(fixed);

const playground = () => {

  return (
    <div>
      {
      }    </div>
  )
}

export default playground;
