import React from 'react';
import '../../../StyleSheet/Contact.scss'

const Contact = () => {
    return (
        <section id='contact' className="form-section">
            <div className="overlay py-5">
                <div className="container">
                    <h1 className="text-center text-capitalize text-white">contact us</h1>
                    <div className="row justify-content-center p-5">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12 text-capitalize">
                                    <form action="">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="text-white" htmlFor="">name</label>
                                                    <input className="form-control bg-transparent py-2 px-3 text-capitalize" type="text" placeholder="enter name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="text-white" htmlFor="">email</label>
                                                    <input className="form-control bg-transparent py-2 px-3 text-capitalize" type="text" placeholder="enter email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="text-white" htmlFor="">phone</label>
                                                    <input className="form-control bg-transparent py-2 px-3 text-capitalize" type="text" placeholder="enter phone" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="text-white" htmlFor="">address</label>
                                                    <input className="form-control bg-transparent py-2 px-3 text-capitalize" type="text" placeholder="enter address" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="text-white" htmlFor="">message</label>
                                            <textarea className="form-control bg-transparent text-capitalize" name="" id="" cols="30" rows="10" placeholder="enter message"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-outline-light py-2 px-5 mt-4">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;