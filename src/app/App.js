import React from 'react';

import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/Header';
import MainContainer from './components/MainContainer';

const muiTheme = getMuiTheme({
    palette: {
      textColor: cyan500,
    },
    appBar: {
      height: 50,
    },
  });

export default class App extends React.Component{
    render(){
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="container">
                    <div className="row">
                        <Header />
                    </div>
                
                    <div className="row">
                        <MainContainer />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}