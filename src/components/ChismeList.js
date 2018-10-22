import React from 'react'
import PropTypes from 'prop-types'
import Chisme from './Chisme'

const ChismeList = ({chismes, addChisme, modifyChisme, deleteChisme}) =>(
  <ul>
{
  chismes.map(chisme=>
  <Chisme
    key={chisme.id}
    {...chisme}
    onClick1={()=>addChisme(chisme.titulo,chisme.descripcion)}
    onClick2={()=>modifyChisme(chisme.descripcion)}
    onClick3={()=>deleteChisme(chisme.id)}
    />
  )
}
  </ul>
)

ChismeList.propTypes = {
  chismes: PropTypes.arrayOf (
  PropTypes.shape({
    id:          PropTypes.number.isRequired,
    descripcion: PropTypes.string.isRequired,
    titulo:      PropTypes.string.isRequired,
  }).isRequired
  ).isRequired,
  addChisme: PropTypes.func.isRequired,
  modifyChisme: PropTypes.func.isRequired,
  deleteChisme: PropTypes.func.isRequired,
}

export default ChismeList;