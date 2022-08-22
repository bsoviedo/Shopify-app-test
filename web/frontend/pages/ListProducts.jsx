import React, {useState} from 'react'
import { useAppQuery, useAuthenticatedFetch } from '../hooks'
import { useNavigate } from 'react-router-dom'

export default function ListProducts(){

    let navigate= useNavigate()


    let {data, status, error, isFetching} = useAppQuery({
        url: `/api/products`,
        reactQueryOptions: {
          refetchOnReconnect: false,  
        },    
      }) 
      
      

   // console.log(data, status,error, is   Fetching)



   let number= 0
  return ( 
    <div>
        <button onClick={()=>{navigate('/')}}>
            Back to index
         </button>

         {data ? 
  
        <div style={{'height':'100vh','display':'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center'}}>
            
            <table >
                <thead>
                    <tr>
                        <th style={{'border': '1px black solid', 'backgroundColor': '#04AA6D'}}>
                            Numero
                        </th>
                        <th style={{'border': '1px black solid', 'backgroundColor': '#04AA6D'}}>
                            id
                        </th>
                        <th style={{'border': '1px black solid', 'backgroundColor': '#04AA6D'}}>
                            Titulo item
                        </th>
                        <th style={{'border': '1px black solid', 'backgroundColor': '#04AA6D'}}>
                            Detalle
                        </th>
                    </tr>
                </thead>
        {
            data?.body?.map(({node})=>{
                number ++
                console.log(node.id.split('/')[node.id.split('/').length -1])
                return(          
                        <tr>   
                            <td style={{'border': '1px black solid', 'textAlign': 'center'}}>  {number} </td> 
                            <td style={{'border': '1px black solid', 'textAlign': 'center'}}>  {node.id} </td> 
                            <td style={{'border': '1px black solid', 'textAlign': 'center'}}>   {node.title} </td>
                            <td>
                                <p onClick={()=>{navigate(`/detail/${node.id.split('/')[node.id.split('/').length -1]}`)}} style={{'border': '1px black solid',
                                                                                                                                    'cursor': 'pointer',
                                                                                                                                    'backgroundColor': 'gray', 
                                                                                                                                    'color': 'white'}}>
                                    Mas detalles...</p> 
                            </td>
                        </tr>
                    
                )
                
            })
        }

            </table>

          
        </div>

:

'Cargando....'

}

    
    </div>
  
  
  )
}
