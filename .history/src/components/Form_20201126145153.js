import React from 'react';
import Input from './formComponents/Input'
import Button from './formComponents/Button'
import styled from 'styled-components';

const Container = styled.section`
width: 80%;
max-width: 500px;
height: 200px;
background: green;
`;

const Form = () => {
    return (
        <Container>
            <Input type="text" placeholder="aaa" name="Name" />
            <Button />
        </Container>
    )
}

export default Form
