

export default function reducer(state ={
  records : [],
  siteInfo :{}
},action){
    switch(action.type){
        case 'FETCH_RECORDS':{
            state = {...state,records:action.payload.data};
            break;
        }
        case 'FETCH_RECORD':{
            state = {...state,siteInfo:action.payload.data};
            break;
        }
    }

    return state;
}