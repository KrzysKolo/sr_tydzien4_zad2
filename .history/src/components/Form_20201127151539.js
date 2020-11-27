import React, { useState } from 'react';
import Input from './formComponents/Input'
import Button from './formComponents/Button'
import styled from 'styled-components';

const ContainerForm = styled.form`
width: 80%;
max-width: 500px;
height: 200px;
background: green;
`;

const initialState = {
    Name: '',
    Email: '',
    message:'',
    errors: {
        Name: false,
        Email: false,
        }
}
const message = {
    Name_incorrect: "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    Email_incorrect: "Brak @ lub adres zawiera spacje",
}

const handleChange = e =>{
    const inputName = e.target.name;
    const type = e.target.type
    if(type === "text" || type === "email") {
        const value = e.target.value;
        this.setState({
            [inputName] : value,
        })
    }
}
const onSubmit = e => {
    e.preventDefault();
    const validation = this.formValidation();
    if(validation.correct) {
      this.setState({
        Name: "",
        Email: "",
        pass: "",
        message: "Formularz został wysłany",
        errors: {
          Name: false,
          Email: false,
        }
      })
      console.log("formularz wysłany");
    } else {
      this.setState({
        errors: {
          Name: !validation.userName,
          Email: !validation.email,
        }
      })
    }
}

const formValidation = () => {
    let Name = false;
    let Email = false;
    if(this.state.Name.length > 10 && this.state.Name.lastIndexOf(' ') === -1) {
      Name = true;
    }
    if(this.state.Email.indexOf('@') !== -1 && this.state.Email.lastIndexOf(' ') === -1) {
      Email = true;
    }
   return ({
      Name,
      Email,

    })

  }

const Form = () => {
    const [state, setState] = useState(initialState);


    return (
        <ContainerForm onSubmit={onSubmit} >
            <Input type="text" placeholder="your name" value={state.Name} name="Name" onChange={handleChange} errorInfo={state.errors.Name} message={message} />
            <Input type="email" placeholder="your email" value={state.Email} name="Email" onChange={handleChange} errorInfo={state.errors.Email} />
            <Button type="submit" />
        </ContainerForm>
    )
}

export default Form
