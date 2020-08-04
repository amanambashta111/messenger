import React, { useState, useEffect } from 'react';
import './App.css';
import {Button, Input, InputLabel} from '@material-ui/core';
import {FormControl} from '@material-ui/core'
import Messages from './Messages'
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');//react hooks
  const[messages, setMessage] = useState([]);
  const [username, setUsername] = useState([]);
  //send messages
  // console.log(messages);
  // console.log(input);

  //useState set variables in React
  //useEffect run code on a condition

  useEffect(() =>{
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc => ({id : doc.id, data : doc.data()})))
    });
  }, []);


  useEffect(()=>{
//if [] is blank then this code runs ONCE when the component loads
    setUsername(prompt("Enter your name please!"))
  }, [])//condition
  const sendMessage = (event)=>{
    event.preventDefault();
    db.collection('messages').add(
      {
        message : input,
        username: username,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      }
    )
    // setMessage([...messages, {username: username, text : input}]);
    setInput('');
  }


  return (
    <div className="App">
      <img src="./messenger.png" height="100" width="100"/>
      <h1>Hello there</h1>

      <form className = 'app_form'>
      <FormControl className = "app_formControl">
        <Input placeholder = "Enter your message"className = "app_input" value={input} onChange = {event => setInput(event.target.value)}/>
        <IconButton className = "app_icon" disabled = {!input} variant ="contained" color="primary" type = "submit" onClick = {sendMessage}>
        <SendIcon/>
        </IconButton>
      </FormControl>
      </form>

     <FlipMove>
        {
            messages.map(({id, data}) => 
              <Messages key = {id} message = {data} username = {username}/>
            )
          }

     </FlipMove>
    </div>
    
  );
}

export default App;
