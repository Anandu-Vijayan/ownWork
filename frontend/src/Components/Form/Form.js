import { Button } from '@mui/material'
import axios from 'axios'
import React, { useRef, useState } from 'react'

const Form = () => {
  const [file, setFile] = useState()
  const imageRef = useRef(null)
  const [postData, setPostData] = useState({ image: '', userId: '' })

  const fileUpload = (e) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    setFile(URL.createObjectURL(e.target.files[0]))
    setPostData({
      ...postData,
      image: e.target.files[0],
      userId: userInfo._id
    })
  }
  const submit = () => {

    const formData = new FormData();
    for (let key in postData) {
      formData.append(key, postData[key])
    }


    console.log(postData);
    axios.post('http://localhost:5000/newpost', formData).then(response => {
      imageRef.current.value = null
      setFile('')

    })




  }



  return (
    <div>
      <Button
        variant="contained"
        component="label"
      >
        Upload File
        <input ref={imageRef}
          type="file"
          onChange={fileUpload}

        />
      </Button>
      <img style={{ width: '100px', display: 'block' }} src={file} />
      <Button onClick={submit}>uploade</Button>

    </div>
  )
}

export default Form