import { useLocation } from "react-router-dom";
import React,{useState, useEffect, useRef} from 'react'
import { io } from "socket.io-client";
const ENDPOINT = "https://chatroom-reactjs.onrender.com";

function PrivateChat() {
    const [Socket, setSocket] = useState({connected:false,});
    const [chat, setChat] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const messageEndRef = useRef(null);

    const location = useLocation();

    const {groupname,username} = location.state;

    useEffect(()=>{
        if(!Socket.connected)
        {
        const socket = io(ENDPOINT);

        socket.on('chat',chatData=>{
            if(chatData.type===groupname)
            {setChat(prevChat => [...prevChat, chatData]);}
            
        })
        
        setSocket(socket)
        }

  
    },[Socket.connected])

    function formatMessage(name, message) {
        return {
            name:username,
            type:groupname,
            message:message,
            time: new Intl.DateTimeFormat('default', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            }).format(new Date())
        }
      }


    const OnEmit = (e)=>{
    
        Socket.emit("chat", {
          name:username,
          message:messageInput,
          type:groupname
        });
  
        setChat(prevChat => [...prevChat, formatMessage(username,messageInput)]);
        e.preventDefault();
      }

      useEffect(()=>{
        scrollToBottom();
      },[chat])

    const scrollToBottom = () =>{
        messageEndRef.current?.scrollIntoView({behavior:'smooth'});
    }

  return (
    <div className="w-[100%] h-[100vh] bg-slate-100 ">
        <div className="w-[100%] h-[calc(100%_-_50px)] overflow-y-scroll p-1">
        <ul>
                {
                    chat?.map((info,index)=>{

                        return (
                        <div key={index} 
                            className='w-fit h-[80px]'>
                            <div className="w-[100%] h-[40px] px-1 rounded-[5px] bg-white border-[1px] border-gray-400 ">
                                <div className='h-[15px] ml-[3px]'>
                                    <span className={`text-[12px] font-medium text-[#444141]`}>{info.name}</span>
                                </div>
                                <div className="w-[100%] h-[14px] ml-[3px]">
                                    <div className="">
                                        {info.message}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="">
                                  <span className="text-[10px]">{info.time}</span>
                            </div>
                        </div>
                        )
                    })
                }

                <div ref={messageEndRef}></div>
            </ul>
        </div>
        <div className="w-[100%] h-[50px] flex ">
            <div className="w-[calc(100%_-_150px)] h-[100%] p-1 ">
                <input type='text' className="w-[100%] h-[100%] rounded-[5px] border border-gray-400"
                    value={messageInput}
                    onKeyDown={(e)=>{
                        if(e.key==="Enter")
                        {
                            setMessageInput('');
                            OnEmit(e);
                        }
                    }}
                    onChange={(e)=>{setMessageInput(e.target.value)}} />
            </div>
            <div className="w-[150px] h-[100%] flex justify-center items-center p-1 ">
                <button type="button" className=" h-[100%] w-[100%] py-2.5 px-5  text-sm  font-medium text-gray-900 focus:outline-none bg-white rounded-[10px] border border-gray-400 hover:bg-gray-100"
                        onClick={(e)=>{
                            setMessageInput('');
                            OnEmit(e)
                        }}>
                    Send
                </button>
            </div>
        </div>
    </div>
  )
}

export default PrivateChat