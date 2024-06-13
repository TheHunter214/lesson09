import './App.css';
import {React, useEffect, useState} from 'react'
import TmnStudentList from './components/TmnStudentList';
import axios from 'axios';


function NttmApp() {  

  // Sử dụng hàm useState của hook 
  const [TmnStudentList, setTmnStudentList]=useState();
  // Get data from api 
  const TmnGetStudent = async () =>{
    try {
      const response = await axios.get("https://666a5f1d7013419182cf06ab.mockapi.io/api/tmn01/TmnStudent");
      TmnStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data :", error);
    }
  };
  useEffect(() =>{
  TmnGetStudent();
  }, [])
  return (
    <div className="container border mt-5 p-3">
      <h2 className='text-center'>Xử lý các chức năng CRUD - Hook - API</h2>
      <hr/>
      <TmnStudentList renderTmnStudentList = {TmnStudentList} />
      
    </div>
  );
}

export default NttmApp;
