import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import { db } from "./Firrebase";
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    //display synced data even if the data is changed from the baackend at firebase because firebase
    // maintains realt time data and whenevr the data changed at backend it ntify to its connected client and that's
    //why this useEffect(or in general all useEffect of the app)  gets called
    db.collection('messages').orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc => (
        {
          id: doc.id, 
          message: doc.data()
        }
        )
      ))
    });
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])  //empty list as argument for dependency make this useeffect run only once each time this component loads

  const sendMessage = (event) => {
    event.preventDefault();
    //setMessage([...messages, {username: username, message: input}]);    //for presenting local change

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
  };

  return (
    <div className="App">
      <br></br>
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=109&h=109" alt="Fb Messenger logo"/>
      <h1>My Messenger</h1>
      <h2>Welcome, {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter your message...</InputLabel>
          <Input
            className="app__input"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({id, message}) => (
          <Message 
            key={id}
            username={username}
            message={message} 
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
