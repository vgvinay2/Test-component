import React from 'react';
import ReactDOM from "react-dom";

export const Heart = () => <a href="#">clickMe</a>;
const App = () => (
  <>
    <h1>Hello React</h1>
    <p>Minimal React configuration.</p>
    <Heart />
  </>
);
export default App;