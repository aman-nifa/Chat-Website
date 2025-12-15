import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setSuccess("Please fill all fields");
      return;
    }

    setSuccess("Registration Successful!");

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center from-purple-500 to-indigo-600 px-4">

      <div className="w-full max-w-sm bg-white shadow-xl rounded-2xl p-6 text-center">

        <h1 className="text-2xl font-bold text-gray-800">Register</h1>
        <p className="text-gray-500 text-sm mt-1">Create your new account</p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">

          <input
            type="text"
            placeholder="Full Name"
            className="p-3 w-full rounded-lg border border-gray-300 text-gray-700 
                       focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="p-3 w-full rounded-lg border border-gray-300 text-gray-700 
                       focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 w-full rounded-lg border border-gray-300 text-gray-700 
                       focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {success && (
            <p className="text-green-600 text-sm font-semibold">{success}</p>
          )}

          <button
            type="submit"
            className="p-3 mt-2 w-full bg-purple-600 text-white rounded-lg font-semibold 
                       hover:bg-purple-700 transition-all"
          >
            Register
          </button>
        </form>

        <p className="text-gray-600 text-sm mt-4">
          Already have an account? 
          <span className="text-purple-600 cursor-pointer font-semibold"> Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
