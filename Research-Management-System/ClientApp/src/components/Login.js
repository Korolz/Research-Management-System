import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleLogin = () => {
    // Add your authentication logic here
    console.log(`Logging in with ${this.state.username} and ${this.state.password}`);
  };

  render() {
    return (
      <div className="flex items-center justify-center mt-48">
        <div className="bg-[#83c5be] p-8 rounded-lg border-4 border-black w-2/6"
          style={{ boxShadow: '6px 6px 0px 0px rgba(0, 0, 0, 1)', }}>
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
              type="text"
              id="username"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <button
            className=" bg-[#8e7dbe] text-lg font-bold text-black py-2 px-4 rounded-lg border-4 border-black transform transition duration-300 hover:scale-105 "
            onClick={this.handleLogin}
            onMouseEnter={(e) => (e.target.style.boxShadow = '6px 6px 0px 0px rgba(0, 0, 0, 1)')}
            onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
          >
          Login
        </button>
        <p className="mt-4 text-sm text-black">
          Doesn't have an account yet? <a href="/register" className="text-blue-500 font-bold">Register here</a>.
        </p>
      </div>
      </div >
    );
  }
}

export default Login;
