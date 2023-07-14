

const Content = ({image,title,description})=> {
   
    return (
      <div className="Content">
          <h2>{title}</h2>
        <img src={image} className="logo-sm"/>
        <div className="contenttxt"><p> {description}</p></div>
      </div>
    );
  }
  
  export default Content;