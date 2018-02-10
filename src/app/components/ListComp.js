import React from 'react';

export default class ListComp extends React.Component{
    
    render(){
        return(
            <div>
                {
                 this.props.info ?   Object.keys(this.props.info).map(key => {
                        return <div className="lableContent"><label className="keyContnet">{key} </label> <label className="valueContent">{this.props.info[key]}</label></div>
                    }) : null
                }
            </div>
        );
    }
}
