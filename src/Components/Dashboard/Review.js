import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const [imgUrl, setImgUrl] = useState(null)
    const onSubmit = data => {
        const addReview = {
            title: data.title,
            occupation: data.occupation,
            comments: data.comments,
            image: imgUrl,
        }
        fetch('https://lit-coast-50910.herokuapp.com/peopleReviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
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
            <h3>Add Your Review</h3>
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-3">
                                <input type="text" name="title" className='form-control text-capitalize' placeholder='Full Name' {...register("title")} />
                            </div>
                            <div className="form-group mb-3">
                                <input type="text" name="occupation" className='form-control text-capitalize' placeholder='Occupation' {...register("occupation")} />
                            </div>
                            <div className="form-group mb-3">
                                <input type="file" name="image" onChange={handleImgUpload} />
                            </div>
                            <div className="form-group mb-3">
                                <textarea type="text" name="comments" id="" rows="10" className='form-control' placeholder='Comments' {...register("comments")}></textarea>
                            </div>
                            <input type="submit" className='btn btn-outline-dark px-3' value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;