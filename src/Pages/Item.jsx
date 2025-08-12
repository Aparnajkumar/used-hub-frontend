import React from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';

function Item() {
    const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return <h2>Item not found</h2>;
  }



  return (
    <>
    <Container>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6  shadow border-1 p-2 m-1">
  <h1 className='text-center'>{item.ItemName}</h1>
<div className='d-flex '>
  <img src={item.img} alt="" style={{height:"200px", width:"200px"}} className='me-3 ' />
<div>
    <h5 className='text-success'>Price:₹{item.Rate}</h5>
    <p>Description: {item.description}</p>
    <p>Location: {item.Location}</p>
    <hr />
    <h6>Seller Info</h6>
    <p>Name: {item.Name}</p>
    <p>Contact: {item.contact}</p>

</div>
</div>


            </div>
            <div className="col-md-3"></div>
        </div>
    </Container>
    </>
  )
}

export default Item