import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import axios from 'axios';

const BASE_URL = 'https://crudcrud.com/api/f3f0548d15544516814928fe2405fd62/todo';

const App = () => {

   const[item, setItem] = useState([]);

   useEffect(() => {
      async function addData(){
         const response = await axios.get(BASE_URL);
         setItem(response.data);
      }
      addData();
   }, []);
    
   const addNote = async (note) => {
      const addedNote = await axios.post(BASE_URL, note);
      console.log(addedNote.data);
      setItem((prevData) => {
         return [...prevData, addedNote.data];
      })
   };

   const onDelete = (key) => {
      setItem((prevData) => {
         const newData = [];
         prevData.forEach(element => {
            if(element._id === key){
               axios.delete(`${BASE_URL}/${element._id}`)
            }
            else{
               newData.push(element);
            }
         });
         return newData; 
      });
   };

   return(
      <>
         <Header/>
         <CreateNote passNote={addNote}/>
         {item.map((val, index) => {
            return <Note key={val._id} id={val._id} 
             title={val.title} content={val.content} 
             deleteItem={onDelete} />
         })}
         <Footer/>
      </>
   );
};

export default App;