import { useState } from 'react';
import './App.css';
import Modal from './Modal/Modal';
import Content from './Modal/Content';

function App() {

  // const [activeTab, setActiveTab] = useState(0)

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* <Accordion/> */}

      {/* <Tabs setActiveTab={setActiveTab}/>
      { activeTab === 0 && <TabInfoOne/> }
      { activeTab === 1 && <TabInfoTwo/> }
      { activeTab === 2 && <TabInfoThree/> } */}

      <button onClick={() => setIsOpen(true)}>Open</button>

      {isOpen && 
      <Modal setIsOpen={setIsOpen}>
      <Content setIsOpen={setIsOpen}/>
      </Modal>
      }
    </div>
  );
}

export default App;
