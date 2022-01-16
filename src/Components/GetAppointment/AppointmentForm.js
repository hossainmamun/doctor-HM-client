import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    border: "0px",
    borderRadius: "8px",
    padding: "40px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, title, date }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const appointment = {
      subject: title,
      date: date,
      time: data.time,
      patientName: data.patientName,
      phone: data.phone,
      age: data.age,
      gender: data.gender,
    };
    fetch("https://lit-coast-50910.herokuapp.com/addAppointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          window.alert("appointment created successfully");
          closeModal();
        } else {
          window.alert("Appointment created failed");
        }
        console.log(data);
      });
    reset();
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text-center mb-4">
          <h4>{title}</h4>
          <strong>{date.toDateString("dd/MM/yyyy")}</strong>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="patientName"
              className="form-control text-capitalize"
              placeholder="patient Name"
              {...register("patientName")}
              required
            />
          </div>

          <div className="row mb-3 align-items-end">
            <div className="col-6">
              <div className="form-group">
                <select
                  name="time"
                  id=""
                  className="form-control form-select"
                  {...register("time")}
                  required
                >
                  <option default select hidden value="time">
                    Time
                  </option>
                  <option value="10AM">10AM</option>
                  <option value="4PM">4PM</option>
                </select>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  placeholder="Phone"
                  {...register("phone")}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="form-group mb-3">
                <input
                  type="number"
                  name="age"
                  className="form-control"
                  placeholder="Age"
                  {...register("age")}
                  required
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group mb-3">
                <select
                  name="gender"
                  id=""
                  className="form-control form-select"
                  {...register("gender")}
                  required
                >
                  <option disabled hidden selected value="">
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-outline-dark px-3 me-4"
            value="Submit"
          />
          <button className="btn btn-outline-danger" onClick={closeModal}>
            Close
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
