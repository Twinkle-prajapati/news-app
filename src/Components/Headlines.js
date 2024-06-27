import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';



export default function Headlines() {
    const[news,setNews]=useState([])

    const title="Top Headlines From India";

    useEffect(()=>{
        fetchNews();
    },[])


    async function fetchNews(){
        let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=cd8cc6da9760473d986eb7facf81a784",{
            method:'GET'
        })
        res = await res.json()
        console.log("message",res);

        if(res)
            {
                setNews(res.articles)
            }

    }
  return (
    <>
    <marquee behavior="scroll" direction="left" loop="3">
        <h1 className='text-danger mt-5'>{title} &nbsp;&nbsp; {title} &nbsp;&nbsp;  {title}  </h1>
        </marquee>
    <Container>

        <Row className='mb-5'>
    {news.map((article)=>
    <Col lg={4} className='mt-5'>
    <Card style={{ width: '25rem',height:"100%", boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      <Card.Img  variant="top" src={article.urlToImage} style={{maxHeight:"10rem",objectFit:"cover"}} />
      <Card.Body className='p-4' style={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.content}
        </Card.Text>
        <Button className='d-grid w-100' style={{backgroundColor:"#237B71"}} onClick={() => window.open(article.url, '_blank')}>Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    )
   }

   </Row>

</Container>
    </>
  );
}

