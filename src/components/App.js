import React from 'react';
// Curly braces mean we want to import a specific, named export from the file.
// If importing the 'export default X' you don't need curly braces.
// If the imported file is called index.js you can leave it off the path, webpack 
// picks it up automatically.
import { selectSong } from '../actions';

const App = () => {
  return <div>App</div>
};

export default App;