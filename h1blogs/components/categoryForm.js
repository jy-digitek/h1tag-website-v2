import {Formik} from 'formik';
import { useState } from 'react';
import axios from 'axios';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Form,
    Field,
    Input
  } from '@chakra-ui/react'
export default function CategoryForm(){
    const [input, setInput] = useState({name:"",description:""})
    const [errorRestaurants, setErrorRestaurants] = useState(null); 

    const handleInputChange = (data) => {
        console.log(input);
        setInput({...input,[data.target.name]:data.target.value})
    }
    const  submitHandle=async(e)=>{
       // console.log(input)
        e.preventDefault();

        try {
          const response = await axios.post('http://localhost:5000/api/vi/category/createcategories', {
         name:input.name,
         description:input.description
          });
          console.log(response);
        } catch (error) {
            console.log(error)
         // setErrorRestaurants(error);
        }
    }
    return(
        <>
        <div>
    <FormControl >
      <FormLabel>name</FormLabel>
      <Input type='text'name='name' onChange={handleInputChange} style={{padding:"10px 0px",width:"50%"}} />
      <FormLabel>description</FormLabel>
      <Input type='text' name='description'  onChange={handleInputChange} style={{padding:"10px 0px",width:"50%"}} />
      <FormLabel></FormLabel>
      <Button colorScheme='red' onClick={submitHandle}>Submit</Button>

    </FormControl>
    </div>
        </>
    )
}