import React from 'react';
import {connect} from 'react-redux';

import {getSiteInfo}  from '../actions/practicalActions';

import ListComp from './ListComp';

class View extends React.Component{
    constructor(props){
        super(props);
        //alert(JSON.stringify(props.location.state.id));
    }

    componentWillMount(){
        this.props.dispatch(getSiteInfo(this.props.location.state.id));
      }

    render(){
        const {recordInfo} = this.props;
        return(
            <div>
                <br></br>
                <h5 className="headerInfo">Site Information</h5><br></br>
                { typeof recordInfo != 'undefined' ? <ListComp info={recordInfo[0]}/> : null}
            </div>
        );
    }
}

const stateMap = state => {
    return{
      recordInfo : state.siteInfo
    }
  }
  
  export default connect(stateMap)(View);