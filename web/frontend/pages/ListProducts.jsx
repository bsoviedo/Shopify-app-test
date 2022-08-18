import React, {useState} from 'react'
import { useAppQuery, useAuthenticatedFetch } from '../hooks'
import { useNavigate } from 'react-router-dom'

export default function ListProducts(){

    let navigate= useNavigate()


    let {data, status, error, isFetching} = useAppQuery({
        url: `/api/products`,
        reactQueryOptions: {
          /* Disable refetching because the QRCodeForm component ignores changes to its props */
          refetchOnReconnect: false,  
        },    
      }) 
      
      

   // console.log(data, status,error, is   Fetching)

   let number= 0
  return ( 
    <div style={{'height':'100vh','display':'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center'}}>
         <button onClick={()=>{navigate('/')}}>
            Back to index
         </button>
         
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
            return(          
                    <tr>   
                        <td style={{'border': '1px black solid', 'textAlign': 'center'}}>  {number} </td> 
                        <td style={{'border': '1px black solid', 'textAlign': 'center'}}>  {node.id} </td> 
                        <td style={{'border': '1px black solid', 'textAlign': 'center'}}>   {node.title} </td>
                        <td>
                            {/*   */}
                        </td>
                    </tr>
                
            )
            
        })
    }

        </table>

    </div>
  
  )
}
