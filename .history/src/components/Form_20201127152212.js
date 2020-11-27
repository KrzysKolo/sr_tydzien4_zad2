import React, { Component } from 'react';
import Input from './formComponents/Input'
import Button from './formComponents/Button'
import styled from 'styled-components';

const ContainerForm = styled.form`
width: 80%;
max-width: 500px;
height: 200px;
background: green;
`;

class Form extends Component {

state = {
    Name: '',
    Email: '',
    message:'',
    errors: {
        Name: false,
        Email: false,
        }
}
message = {
    Name_incorrect: "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    Email_incorrect: "Brak @ lub adres zawiera spacje",
}

handleChange = e =>{
    const inputName = e.target.name;
    const type = e.target.type
    if(type === "text" || type === "email") {
        const value = e.target.value;
        this.setState({
            [inputName] : value,
        })
    }
}
onSubmit = e => {
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

formValidation = () => {
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

    render () {

    return (
        <ContainerForm onSubmit={this.onSubmit} >
            <Input type="text" placeholder="your name" value={this.state.Name} name="Name" onChange={this.handleChange} errorInfo={this.state.errors.Name} message={this.message} />
            <Input type="email" placeholder="your email" value={this.state.Email} name="Email" onChange={this.handleChange} errorInfo={this.state.errors.Email} message={this.message} />
            <Button type="submit" />
        </ContainerForm>
    )
    }
}

export default Form
