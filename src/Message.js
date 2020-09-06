import React, { forwardRef } from "react";
import './Message.css';
import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";


const Message = forwardRef(({username, message}, ref) => {

    const isUser = username === message.username
  return (
    <div ref={ref} className= {`message ${isUser && 'message_user'}`}>
      <Card className={isUser ? "message_userCard" : "message_guestCard"}>
        <CardContent>
          <Typography
            variant="h5"
            color="white"
            component="h2"
          >
            {!isUser && `${message.username || 'Anonymous'}: `}{message.message}
          </Typography>
          
        </CardContent>
        
      </Card>
      
     </div>
  );
})

export default Message;
