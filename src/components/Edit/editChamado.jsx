import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { updateChamado } from './mutation';

function UpdateTask(){

    const [upChamado, {}] = useMutation(updateChamado)
}



export default UpdateTask

