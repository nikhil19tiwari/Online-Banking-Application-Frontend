import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormGroup, Input, Form, Label, Container, Card, CardHeader, Button } from 'reactstrap';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");  // State for error message
  const navigate = useNavigate();          // Navigation hook

  const handleChange = (event, property) => {
    setFormData({ ...formData, [property]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setError(""); // clear previous error

    // API call to backend
    axios.post("http://localhost:9999/v1/api/user/signup", formData)
      .then((response) => {
        navigate("/welcome"); // Navigate on success
      })
      .catch((error) => {
        setError("Signup failed. Please try again.");
        console.error(error);
      });
  };

  return (
    <>
      <Container className='w-50 border border-primary rounded-3 mt-3'>
        <Card>
          <CardHeader className='text-center bg-primary text-white rounded'>
            Signup Page
          </CardHeader>
        </Card>

        <Form className="mt-3" onSubmit={submitForm}>
          <FormGroup>
            <Label className='text-danger'>Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="Enter the username"
              type="text"
              onChange={(e) => handleChange(e, "username")}
              value={formData.username}
            />
          </FormGroup>

          <FormGroup>
            <Label className='text-danger'>Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter the email"
              type="email"
              onChange={(e) => handleChange(e, "email")}
              value={formData.email}
            />
          </FormGroup>

          <FormGroup>
            <Label className='text-danger'>Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Enter the password"
              type="password"
              onChange={(e) => handleChange(e, "password")}
              value={formData.password}
            />
          </FormGroup>

          {error && <p className='text-danger text-center'>{error}</p>}

          <div className="d-flex justify-content-center">
            <Button color="primary" className='mb-2'>Submit</Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default Signup;
