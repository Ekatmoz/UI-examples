import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  //TAB
  // const [activeTab, setActiveTab] = useState(0)

  //Modal
  //const [isOpen, setIsOpen] = useState(false);

  //LOADER
  //const [stateloader, setStateLoader] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setStateLoader(false), 3000);
  //   return () => clearTimeout(timer)
  // }, [])

  //Translation i18n
  const {i18n, t} = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'hu' : 'en')
  }

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
      
      {/* Loader
      { stateloader && <LoaderPage/> } */}
      <h1>{t('Welcome to React')}</h1>
      <button onClick={toggleLang}>
        {i18n.language === 'en' ? 'HU' : 'EN'}
      </button>
    </div>
  );
}

export default App;
