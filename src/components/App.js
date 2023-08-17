
import React from "react";
import './../styles/App.css';
import Tabs  from "./Tabs";
const App = () => {

  const items = [
    {
      title: 'tab 1',
      content: 'this is the content of item 1',
    },
    {
      title: 'tab 2',
      content: 'this is the content of item 2',
    },
    {
      title: 'tab 3',
      content: 'this is the content of item 3',
    },
  ];

  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs tabs={items} />

    </div>
  )
}

export default App
