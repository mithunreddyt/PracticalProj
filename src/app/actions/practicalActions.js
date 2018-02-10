
import axios from 'axios';
import thunk from 'redux-thunk';


export function handleSitesResponse(response){
    return{
        type:'FETCH_RECORDS',
        payload:{
            data:response.data
        }
    }
}

export function handleSiteInfoResponse(response){
  return{
      type:'FETCH_RECORD',
      payload:{
          data:response.data
      }
  }
}

export function getSiteInfo(id){
    return dispatch => {
        axios.get('https://lgapi-us.libapps.com/1.1/guides/'+id+'?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6')
        .then(function (response) {
             dispatch(handleSiteInfoResponse(response));
        })
        .catch(function (error) {
              console.log(error);
        });
   } 
}

export function getAllSites(){
   return dispatch => {
        axios.get('https://lgapi-us.libapps.com/1.1/guides?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6')
        .then(function (response) {
             dispatch(handleSitesResponse(response));
        })
        .catch(function (error) {
              console.log(error);
        });
   } 
}