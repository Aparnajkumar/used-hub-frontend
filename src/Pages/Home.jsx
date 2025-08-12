import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FaUserAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Item from './Item'


function Home() {
    const items=[{id:22,ItemName:"Phone ",
       Rate: 120000,description:"5 years ",
        Location:"Kadavanthra",
        Name:"Aswin ",
        img: "https://apollo.olx.in/v1/files/pb2eigu7t3t31-IN/image;s=780x0;q=60",
        contact:6282577913},

      {
      id: 23,
      ItemName: "Car",
      Price: 500000,
      description: "Well maintained",
      Location: "Ernakulam",
      Name: "Ravi",
      contact: 9876543210,
      img: "https://apollo.olx.in/v1/files/kr5fmfen0rck-IN/image;s=780x0;q=60"
    },
    {
      id: 24,
      ItemName: "Sun Glass",
      Price: 9000,
      description: "Stylish",
      Location: "Kakkanad",
      Name: "soni",
      contact: 9876543360,
      img: "https://apollo.olx.in/v1/files/yl5rv4n3du3b1-IN/image;s=300x600;q=60"
    },
    {
      id: 25,
      ItemName: "Cycle",
      Price: 11000,
      description: "10 years old",
      Location: "Kalamassery",
      Name: "Aswin",
      contact: 9876543210,
      img: "https://apollo.olx.in/v1/files/v0jd104w0uoj1-ADVIN/image;s=300x600;q=60"
    },
    {
      id: 26,
      ItemName: "Bike",
      Price: 980000,
      description: "Well maintained",
      Location: "Alappuzha",
      Name: "Aswin",
      contact: 9876543210,
      img: "https://apollo.olx.in/v1/files/wzhs9s8vc6gh3-IN/image;s=300x600;q=60"
    },
    {
      id: 27,
      ItemName: "HeadPhone",
      Price: 9000,
      description: "new model",
      Location: "ALuva",
      Name: "Renu",
      contact: 9876543210,
      img: "https://apollo.olx.in/v1/files/h12so4t5f2kb-IN/image;s=780x0;q=60"
    }
    ]

      
  
  

  return (
    <>
    <Container className='bg-warning'>
<div className='text-center text-white p-1 mt-1'>
        <h1>Great deals for second hand items !!!!!</h1>
  <h2>Buy and Sell Items Easily</h2>
</div>
    </Container>
    <div className="text-center m-1">
<Link to={"/dashboard"}>  
    <button className='btn btn-warning border-dark '>Go to Dashboard</button>
    </Link>
    </div>

      <Container className='p-1'>
        <h2 className='text-center p-3'>BUY ITEMS FROM OUR FRESH RECOMMENDATIONS</h2>
        <div className="row justify-content-center">
            {items.map((item) => (
          <div className="col-sm-6 col-md-4  col-lg-3 d-flex justify-content-center align-items-center">
<Link to={`/item/${item.id}`} state={{item}} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card  style={{ height: "300px", width: "200px" }}>
                  <Card.Body className='text-center'>
                    <img src={item.img} alt="" style={{height:"200px", width:"180px"}} />
                    <Card.Title>{item.ItemName}</Card.Title>
                    <Card.Text>{item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>

</Link>
</div>))}
            </div>
          {/* <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Card style={{ height: "300px", width: "300px" }}>
              <Card.Body className='text-center'>
                <img src="https://apollo.olx.in/v1/files/kr5fmfen0rck-IN/image;s=780x0;q=60" alt="" style={{height:"150px"}} />
                <Card.Title>Car</Card.Title>
                <Card.Text>
                  Enjoy the convenience of our hassle-less doorstep free pickup service. We come to you, saving you time and effort.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Card style={{ height: "300px", width: "300px" }}>
              <Card.Body className='text-center'>
                <img src="https://apollo.olx.in/v1/files/yl5rv4n3du3b1-IN/image;s=300x600;q=60" alt=""  style={{height:"150px"}}/>
                <Card.Title>Sun Glass</Card.Title>
                <Card.Text>
                  Enjoy the convenience of our hassle-less doorstep free pickup service. We come to you, saving you time and effort.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

                <div className="row mt-3">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Card style={{ height: "300px", width: "300px" }}>
              <Card.Body className='text-center'>
                <img src="https://apollo.olx.in/v1/files/h12so4t5f2kb-IN/image;s=780x0;q=60" alt="" style={{height:"150px"}} />
                <Card.Title>Head Phone</Card.Title>
                <Card.Text>
                  Enjoy the convenience of our hassle-less doorstep free pickup service. We come to you, saving you time and effort.
                </Card.Text>
              </Card.Body>
            </Card></div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Card style={{ height: "300px", width: "300px" }}>
              <Card.Body className='text-center'>
                <img src="https://apollo.olx.in/v1/files/wzhs9s8vc6gh3-IN/image;s=300x600;q=60" alt="" style={{height:"150px"}} />
                <Card.Title>Bike</Card.Title>
                <Card.Text>
                  Enjoy the convenience of our hassle-less doorstep free pickup service. We come to you, saving you time and effort.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Card style={{ height: "300px", width: "300px" }}>
              <Card.Body className='text-center'>
                <img src="https://apollo.olx.in/v1/files/v0jd104w0uoj1-ADVIN/image;s=300x600;q=60" alt=""  style={{height:"150px"}}/>
                <Card.Title>Cycle</Card.Title>
                <Card.Text>
                  Enjoy the convenience of our hassle-less doorstep free pickup service. We come to you, saving you time and effort.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div> */}

      </Container>


      <Container Fluid className='shadow p-3 mt-2 bg-warning'>
        <h3 className='text-center p-1'>Why we are the best?</h3>
        <Row md={4} className='d-flex justify-content-center align-items-center g-5' >

          <Col className='d-flex justify-content-center align-items-center'>
            <Card style={{ width: "18rem" }}>
              <Card.Body className='text-center'>
                <Card.Title>Easy Doorstep Pickup</Card.Title>
                <Card.Text>
                  Enjoy the convenience of our hassle-less doorstep free pickup service. We come to you, saving you time and effort.
                </Card.Text>
              </Card.Body>
            </Card>

          </Col>

          <Col className='d-flex justify-content-center align-items-center'>
            <Card style={{ width: "18rem" }}>
              <Card.Body className='text-center'>
                <Card.Title>Assured Best Price</Card.Title>
                <Card.Text>
                  Receive the highest value for your gadgets with our guaranteed best-price offers. We ensure you get the maximum worth.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className='d-flex justify-content-center align-items-center'>
            <Card style={{ width: "18rem" }}>
              <Card.Body className='text-center'>
                <Card.Title>Instant Payment</Card.Title>
                <Card.Text>
                  Get paid instantly with our very swift and secure payment system. No delays, just quick and reliable transactions
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      <Container className='p-3'>
        <h3 className='text-center p-3'>What our customers say</h3>

        <div className="row">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <Card style={{ height: "13rem" }}>
              <Card.Body className='text-center'>
                <Card.Text>Quick reply from management totally worth to sell devices in this app. I've got more money then my expectations. </Card.Text>
                <p> <FaUserAlt className='fs-5 border border-dark' />Rhitvik</p>
                <p>⭐⭐⭐⭐⭐</p>

              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <Card style={{ height: "13rem" }}>
              <Card.Body className='text-center'>
                <Card.Text>Great service and valuable price.This is the best app for reselling. I Recommend this app to everyone.</Card.Text>
                <p> <FaUserAlt className='fs-5 border border-dark' />Remya</p>
                <p>⭐⭐⭐⭐⭐</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <Card style={{ height: "13rem" }}>
              <Card.Body className='text-center'>
                <Card.Text>Fast and quick process. Great service and valuable price I would give 5 star rating for responses and price*-</Card.Text>
                <p> <FaUserAlt className='fs-5 border border-dark' />Aman</p>
                <p>⭐⭐⭐⭐⭐</p>

              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <Card style={{ height: "13rem" }}>
              <Card.Body className='text-center'>
                <Card.Text>Nice and Simple app. Service was excellent. I sold my recently bought phone. Received money through GPay on the spot</Card.Text>
                <p> <FaUserAlt className='fs-5 border border-dark' />Parvathy</p>
                <p>⭐⭐⭐⭐</p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home