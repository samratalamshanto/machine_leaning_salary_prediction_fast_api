import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { countryList, educationList } from '../@constant_data/data';
import { IReqDto } from '../@interface/dto.interface';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {

    const [reqData, setReqData] = useState<IReqDto>({ education: "", country: "", experience: 1 });
    const [salary, setSalary] = useState(null);
    const baseUrl = process.env.REACT_APP_baseUrl;

    const postData = () => {
        axios.post(baseUrl + '/predict', reqData)
            .then(function (response: any) {
                setSalary(response?.data?.salary.toFixed(4));
            })
            .catch(function (error: any) {
                console.log(error);
            });
    }

    const resetData = () => {
        setReqData({ education: "", country: "", experience: 1 });
        setSalary(null);
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setReqData({ ...reqData, [name]: value });
    };


    return (
        <>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Card className="shadow-lg rounded">
                            <Card.Body>
                                <Card.Title className="text-center mb-4">Predict Your Salary</Card.Title>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Select
                                            required
                                            name="country"
                                            value={reqData.country}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Select Country</option>
                                            {countryList.map((singleCountry) => (
                                                <option key={singleCountry} value={singleCountry}>
                                                    {singleCountry}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Education Level</Form.Label>
                                        <Form.Select
                                            required
                                            name="education"
                                            value={reqData.education}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Select Education Level</option>
                                            {educationList.map((singleEducation) => (
                                                <option key={singleEducation} value={singleEducation}>
                                                    {singleEducation}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>


                                    <Form.Group className="mb-3">
                                        <Form.Label>Experience</Form.Label>
                                        <Form.Range
                                            value={reqData.experience}
                                            name="experience"
                                            onChange={handleChange}
                                            min="1"
                                            max="50"
                                            step="0.5"
                                        />
                                        <h5 className="text-center">Experience: {reqData.experience} years</h5>
                                    </Form.Group>

                                    <div className="d-flex justify-content-between">
                                        <Button variant="primary" onClick={postData}>
                                            Submit
                                        </Button>
                                        <Button variant="danger" onClick={resetData}>
                                            Reset
                                        </Button>
                                    </div>
                                </Form>

                                {salary !== null && (
                                    <div className="mt-4 text-center">
                                        <h3 className="text-success">Predicted Salary: <b>${salary}</b>/year</h3>
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row className="justify-content-center mt-4">
                    <Col md={8} lg={6}>
                        <div className="text-center">
                            <p>Check out the project on GitHub:<span> </span>
                                <a href="https://github.com/samratalamshanto/machine_leaning_salary_prediction_fast_api" target="_blank" rel="noopener noreferrer">
                                    GitHub Repository
                                </a>
                            </p>
                            <p>Dataset used for model training:<span> </span>
                                <a href="https://survey.stackoverflow.co/" target="_blank" rel="noopener noreferrer">
                                    Stackoverflow Survey Dataset Link
                                </a>
                            </p>
                            <p>Model notebook:<span> </span>
                                <a href="https://github.com/samratalamshanto/machine_leaning_salary_prediction_fast_api/blob/main/pickle_models/Predict_Salary.ipynb" target="_blank" rel="noopener noreferrer">
                                    Notebook Link
                                </a>
                            </p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default Dashboard;