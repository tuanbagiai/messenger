import React, {useState, useEffect} from 'react';
import './index.css';
import {Button,FormControl,InputLabel,Input} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

// import { message } from 'antd';

// import { message } from 'antd';

// import { message } from 'antd';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  // { username: 'ductuan', text: 'chao em' },
  // { username: 'thuthien', text: 'chao anh' },
  // { username: 'minhquang', text: 'chao cau' }
  // useEffect(() => {
  //   db.collection("messages").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
  //     setMessages(snapshot.docs.map(doc => doc.data()))
  //   })
  // }, [])
useEffect(() => {
  setUsername(prompt('Please enter your name!'));
},[])
useEffect(() => {
  db.collection("messages")
  .onSnapshot(
    snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
},[])
 
 

  const sendMessage = (event) => {
      event.preventDefault();
      db.collection('messages').add({
        message:input,
        username:username,
        timestampe: firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput('');
  }
  // const sendMessage = (event) =>{
  //   event.preventDefault();
  //   setMessages([...messages,{username:username, text:input}]);
  //   setInput('');
  // }

  return (
    <div className="App">
      <h2>Wellcome {username}</h2>
      <img className="img-messenger" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=399&h=399"/>
      <form className="form-app">
        <FormControl className="appform_control">
          <InputLabel htmlFor="my-input">Enter a message...</InputLabel>
          <Input className="app_input" placeholder={'Enter a message...'} value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app_IconButton" disabled={!input} variant="contained" type="submit" color="primary" onClick={sendMessage}>Send Messages
            <SendIcon/>
          </IconButton>

        </FormControl>

      </form>
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
