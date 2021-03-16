import React from 'react'
import Card from 'react-bootstrap/Card'

const Cards = props => {
    return(
        <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.imagesrc} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      {props.description}
    </Card.Text>
  </Card.Body>
</Card>
</div>
    )
}

export default Cards;