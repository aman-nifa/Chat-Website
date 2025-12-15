import React from 'react'
import Header from './componenets/Header'


function chat() {
  return (
    <>
    <div className="  h-screen w-full  flex-col hidden md:flex">
             { /* ---------- Chat Header ---------- */}
    
              <div className="h-14 w-full bg-white shadow-xl flex px-8 flex-row justify-between items-center">
                <div className="flex px-2 flex-col items-start">
                  <h1 className="text-xl font-bold text-blue-900">Aman Sahu</h1>
                  <h1 className="text-sm  text-shadow-blue-600">
                    last seen 09:25 PM
                  </h1>
                </div>
                <div>
                  <span className="  cursor-pointer">
                    <img
                      src={aman}
                      alt="add"
                      className="h-10 w-10 ml-2 rounded-full"
                    />
                  </span>
                </div>
              </div>
    
                {/* ---------- Chat Messages Area ---------- */}
              <div className="flex-1 overflow-y-auto p-4">
              
                <div className="mb-3 text-left">
                  <p className="inline-block bg-gray-300 p-2 rounded-xl max-w-xs">
                    Hello! How are you?
                  </p>
                </div>
    
                <div className="text-right">
                  <p className="inline-block bg-blue-600 text-white p-2 rounded-xl max-w-xs">
                    I am good! What about you?
                  </p>
                </div>
              </div>
    
              {/* ---------- Chat Input Box ---------- */}
              <div className="h-20 bg-white shadow-lg flex items-center px-4 gap-3">
                <textarea
                  className="w-full h-14 resize-none border border-gray-400 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type a message..."
                ></textarea>
    
                <button className="h-12 w-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center text-xl">
                  ➤
                </button>
              </div>
            </div>  
    
              
       
        
    </>
  )
}

export default chat