import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      
      {/*Header */}
      <Header />
      {/*App body */}
        <div className="app__body">
          <Sidebar />
          
      <Feed />
      {/*widgets */}
        </div>
      
      
    </div>
  );
}

export default App;
