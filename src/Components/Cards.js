import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards(props) {
  return (
    <div>
<Card style={{ width: '25rem',maxHeight:"27rem", boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      <Card.Img  variant="top" src={props.imageUrl} style={{maxHeight:"12rem",objectFit:"cover"}} />
      <Card.Body className='p-4'>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button style={{backgroundColor:"#237B71"}}>{props.Readnews}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
