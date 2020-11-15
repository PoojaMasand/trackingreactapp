import React from 'react';
import { useTable } from "react-table";
/*
This is used to show the package related important information to the user
*/

export default function Cards(props)
{   
    
    const data = React.useMemo(
        () => [
          {
            col1: 'Sender',
            col2: props.items.sender,
          },
          {
            col1: 'Status',
            col2: props.items.status,
          },
          {
            col1: 'Location Name',
            col2: props.items.location_name,
          },
          {
            col1: 'Expected Time',
            col2: props.items.eta,
          },
        ],
        []
      )

      const columns = React.useMemo(
        () => [
          {
            Header: 'Parcel Id ',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: props.items.parcel_id,
            accessor: 'col2',
          },
          
        ],
        []
      )
 
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })
    
      
      
    return(
          
        <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 1px black',
                    background: 'aliceblue',
                    color: 'brown',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '16px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table> 
           
    );

}