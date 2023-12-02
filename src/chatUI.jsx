import React,{useEffect, useState, useRef} from 'react'
import {Button,TextField} from '@mui/material';
import './App.css';
import { io } from "socket.io-client";
const ENDPOINT = "https://chatroom-reactjs.onrender.com";

const ChatUI = ({username}) => {

    console.log('username', username)

    const [Socket, setSocket] = useState({connected:false,});
    const [chat, setChat] = useState([]);
    const messagesEndRef = useRef(null);

    useEffect(()=>{
        console.log('useEffect Executed')
        if(!Socket.connected)
        {
        const socket = io(ENDPOINT);

        socket.on('chat',chatData=>{
            setChat(prevChat => [...prevChat, chatData]);
            
        })
        
        setSocket(socket)
        }
  
    },[Socket.connected])

    useEffect(() => {
        scrollToBottom();
      }, [chat]);

    const [messageInput, setMessageInput] = useState('');

    const OnEmit = (e)=>{
    
      Socket.emit("chat", {
        name:username,
        message:messageInput
      });

      setChat(prevChat => [...prevChat, formatMessage(username,messageInput)]);
      e.preventDefault();
    }

    
    function formatMessage(name, message) {
        return {
            name:name,
            message:message,
            time: new Intl.DateTimeFormat('default', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            }).format(new Date())
        }
      }

      const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <div className='layout'>
        <div className='chat-layout'>
            <ul>
                {
                    chat?.map((info,index)=>{
                        return (
                        <div key={index} className='chat-body'>
                            <div className='username'>{info.name}</div>
                            <div className="message-body">
                                <div className="message">
                                    {info.message}
                                </div>
                                <div className="time">
                                    {info.time}
                                </div>
                                
                            </div>
                            <div ref={messagesEndRef} />
                        </div>
                        )
                    })
                }
            </ul>
        </div>
        <div className='chat'>
            <div className='typing'>
            <TextField 
                id="chatInput" 
                variant="outlined"
                placeholder='Enter message...'
                size='small'
                fullWidth
                value={messageInput}
                onKeyDown={(e)=>{
                    if(e.key==="Enter")
                    {
                        setMessageInput('');
                        OnEmit(e);
                    }
                }}
                onChange={(e)=>{setMessageInput(e.target.value)}}
                />        
            </div>
            <div className='send'>
                    <Button 
                        variant='outlined'
                        fullWidth
                        style={{height:"40px"}}
                        onClick={(e)=>{
                            setMessageInput('');
                            OnEmit(e);
                        }}
                        >
                            Send
                    </Button>
            </div>
        </div>
    </div>
  )
}

export default ChatUI