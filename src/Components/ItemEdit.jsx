import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addItemAPI, getEditItemAPI, updateEditItemAPI } from '../Services/AllAPI';
import { RiEdit2Fill } from 'react-icons/ri';

function ItemEdit({ isEdit,setIsItemAdded,ItemId ,setIsItemUpdated}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => 
    {getEditItem()
      setShow(true);
    }
  const [item, setItem] = useState({
    ItemName: "",
    Rate: "",
    Location: "",
    description: ""
  })
  console.log(item);

  const addItem = async () => {
    const { ItemName, Rate, Location, description } = item
    console.log(ItemName, Rate, Location, description);
    if (!ItemName || !Rate || !Location || !description) {
      alert(`Fill the form completely`)
    } else {
      try {
        const result = await addItemAPI(item)
        console.log(result);
        setIsItemAdded(result)
        handleClose()
      }
      catch (error) {
        console.log(error);
      }
    }

  }

  const handleUpdateItem=async()=>{
const { ItemName, Rate, Location, description } = item
    console.log(ItemName, Rate, Location, description);
    if (!ItemName || !Rate || !Location || !description) {
        alert(`Fill the form completely`)
    }else{
        try {
            const result=await updateEditItemAPI(ItemId,item)
            console.log(result);
            handleClose()
            setIsItemUpdated(result)
        } catch (error) {
            console.log(error);
            
        }
    }
}

const getEditItem=async()=>{
    try {
            const result=await getEditItemAPI(ItemId)
            console.log(result);
            setItem(result.data)
        } catch (error) {
            console.log(error);
        }
}

  return (
    <>
      {isEdit ? <Button variant="secondary" onClick={handleShow}>
        Edit  <RiEdit2Fill/>
      </Button> :
        <Button variant="secondary" onClick={handleShow}>
          Add Item
        </Button>}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {isEdit ? <Modal.Title>Edit Item</Modal.Title> :
            <Modal.Title>Add Item</Modal.Title>}

        </Modal.Header>
        <Modal.Body>
          <div>
            <label htmlFor="">Item:</label>
            <input value={item?.ItemName} onChange={(e) => setItem({ ...item, ItemName: e.target.value })} type="text" placeholder='Enter the type of Item' className='form-control mt-2' />
          </div>
          <div>
            <label htmlFor="">Rate:</label>
            <input value={item?.Rate} onChange={(e) => setItem({ ...item, Rate: e.target.value })} type="text" placeholder='Enter the Rate' className='form-control mt-2' />
          </div>
          <div>
            <label htmlFor="">Location:</label>
            <input value={item?.Location} onChange={(e) => setItem({ ...item, Location: e.target.value })} type="text" placeholder='Enter the location' className='form-control mt-2' />
          </div>
          <div>
            <label htmlFor="">Description:</label>
            <textarea value={item?.description} onChange={(e) => setItem({ ...item, description: e.target.value })} type="text" placeholder='Add description' className='form-control mt-2' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {isEdit ? <Button  onClick={handleUpdateItem} variant="info">Update Data</Button> :
            <Button onClick={addItem} variant="info">Add Data</Button>}
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ItemEdit 