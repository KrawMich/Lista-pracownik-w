import { useLocation } from "react-router-dom"
import { Employee } from "../models/Employee";

export function DetailsPage() {
    const location = useLocation();

    const data: Employee = location.state;

    return (
        <>
            <h3>Detaile Page</h3>
            <div className="row">
                <div className="col">
                    <label htmlFor="firstname" className="form-label">Firstname</label>
                    <input className="form-control" type="text" id="firstname" value={data.firstname} readOnly />
                </div>
                <div className="col">
                    <label htmlFor="lastname" className="form-label">Lastname</label>
                    <input className="form-control" type="text" id="lastname" value={data.lastname} readOnly />
                </div>
                <div className="col">
                    <label htmlFor="birthdate" className="form-label">Birthdate</label>
                    <input className="form-control" type="text" id="birthdate" value={data.birthdate.toDateString()} readOnly />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="phonenumber" className="form-label">Phonenumber</label>
                    <input className="form-control" type="text" id="phonenumbere" value={data.phonenumber} readOnly />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input className="form-control" type="text" id="address" value={data.address} readOnly />
                </div>
                <div className="col">
                    <label htmlFor="city" className="form-label">City</label>
                    <input className="form-control" type="text" id="city" value={data.city} readOnly />
                </div>
                <div className="col">
                    <label htmlFor="postalcode" className="form-label">Postalcode</label>
                    <input className="form-control" type="text" id="postalcode" value={data.postalcode} readOnly />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="id" className="form-label">Id</label>
                    <input className="form-control" type="text" id="id" value={data.id} readOnly />
                </div>
                <div className="col">
                    <label htmlFor="status" className="form-label">Status</label>
                    <input className="form-control" type="text" id="status" value={data.status} readOnly />
                </div>
                <div className="col">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input className="form-control" type="text" id="salary" value={data.salary} readOnly />
                </div>
            </div>
        </>
    )
}