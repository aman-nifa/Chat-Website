import { useState } from "react";
import aman from "../assets/aman.jpg";
import { Link } from "react-router-dom";

function Sdebar() {
    const [Search, setSearch] = useState(false);
  return (
    <>
      <div className="h-screen w-full flex bg-gray-100">
        {/* ----------sde bar left ---------- */}
        <div className="h-full md:w-1/4 w-full bg-white  shadow-xl flex flex-col">
          <div className="h-14 w-full flex items-center border-b border-gray-400  px-4">
            <h1 className="text-xl font-bold text-blue-600">Chats</h1>

            <span onClick={()=>setSearch(!Search)} className="ml-auto text-xl text-gray-600 cursor-pointer">
              🔍
            </span>

            <span className="ml-4 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                alt="add"
                className="h-6 w-6 ml-2"
              />
            </span>
          </div>
            {Search && (
          <div className="p-3">
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full p-2 border border-gray-400 rounded-lg outline-none focus:ring-1 focus:ring-blue-700"
            />
          </div>
        )}

          {/* Chat List */}
          <Link to="/chat" className=" cursor-pointer flex flex-col overflow-y-auto md:p-2 p-1.5 gap-2">
            <div className="h-16 w-full m-auto flex items-center bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 transition">
              <div className="flex items-center">
                <img
                src={aman}
                alt="user"
                className="h-12 w-12 rounded-full ml-3"
              />
              <div className="ml-4">
                <h2 className="font-semibold text-gray-900">Aman Sahu</h2>
                <p className="text-sm text-gray-600">Hello! How are you?</p>
              </div>
                <div className=" ml-12 text-sm text-gray-600">09:30 AM</div>
              </div>

            </div>
          </Link>
        </div>

        {/* ---------- chat ara---------- */}
        <div className="  md:h-full w-3/4  flex-col hidden md:flex">
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
      </div>
    </>
  );
}

export default Sdebar;
