import './style.css'

const Content = ({ setIsOpen }) => {
  return ( 
    <div className="modal_content">
      <p>Modal content</p>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
}
 
export default Content;