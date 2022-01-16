import React from 'react';

const BlogsDisplay = (props) => {
    const {name, advice, date, comments, image} = props.blog
    return (
        <div className="col mx-3 my-4" style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
            <div className="card border-0 text-center p-4" style={{height: '235px'}}>
                <div className='d-flex justify-content-around align-items-center'>
                    <img src={image} className='img-fluid' alt="" style={{width: '90px', height: '90px', borderRadius: '50%'}} />
                    <div>
                        <h4 className='mb-0'>{name}</h4>
                        <span>{new Date(date).toDateString("dd/MM/yyy")}</span>
                    </div>
                </div>
                <div className='mt-3' style={{overflowY: 'scroll'}}>
                    <h5>{advice}</h5>
                    <p>{comments}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogsDisplay;