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
    name: '',
    email: '',
}

const Form = () => {
    const [state, setState] = useState(initialState);

const handleChange = e =>{
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState(prev => ({...prev, [inputName]: value}))
}
const onSubmit = e => {
    e.preventDefault();
    console.log(state);
    setState(initialState);

}
    return (
        <ContainerForm onSubmit={onSubmit} >
            <Input type="text" placeholder="your name" value={initialState.name} name="name" onChange={handleChange} />
            <Input type="email" placeholder="your email" name="email" onChange={handleChange} />
            <Button type="submit" />
        </ContainerForm>
    )
}

export default Form
