import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";


const Private = ()=> {
  const [groupname, setGroupname] = useState('');
  const [username, setUsername] = useState('');
  const [next, setNext] = useState(false);

    const navigate = useNavigate();

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      
      {
        !next ? (
          <div className="w-[400px] h-[150px] flex justify-center items-center gap-2 rounded-[5px] bg-[#F3F4F6] border-2 border-gray-400">
            <input type="text" placeholder="Room Name" className="w-[180px] h-[40px] rounded-[5px] border border-gray-600"
                    value={groupname}
                    onKeyDown={(e)=>{
                        if(e.key==="Enter" && groupname)
                        {
                          setNext(true);
                        }
                    }}
                    onChange={(e)=>{setGroupname(e.target.value)}} />
            <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 
                                       dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={()=>{
                        if(groupname){
                          setNext(true);
                        }
                      }}>
                Next
            </button>
        </div>
        ) : (
          <div className="w-[400px] h-[150px] flex justify-center items-center gap-2 rounded-[5px] bg-[#F3F4F6] border-2 border-gray-400">
            <input type="text" className="w-[180px] h-[40px] rounded-[5px] border border-gray-600"
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
            <button type="button" className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 
                                       dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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