import React from 'react'
import { useState } from "react";
import axios from "axios";


const AddBookmarkForm = () => {
  const [formData, setFormData] = useState({
    site: '',
    url: '',
    category: ''
  })

  const [errorState, setErrorState] = useState('')

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post("http://locahost:3001/bookmarks/add/", {
  //       site: formData.site,
  //       url: formData.url,
  //       category: formData.category,
  //     });
  //     console.log(response);
  //   } catch {
  //     setErrorState('Add Bookmark Failed. Try Again');
  //   }
  // }





  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/bookmarks/add/", {
      site: formData.site,
      url: formData.url,
      category: formData.category,
    });
    console.log(response);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="site">Site:</label><br />
        <input type="text" name="site" onChange={handleChange} value={formData.site} /><br/>
        <label htmlFor="url">URL:</label><br />
        <input type="text" name="url" onChange={handleChange} value={formData.url} /><br/>
        <label htmlFor="category">Category:</label><br />
        <input type="text" name="category" onChange={handleChange} value={formData.category} /><br/>
        <input className="submitButton" type="submit" />
      </form>
    </div>
  )
}

export default AddBookmarkForm