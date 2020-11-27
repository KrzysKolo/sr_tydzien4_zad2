import React from 'react';
import styled from 'styled-components';

const DivError = styled.div`
color: rgb(219, 18, 18);
font-size: 0.7rem;
margin: 5px 10px;
`;

const ErrorMessage = (props) => {
    return (
        <DivError>
            {props.message}
        </DivError>
    )
}

export default ErrorMessage;
