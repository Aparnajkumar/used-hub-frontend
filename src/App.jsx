import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Item from './Pages/Item';
import Dashboard from './Pages/Dashboard';

function App() {
    const items=[{id:22,ItemName:"Phone ",
       Rate: 120000,description:"10 years old",
        Location:"Aluva",
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
      description: "Well maintained",
      Location: "Kakkanad",
      Name: "soni",
      contact: 9876543360,
      img: "https://apollo.olx.in/v1/files/kr5fmfen0rck-IN/image;s=780x0;q=60"
    },
    {
      id: 25,
      ItemName: "Cycle",
      Price: 11000,
      description: "Well maintained",
      Location: "Ernakulam",
      Name: "Ravi",
      contact: 9876543210,
      img: "https://apollo.olx.in/v1/files/kr5fmfen0rck-IN/image;s=780x0;q=60"
    },
    {
      id: 26,
      ItemName: "Bike",
      Price: 980000,
      description: "Well maintained",
      Location: "Ernakulam",
      Name: "Ravi",
      contact: 9876543210,
      img: "https://apollo.olx.in/v1/files/kr5fmfen0rck-IN/image;s=780x0;q=60"
    },
    {
      id: 27,
      ItemName: "HeadPhone",
      Price: 9000,
      description: "Well maintained",
      Location: "Ernakulam",
      Name: "Ravi",
      contact: 9876543210,
      img: "https://apollo.olx.in/v1/files/kr5fmfen0rck-IN/image;s=780x0;q=60"
    }
    ]
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/item/:id" element={<Item items={items} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
