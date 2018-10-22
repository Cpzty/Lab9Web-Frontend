const chismes = (state=[],action)=>{
  switch(action.type){
    case 'ADD_CHISME':
      return [
        ...state,
        {
          id:action.id,
          titulo: action.titulo,
          descripcion: action.descripcion,
        }
      ];
    case 'MODIFY_CHISME':
      return [
        ...state,
        {
          descripcion: action.descripcion,
        }
      ];
    case 'DELETE_CHISME':
        const newState = [...state];
        delete newState[action.id];
        return newState;
    default:
      return state;
  }
}

export default chismes;