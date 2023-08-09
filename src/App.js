import { useEffect, useState } from 'react';
import './App.css';
import LoaderPage from './Loader/LoaderPage';

function App() {

  // const [activeTab, setActiveTab] = useState(0)
  //const [isOpen, setIsOpen] = useState(false);

  const [stateloader, setStateLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 3000);
    return () => clearTimeout(timer)
  }, [])
   
  return (
    <div>
      {/* <Accordion/> */}

      {/* <Tabs setActiveTab={setActiveTab}/>
      { activeTab === 0 && <TabInfoOne/> }
      { activeTab === 1 && <TabInfoTwo/> }
      { activeTab === 2 && <TabInfoThree/> } */}
      
      {/* Modal
      <button onClick={() => setIsOpen(true)}>Open</button>

      {isOpen && 
      <Modal setIsOpen={setIsOpen}>
      <Content setIsOpen={setIsOpen}/>
      </Modal>
      } */}

      { stateloader && <LoaderPage/> }

    </div>
  );
}

export default App;
