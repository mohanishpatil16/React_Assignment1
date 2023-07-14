import './App.css';
import imgsrc2 from './Images/225X225.jpg';
import imgsrc1 from './Images/3840x2160.jpg';
import imgsrc3 from './Images/gi.png';
import imgsrc4 from './Images/medallions-1.jpg';
import Content from './Content'


const concepts = [
  {
    title : "Components",
    image : imgsrc2,
    description : 'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title : "State",
    image : imgsrc3,
    description : 'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title : "Events",
    image :imgsrc4,
    description : 'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];
function App() {
  return (
    <>
    <div className='App'> 
    <h1>Assignment 1</h1>
    <img src={imgsrc1} alt="description" className='App-logo'/>
    <div className='Desc'>
      
      <ul id="concepts">
        <Content
          image={concepts[0].image}
          title={concepts[0].title}
          description={concepts[0].description}
        />
        <Content
          image={concepts[1].image}
          title={concepts[1].title}
          description={concepts[1].description}
        />
        <Content
          image={concepts[2].image}
          title={concepts[2].title}
          description={concepts[2].description}
        />
      </ul>
    </div>
  </div>

    </>
  );
}

export default App;