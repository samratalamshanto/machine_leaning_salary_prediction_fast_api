import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { countryList, educationList } from '../@constant_data/data';
import { IReqDto } from '../@interface/dto.interface';

const Dashboard = () => {

    const [reqData, setReqData] = useState<IReqDto>({ education: "", country: "", experience: 1 });
    const [salary, setSalary] = useState(0);
    const baseUrl = "https://machine-leaning-salary-prediction-fast.onrender.com/";

    const postData = () => {
        axios.post(baseUrl + '/predict', reqData)
            .then(function (response: any) {
                debugger;
                console.log(response);
                setSalary(response?.data?.salary);
            })
            .catch(function (error: any) {
                console.log(error);
            });
    }

    const resetData = () => {
        setReqData({ education: "", country: "", experience: 1 });
        setSalary(0);
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setReqData({ ...reqData, [name]: value });
    };


    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Predict Salary</Card.Title>
                    <Form>
                        <div className='row'>
                            <Form.Group className="mb-3">
                                <Form.Label>Country</Form.Label>
                                <Form.Select required name='country' onChange={handleChange}>
                                    <option value="" disabled selected>Select Country</option>
                                    {countryList.map((singleCountry) => {
                                        return <option value={singleCountry}>{singleCountry}</option>
                                    })}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Education Level</Form.Label>
                                <Form.Select required name='education' onChange={handleChange}>
                                    <option value="" disabled selected>Select Education level</option>
                                    {educationList.map((singleEducation) => {
                                        return <option value={singleEducation}>{singleEducation}</option>
                                    })}

                                </Form.Select>
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Label>Experience</Form.Label>
                            <Form.Range value={reqData.experience} name="experience" onChange={handleChange} min="1" max="50" step="0.5" />
                            <h5>Experience: {reqData.experience}</h5>
                        </Form.Group>

                        <Button variant="primary" onClick={postData}>
                            Submit
                        </Button>

                        <Button className='ml-5' variant="danger" onClick={resetData}>
                            Reset
                        </Button>
                    </Form>
                    <h1>Salary is: {salary}$</h1>
                </Card.Body>
            </Card>


        </>
    );
};

export default Dashboard;