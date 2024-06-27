import React from 'react'
import Nav1 from './Nav1'
import { Col, Container, Row } from 'react-bootstrap';
import Cards from './Cards';
import Headlines from './Headlines';
import AppleImage from "../Images/apple.jpeg";
import teslaImage from "../Images/tesla.jpeg";
import techCrunchImage from "../Images/techcrunch.jpeg";
import { Link } from 'react-router-dom';





export default function Home() {
  return (
    <>
    <Nav1/>
    <Container>
      <Row className='my-5 pt-2'>

        <Col lg={4}>
        <Link to="/apple" style={{textDecoration:"none",color:"inherit"}}>
          <Cards
            title="Apple News"
            description="Stay updated with the latest news and updates from Apple."
            imageUrl={AppleImage}
            Readnews="Read More"

          />
          </Link>
        </Col>

        <Col lg={4}>
        <Link to="/tesla" style={{textDecoration:"none",color:"inherit"}}>
          <Cards
            title="Tesla News"
            description="Explore the latest developments and news from Tesla."
            imageUrl={teslaImage}
            Readnews="Read More"
          />
        </Link>
        </Col>

        <Col lg={4}>
        <Link to="/techcrunch" style={{textDecoration:"none",color:"inherit"}}>
          <Cards
            title="Tech Crunch News"
            description="Discover the latest articles and updates from Tech Crunch."
            imageUrl={techCrunchImage}
            Readnews="Read More"
          />
          </Link>
        </Col>

      </Row>
      <Headlines/>
    </Container>
    </>
  )
}
