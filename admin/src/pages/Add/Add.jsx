import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'


const Add = ({url}) => {


    const[image,setImage] = useState(false);
    const[data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Cardiac Care"

    })

    const onChangeHandler =(event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) =>{
        
         const formData = new FormData();
         formData.append("name",data.name)
         formData.append("description",data.description)
         formData.append("price",Number(data.price))
         formData.append("category",data.category)
         formData.append("image",image)

         const response = await axios.post(`${url}/api/food/add` , formData);
         event.preventDefault(); 
         if (response.data.success) {

            setData({
                 name:"",
                 description:"",
                 price:"",
                 category:"Cardiac Care"

            })
            setImage(false)
            toast.success(response.data.message);
            
         }
         else{
            toast.error(response.data.message)

         }
         

    }
    

  return (
    <div className='add'>
        <form  className="flex-col" onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
            </div>
            <div className="add-product-name flex-col">
                <p>Product name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="add-product-description flex-col">
                <p>product description</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write conetent here' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product category</p>
                    <select onChange={onChangeHandler}  name="category" >
                         <option value="Cardiac Care">Cardiac Care</option>
                         <option value="Diabetes Care">Diabetes Care</option>
                         <option value="Cold & Fever">Cold & Fever</option>
                         <option value="Stomach Care">Stomach Care</option>
                         <option value="Pain Relief">Pain Relief</option>
                         <option value="Liver Care">Liver Care</option>
                         <option value="Oral Care">Oral Care</option>
                         <option value="Respiratory">Respiratory</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product price</p>
                    <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20'/>
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default Add