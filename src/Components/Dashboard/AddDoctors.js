import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import EditDoctor from './EditDoctor.js';
const AddDoctors = () => {
    const { register, handleSubmit, reset } = useForm();
    const [imgUrl, setImgUrl] = useState(null)
    const onSubmit = data => {
        const addDoctor = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            designation: data.designation,
            image: imgUrl,
        }

        fetch('https://lit-coast-50910.herokuapp.com/addDoctors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addDoctor)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.alert('doctor added successfully')
                }
                else {
                    window.alert('error! doctor added failed')
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
    }

    //! load doctor for edit info
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://lit-coast-50910.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
            })
    })

    return (
        <div>
            <h3>Add Doctor</h3>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <input type="text" name="name" className='form-control text-capitalize' placeholder='Full Name' {...register("name")} required />
                        </div>
                        <div className="form-group mb-3">
                            <input type="email" name="email" className='form-control' placeholder='Enter Email' {...register("email")} required />
                        </div>
                        <div className="form-group mb-3">
                            <input type="number" name="phone" className='form-control text-capitalize' placeholder='Enter Phone' {...register("phone")} required />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" name="designation" className='form-control text-uppercase' placeholder='Enter Designation' {...register("designation")} required />
                        </div>
                        <div className="form-group mb-3">
                            <input type="file" name="image" onChange={handleImgUpload} required />
                        </div>
                        <input type="submit" className='btn btn-outline-dark px-3' value="Submit" />
                    </form>
                </div>
            </div>

            <div className="container mt-5 pt-5">
                <div className='text-center'>
                    <h3>Edit Doctor List</h3>
                </div>
                <EditDoctor doctors={doctors} />
            </div>
        </div>
    );
};

export default AddDoctors;