import React from 'react';

export const userData = {
  firstName: 'Jhanvi', // feel free to replace the name value
  lastName: 'Bhavsar', // feel free to replace the name value
  title: 'Student', // feel free to replace the title value
};

// Edit the UserData component code to output the userData data
function UserData() {
  return (
    <div id="user" data-testid="user">
      <h2>
        {}
        Jhanvi Bhavsar
      </h2>
      <p>TITLE : student</p>
    </div>
  );
}

// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>Practice Time!</h1>
      <p></p>
      <UserData />
    </div>
  );
}

export default App;
