import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  return (
    <div className="gallery">
      {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
      {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
      {props.groceries.map(item => (
        <div className="list-group-item" key={item.id}>
            <img src={item.image} alt="AppImage"></img>
          <p>{item.name}</p>
          <a href= {item.gitPage}>Deployed Site</a>
          <a href= {item.gitLink}>Code Repo</a>
        </div>
        
      ))}
    </div>
  );
}

export default List;


