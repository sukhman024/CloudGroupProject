
import React, { useState, seEffect } from 'react';
import '../../../App.css';
// import UserDashboard from "./UserDashboard.js";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Redirect } from 'react-router-dom';

function SignInUser(username, password) {
    
}

const SignIn = () => {
    const [status, currentStatus] = useState(null);
    const [username, setusername] = useState(null);
    const [password, setpassword] = useState(null);
    if (status=== "user") {
        return (<Redirect to="/UserDashboard"/>);
    } else {
        
    return (
        <div>
                <Form className="App">
                <h1 className="Cen">Teamup USER LOGIN</h1>
                <h2 className="Cen">Enter Details</h2>
                <FormGroup>
                    <label className="Cen">Username</label>
                    <Input className='Username' type="Username" placeholder="Username" onChange={(event)=>{
                        setusername(event.target.value)
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label className="Cen">Password</label>
                    <Input className='Password' type="Password" placeholder="Password"/>
                </FormGroup>
                <div className="Left">
                    <a href="/forgot-password">Forgot Password</a>
                </div>
                <Button  onClick={() => {
                    SignInUser(username, password)
                    currentStatus("user")
                    

            }} className="block">Log in</Button>
               </Form>
             </div>
    );
}
}
            
export default SignIn;