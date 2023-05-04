import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  return (
    <div className="gallery">
      {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
      {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
      {props.groceries.map(item => (
        <div className="list-group-item" key={item.id}>
            {/* <img src={item.image} alt="AppImage"></img>
          <p>{item.name}</p>
          <a href= {item.gitPage}>Deployed Site</a>
          <a href= {item.gitLink}>Code Repo</a> */}
          <Card style={{ width: '15rem' }} >
    <Card.Img variant="top" src={item.image} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Body>
      <Card.Link href={item.gitLink}>Repo</Card.Link>
      <Card.Link href={item.gitPage}>Deployed App</Card.Link>
    </Card.Body>
  </Card>
        </div>
        
      ))}
    </div>
  );
}

export default List;


// return (
//   <Card style={{ width: '18rem' }}>
//     <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//     <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </Card.Text>
//     </Card.Body>
//     <ListGroup className="list-group-flush">
//       <ListGroup.Item>Cras justo odio</ListGroup.Item>
//       <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//       <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//     </ListGroup>
//     <Card.Body>
//       <Card.Link href="#">Card Link</Card.Link>
//       <Card.Link href="#">Another Link</Card.Link>
//     </Card.Body>
//   </Card>
// );


// function List(props) {
//   return (
//     <div className="gallery">
//       {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
//       {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
//       {props.groceries.map(item => (
//         <div className="list-group-item" key={item.id}>
//             <img src={item.image} alt="AppImage"></img>
//           <p>{item.name}</p>
//           <a href= {item.gitPage}>Deployed Site</a>
//           <a href= {item.gitLink}>Code Repo</a>
//         </div>
        
//       ))}
//     </div>
//   );
// }