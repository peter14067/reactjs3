
import { Container, Row, Col, Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AlbumJson from './Product.json'
import Product from './Product';
import axios from 'axios';
import React, { Component } from 'react';

import  './test.css'; 




export default class Application extends Component {
   
   state = {
    data: [],
    id: 0,
    message: null,
    message1: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  // 當元件載入時，它首先要從資料庫中獲取所有的資料，這裡會設定一個輪詢邏輯，及時將資料在 `UI` 中更新。
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // 永遠不要讓一個程序持續存在
  // 當我們結束使用時，一定要殺死這個程序
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }


  // 我們的第一個使用後端api的get方法
  // 從我們的資料庫中獲取資料
  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };

  // 使用 put 方法，在資料庫裡面插入一條新的資料
  putDataToDB = (message,message1) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 1;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/api/putData', {
      id: idToBeAdded,
      message: message,
      message1:message1,
    });
  };


  putDataToDB1 = (message1) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 1;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/api/putData1', {
      id: idToBeAdded,
      message1: message1,
      
    });
  };

  // 我們的刪除方法使用我們的後端api
  // 刪除現有資料庫資訊
  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete('http://localhost:3001/api/deleteData', {
      data: {
        id: objIdToDelete,
      },
    });
  };

  // 我們的更新方法使用我們的後端api
  // 覆蓋現有的資料庫資訊
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post('http://localhost:3001/api/updateData', {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };

  render() {
    const { data } = this.state;
    
    return (
      <div style={{marginTop:"5vh"}}>
        <ul>
          {data.length <= 0
            ? 'NO DB ENTRIES YET'
            : data.map((dat) => (
                <li style={{ padding: '10px' }} key={data.message}>
                  <span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
                  <span style={{ color: 'gray' }}> data: </span>
                  {dat.message}
                  <br />
                  <span style={{ color: 'gray' }}> 
                  message: {dat.message1}
                  </span>
                </li>
              ))}
        </ul>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            onChange={(e) => this.setState({ message: e.target.value })}
            placeholder="請輸入帳號"
            style={{ width: '200px' }}
          />


            <div style={{ padding: '10px' }}>
          <input
            type="text"
            onChange={(e) => this.setState({ message1: e.target.value })}
            placeholder="請輸入密碼"
            style={{ width: '200px' }}
          />
            </div>

          
          <button onClick={() => this.putDataToDB(this.state.message,this.state.message1)}>
            ADD
          </button>
        </div>

        <div style={{ padding: '10px' }}>
          <input
            type="text"
            onChange={(e) => this.setState({ message1: e.target.value })}
            placeholder="add something in the database"
            style={{ width: '200px' }}
          />
          
          <button onClick={() => this.putDataToDB1(this.state.message1)}>
            ADD
          </button>
        </div>


        <div style={{ padding: '10px' }}>
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ idToDelete: e.target.value })}
            placeholder="put id of item to delete here"
          />
          <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
            DELETE
          </button>
        </div>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ idToUpdate: e.target.value })}
            placeholder="id of item to update here"
          />
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ updateToApply: e.target.value })}
            placeholder="put new value of the item here"
          />
          <button
            onClick={() =>
              this.updateDB(this.state.idToUpdate, this.state.updateToApply)
            }
          >
            UPDATE
          </button>
        </div>
      </div>
    );
  }
}

export {Application}