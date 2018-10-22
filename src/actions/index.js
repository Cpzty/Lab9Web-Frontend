import axios from 'axios';
export function createChisme(){
  return(dispatch)=>{
    return axios.post("http://127.0.0.1:8000/chismes/")
  }
}

export function obtainChismes(){
  return(dispatch)=>{
    return axios.get("http://127.0.0.1:8000/chismes/")
  }
}

export function modifyChismes(){
  return(dispatch)=>{
    return axios.put("http://127.0.0.1:8000/chismes/(?P<pk>[0-9]+)/$")
  }
}

export function deleteChismes(){
  return(dispatch)=>{
    return axios.delete("http://127.0.0.1:8000/chismes/(?P<pk>[0-9]+)/$")
  }
}


let nextChismeid=0;
export const addChisme = (titulo,descripcion)=>({
  type: 'ADD_CHISME',
  id: nextChismeid++,
  payload: {
  titulo,
  descripcion,  
  }
  
});

export const modifyChisme = descripcion =>({
  type: 'MODIFY_CHISME',
  descripcion
});

export const deleteChisme = id =>({
  type: 'DELETE_CHISME',
  id
});