import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";


const Private = ()=> {
  const [groupname, setGroupname] = useState('');
  const [username, setUsername] = useState('');
  const [next, setNext] = useState(false);

    const navigate = useNavigate();

  return (
    <div className="w-[100%] h-[100dvh] flex justify-center items-center">
      
      {
        !next ? (
          <div className="w-[400px] h-[150px] flex justify-center items-center gap-2 rounded-[5px] bg-[#F3F4F6] border-2 border-gray-400
                          mobile:w-[250px] mobile:h-[120px] px-2">
            <input type="text" placeholder="Room Name" className="w-[180px] h-[40px] rounded-[5px] border border-gray-600
                                                                  mobile:w-[120px] mobile:h-[30px]"
                    value={groupname}
                    onKeyDown={(e)=>{
                        if(e.key==="Enter" && groupname)
                        {
                          setNext(true);
                        }
                    }}
                    onChange={(e)=>{setGroupname(e.target.value)}} />
            <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200"
                    onClick={()=>{
                        if(groupname){
                          setNext(true);
                        }
                      }}>
                Next
            </button>
        </div>
        ) : (
          <div className="w-[400px] h-[150px] flex justify-center items-center gap-2 rounded-[5px] bg-[#F3F4F6] border-2 border-gray-400
                          mobile:w-[250px] mobile:h-[120px]">
            <input type="text" className="w-[180px] h-[40px] rounded-[5px] border border-gray-600
                                          mobile:w-[120px] mobile:h-[30px]"
                    value={username}
                    onKeyDown={(e)=>{
                        if(e.key==="Enter" && username)
                        {
                          if(username)
                          {navigate('/privateChat',{ state: { groupname:groupname,username: username } })}
                        }
                    }}
                    onChange={(e)=>{
                      setUsername(e.target.value)}} />
            <button type="button" className="px-2 py-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200"
                    onClick={()=>{
                      if(username){
                        navigate('/privateChat',{ state: { groupname:groupname, username: username } })
                      }
                      }}>
                Let's Go
            </button>
        </div>
        )
      }

        

        

    </div>
  )
}

export default Private