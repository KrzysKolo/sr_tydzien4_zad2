import React, { Component } from 'react';
import Input from './formComponents/Input';
import TextArea from './formComponents/TextArea';
import Checkbox from './formComponents/Checkbox';
import Radio from './formComponents/Radio';
import Button from './formComponents/Button';
import Header from './formComponents/Header';
import Message from './formComponents/Message';
import styled from 'styled-components';

const ContainerForm = styled.form`
width: 80%;
max-width: 400px;
background: rgb(235, 231, 232);
border: 1px solid rgb(206, 204, 204);
border-radius: 10px;
box-shadow: 1px 5px 6px rgb(189, 185, 189);
margin: 0 auto;
`;

class Form extends Component {

state = {
    Name: '',
    Email: '',
    Description: '',
    accept: false,
    gender: '',
    message: '',
    errors: {
        Name: false,
        Email: false,
        Description: false,
        accept: false,
        gender: false,
        }
}
message = {
    Name_incorrect: "Nazwa musi być dłuższa niż 5 znaków i nie może zawierać spacji",
    Email_incorrect: "Brak @ lub adres zawiera spacje",
    Description_incorrect: "Opis musi zawierać co min 3 znaki i max 150 znaków",
    accept_incorrect: "Nie potwierdziłeś regulaminu",
    gender_incorrect: "Określ płeć",
}

handleChange = e =>{
    const inputName = e.target.name;
    const value = e.target.value;
    this.setState(prev => ({...prev, [inputName]: value}))
}
onSubmit = e => {
    e.preventDefault();
    const validation = this.formValidation();
    if(validation.correct) {
      this.setState({
        Name: "",
        Email: "",
        Description: '',
        accept: false,
        gender: '',
        message: "The form has been submitted!",
        errors: {
          Name: false,
          Email: false,
          Description: false,
          accept: false,
          gender: false,
        }
      })
    } else {
      this.setState({
        errors: {
          Name: !validation.Name,
          Email: !validation.Email,
          Description: !validation.Description,
          accept: !validation.accept,
          gender: !validation.gender,
        }
      })
    }
}

formValidation = () => {
    let Name = false;
    let Email = false;
    let Description = false;
    let accept = false;
    let gender = false;
    let correct = false;
    if(this.state.Name.length > 5) {
      Name = true;
    }
    if(this.state.Email.indexOf('@') !== -1 && this.state.Email.lastIndexOf(' ') === -1) {
      Email = true;
    }
    if(this.state.Description.length >= 3 && this.state.Description.length <= 150) {
      Description = true;
    }
    if(this.state.accept) {
      accept = true;
    }
    if(this.state.gender) {
      gender = true;
    }
    if (Name && Email && Description && accept && gender){
        correct = true;
      }
   return ({
      Name,
      Email,
      Description,
      accept,
      gender,
      correct,

    })

  }

    render () {

    return (
        <ContainerForm onSubmit={this.onSubmit} noValidate>
          <Header />
          <Input type="text" placeholder="your name" value={this.state.Name} name="Name" onChange={this.handleChange} errorInfo={this.state.errors.Name} message={this.message.Name_incorrect} />
          <Input type="email" placeholder="your email" value={this.state.Email} name="Email" onChange={this.handleChange} errorInfo={this.state.errors.Email} message={this.message.Email_incorrect} />
          <Radio />
          <TextArea  rows="6" placeholder="short bio" value={this.state.Description} name="Description" onChange={this.handleChange} errorInfo={this.state.errors.Description} message={this.message.Description_incorrect} />
          <Checkbox  type="checkbox" name="accept" checked={this.state.accept}  onChange={this.handleChange} errorInfo={this.state.errors.accept} message={this.message.accept_incorrect} />
          <Button type="submit" />
          {this.state.message && <Message message={this.state.message} /> }
        </ContainerForm>
    )
    }
}

export default Form
