import React, {useState, useCallback} from 'react'
import { useAppQuery, useAuthenticatedFetch } from '../hooks'
import { useNavigate } from 'react-router-dom'
import {Page, Button, DataTable, Card, Frame} from '@shopify/polaris'

export default function ListProducts(){

    let navigate= useNavigate()


    let {data, status, error, isFetching} = useAppQuery({
        url: `/api/products`,
        reactQueryOptions: {
          refetchOnReconnect: false,  
        },    
      }) 

      
      const rows = data?.body?.map(({node}, id)=>{

        let arr = Object.values(node)

        arr.splice(0,0, id +1)

        arr.splice(3,0,  <Button style={{'cursor': 'pointer'}}  onClick={()=>{navigate(`/detail/${node.id.split('/')[node.id.split('/').length -1]}`)}}>
                           +
                        </Button>
                        ) 

        return arr
      })


    
  return ( 
<Frame>
    <Page title="List products">
    {/* <Card sectioned>
      <Button onClick={() => alert('Button clicked!')}>Example button</Button>
    </Card> */}
 
        <Button onClick={()=>{navigate('/')}}>
            Back to index
         </Button>

         {data ? 
  
        <div style={{'height':'100vh','display':'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center'}}>
          
          <Card>

          <DataTable
          columnContentTypes={[
            'numeric',
            'text',
            'text',
          ]}
          headings={[
            'Numero',
            'id',
            'Nombre',
           
          ]}
          rows={rows}
          totals={['', '', '']}
          hasZebraStripingOnData={true}
        />

        </Card>
          {/*   <table >
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

            </table> */}

          
        </div>

:

'Cargando....'

}

    
   

    </Page>
  
    </Frame>
  
  )
}
