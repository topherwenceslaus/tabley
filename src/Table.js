import React, { Component } from "react";
import ReactCollapsingTable from 'react-collapsing-table'

export default class Table extends Component{
        render(){

            const rows = [
                { id: 1, firstName: 'Paul', lastName: 'Darragh', },
                { id: 3, firstName: 'topher', lastName: 'Darragh', },
                { id: 4, firstName: 'AH', lastName: 'Darragh', },
                { id: 5, firstName: 'kido', lastName: 'Darragh', },
              ]
              const columns  = [
                { accessor: 'firstName', label: 'First Name', priorityLevel: 1, position: 1 },
                { accessor: 'lastName', label: 'Last Name', priorityLevel: 2, position: 2},
              ]
            return(<div>
                <h1>My Cool Collapsing Table!</h1>
                <ReactCollapsingTable  rows={ rows } columns={ columns } />
            </div> )
        }
}
