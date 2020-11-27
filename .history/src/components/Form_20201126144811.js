import React from 'react';
import Input from './formComponents/Input'
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
            <Input type="text" placehlder="aaa" name="Name" />
        </Container>
    )
}

export default Form
