import React, { useEffect, useState } from 'react'
import ItemCard from "../Components/ItemCard";
import { Button, Table } from 'react-bootstrap';
import { BiEdit, BiSolidEdit } from 'react-icons/bi';
import { FiDelete } from 'react-icons/fi';
import { RiDeleteBin2Fill, RiEdit2Fill } from 'react-icons/ri';
import ItemEdit from '../Components/ItemEdit';
import { getallItemAPI } from '../Services/AllAPI';

function Dashboard() {
  const [item, setItem] = useState([])
  const [isItemAdded, setIsItemAdded] = useState()
  const [isItemUpdated, setIsItemUpdated] = useState()
  //get item
  const getallItem = async () => {
    try {
      const result = await getallItemAPI()
      console.log(result);
      setItem(result.data)

    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getallItem()
  }, [isItemAdded, isItemUpdated])
  return (
    <>
      <div className="container mt-5 ">
        <div className='d-flex mb-2 justify-content-between'>
          <h2>DASHBOARD</h2>
          <ItemEdit setIsItemAdded={setIsItemAdded} setItem={setItem} />
        </div>
<div className='row'>
<div className=''>
            <div className='table-responsive'>
              <Table striped bordered hover className="align-middle text-center">
                <thead>
                  <tr className='w-75'>
                    <th style={{ width: "10%" }}>Item</th>
                    <th style={{ width: "10%" }}>Price</th>
                    <th style={{ width: "10%" }}>Location</th>
                    <th style={{ width: "10%" }}>Description</th>
                    <th style={{ width: "10%" }}>Edit</th>
                    <th style={{ width: "10%" }}>Delete</th>
                  </tr>
                </thead>
                
<tbody>
    
                  {
                    item.length > 0 ?
                      item?.map((used) => (

    
                          <ItemCard key={used.id} used={used} setIsItemAdded={setIsItemAdded} setIsItemUpdated={setIsItemUpdated} setItem={setItem} />
    
                                         ))
                      :
                      <h2 className='text-warning'>No Item added</h2>
                  }
                
               </tbody> 
              </Table>
            </div>
</div>
</div>
      </div>
    </>
  )
}

export default Dashboard