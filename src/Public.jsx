import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Public = ()=> {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center ">
        <div className="w-[400px] h-[150px] flex justify-center items-center gap-2 rounded-[5px] bg-[#F3F4F6] border-2 border-gray-400
                        mobile:w-[250px] mobile:h-[120px]">
            <input type="text" className="w-[180px] h-[40px] rounded-[5px] border border-gray-600 mobile:w-[100px] mobile:h-[25px]"
                  value={username}
                  onKeyDown={(e)=>{
                      if(e.key==="Enter")
                      {
                        navigate('/PublicChat',{ state: { username: username } })
                      }
                  }}
                  onChange={(e)=>{setUsername(e.target.value)}} />
            <button type="button" className="text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200
                                             mobile:w-[100px] mobile:h-[35px]"
                    onClick={()=>{
                      if(username)
                      {navigate('/PublicChat',{ state: { username: username } })}
                      }}>
                Let's Go
            </button>
        </div>
    </div>
  )
}

export default Public