import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

export class Department extends Component{
    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    componentDidMount(){
        this.refreshList();
      // this.refreshList1();
    }

    refreshList(){
            fetch('http://localhost:65094/api/department')
            .then(response=>response.json())
            .then(data=>{
                this.setState({deps:data});
            })

    }

    refreshList1(){
        this.setState({
            deps:[{"DepartmentID":1,"DepartmentName":"IT"},
        {"DepartmentID":2,"DepartmentName":"Support"}]
        })
    }


    render(){
        const {deps}=this.state;

        return(
            <Table striped bordered hover variant="dark" size="sm">
            <thead>
              <tr>
                <th>DepartmentID</th>
                <th>DepartmentName</th>
              </tr>
            </thead>
            <tbody>
                {
                    deps.map(dep=>
                        <tr key={dep.departmentid}>
                        <td>{dep.departmentid}</td>
                        <td>{dep.departmentname}</td>
                        </tr>)
                }
            </tbody>
          </Table>
        )
    }
}

