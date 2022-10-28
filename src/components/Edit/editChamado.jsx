import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { updateChamado } from './mutation';


export const [upChamado, {}] = useMutation(updateChamado)




