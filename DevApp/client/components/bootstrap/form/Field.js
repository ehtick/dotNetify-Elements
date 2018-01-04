import React from 'react';
import styled from 'styled-components';

export const Field = styled.div`
    display: grid;
    grid-template-columns: ${prop => prop.horizontal ? '1fr 4fr' : '1fr'};
    margin-bottom: 1rem;
    -ms-user-select: none; 
    user-select: none; 
`;