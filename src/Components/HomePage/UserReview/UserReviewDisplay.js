import React from 'react';

const UserReviewDisplay = (props) => {
    const {title, occupation, comments, image} = props.review
    return (
        <div className="col mx-3 my-4" style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
            <div className="card border-0 text-center p-4" style={{height: '235px'}}>
                <div className='d-flex justify-content-around align-items-center'>
                    <img src={image} className='img-fluid' alt="" style={{width: '90px', height: '90px', borderRadius: '50%'}} />
                    <div>
                        <h4 className='mb-0'>{title}</h4>
                        <span>{occupation}</span>
                    </div>
                </div>
                <div className='mt-3' style={{overflowY: 'scroll'}}>
                    <p>{comments}</p>
                </div>
            </div>
        </div>
    );
};

export default UserReviewDisplay;