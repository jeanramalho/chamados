import React from 'react'
// import { gql, useMutation } from '@apollo/client';

// const createTicket = gql`
//       mutation ($title: String, $description: String,  $criticality: String, $creater: String){
//         createChamado(
//           data: {
//             title: $title, 
//             statusTicket: "Backlog", 
//             description: $description, 
//             criticality: $criticality, 
//             creater: $creater}
//         ) {
//           title
//           statusTicket
//           description
//           criticality
//           creater
//         }
// `



function Mutation() {

    let tit = document.getElementById('title').value
    let desc= document.getElementById('description').value
    let creat = document.getElementById('creater').value
    let criti = document.getElementById('crit').value
    const button = document.getElementById('criar')

    return alert('fui clicado')

    // button.addEventListener("click", console.log('clicado')
        
    // //     const { loading, error, data } = useMutation(createTicket, {
    // //         variables: {
    // //           title: tit,
    // //           description: desc,
    // //           criticality: criti,
    // //           creater: creat,
    // //         }
    // //       })
          
    // //       if (loading) return <p>Loading ...</p>
    // //       if (error) return alert(error)
    // //       console.log(data)
    
    // //   return alert('deu certo')
    // )
    
}

export default Mutation
