import React from 'react';
import {connect} from 'react-redux';

import InfoButton from 'material-ui/svg-icons/action/info';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import {getAllSites}  from '../actions/practicalActions';

import {Link} from 'react-router-dom';


class List extends React.Component{

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.dispatch(getAllSites());
  }

  render(){
    const {fetchedRecords} = this.props;

    return(
      <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>SiteID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
          <TableHeaderColumn>Description</TableHeaderColumn>
          <TableHeaderColumn>Actions</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>

          {
            fetchedRecords.map(record => {
              return <TableRow>
                        <TableRowColumn>{record.id}</TableRowColumn>
                        <TableRowColumn>{record.name}</TableRowColumn>
                        <TableRowColumn>{record.status_label}</TableRowColumn>
                        <TableRowColumn>{record.description}</TableRowColumn>
                        <TableRowColumn>
                        <Link to={{
                            pathname: '/view',
                            state: { id:  record.id}
                            }}> View
                            </Link>                        
                      </TableRowColumn>
                    </TableRow>
            })
          }
      </TableBody>
    </Table>
    );
  }
}

const stateMap = state => {
  return{
    fetchedRecords : state.records
  }
}

export default connect(stateMap)(List);