import React, { useState } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { RiDeleteBin2Fill, RiEdit2Fill } from 'react-icons/ri'
import ItemEdit from './ItemEdit';
import { deleteItemAPI } from '../Services/AllAPI';

function ItemCard({ used,usedItems, setIsItemAdded, setIsItemUpdated }) {
  console.log(used);

  const [item, setItem] = useState([])

  const handleDelete = async (id) => {
    // console.log(id);
    try {
      const result = await deleteItemAPI(id)
      console.log(result);
      setIsItemAdded(result)
    }
    catch (error) {
      console.log(error);

    }

  }
  return (
    <>
      {/* <Card style={{ height: "200px", width: "280px" }}>
        <Card.Body className=''>
          <img src="https://apollo.olx.in/v1/files/pb2eigu7t3t31-IN/image;s=780x0;q=60" alt="" style={{ height: "120px", width: "150px" }} /> 
          <Card.Title>{used?.ItemName}</Card.Title>
          <Card.Text>
            <h6>Price:{used?.Rate}</h6>
            <h6>Location:{used?.Location}</h6>
            <h6>Description:{used?.description}</h6>
          </Card.Text>
          <div className='d-flex justify-content-evenly align-items-center'>
            <ItemEdit isEdit={true} ItemId={used?.id} setIsItemUpdated={setIsItemUpdated}/> 
                         <Button variant='warning'>Edit <RiEdit2Fill/></Button> 
                        <Button onClick={()=>handleDelete(used?.id)} variant='danger'>Delete<RiDeleteBin2Fill/></Button>
                    
          </div>
        </Card.Body>
      </Card>   */}


             

  <tr>
                    <td style={{ width: "20%" }}>{used?.ItemName}</td>
                    <td style={{ width: "20%" }}>{used?.Rate}</td>
                    <td style={{ width: "20%" }}>{used?.Location}</td>
                    <td style={{ width: "20%" }}>{used?.description}</td>
                    <td style={{ width: "20%" }}>
                      <ItemEdit isEdit={true} ItemId={used?.id} setIsItemUpdated={setIsItemUpdated} />
                    </td>
                    <td style={{ width: "20%" }}>
                      <Button onClick={() => handleDelete(used?.id)} variant='danger'>Delete<RiDeleteBin2Fill /></Button>
                    </td>
  </tr>

             
    </>
  )
}

export default ItemCard