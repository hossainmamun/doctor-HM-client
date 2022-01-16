import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddBlogs = () => {
    const { register, handleSubmit, reset } = useForm();
    const [imgUrl, setImgUrl] = useState(null)
    const onSubmit = data => {
        const addBlogs = {
            name: data.name,
            advice: data.advice,
            date: data.date,
            comments: data.comments,
            image: imgUrl,
        }
        fetch('https://lit-coast-50910.herokuapp.com/addBlogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addBlogs)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.alert('blogs added successfully')
                }
                else {
                    window.alert('error! blogs added failed')
                }
                console.log(data)
            })
        reset()
    };

    // ! IMAGE UPLOAD TO IMGBB SERVER
    const handleImgUpload = (e) => {
        const imgData = new FormData()
        imgData.set('key', process.env.REACT_APP_IMGBB_API)
        imgData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then((response) => {
                setImgUrl(response.data.data.display_url)
                console.log(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(e.target.files[0])
    }
    return (
        <div>
            <h2>Add Blogs</h2>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <input type="text" name="name" className='form-control text-capitalize' placeholder='Full Name' {...register("name")} required />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" name="advice" className='form-control' placeholder='Advice' {...register("advice")} required />
                        </div>
                        <div className="form-group mb-3">
                            <input type="date" name="date" className='form-control' {...register("date")} required />
                        </div>
                        <div className="form-group mb-3">
                            <input type="file" name="image" onChange={handleImgUpload} required />
                        </div>
                        <div className="form-group mb-3">
                            <textarea name="comments" id="" rows="10" className='form-control text-capitalize' placeholder='comments' {...register("comments")} required />
                        </div>
                        <input type="submit" className='btn btn-outline-dark px-3' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlogs;