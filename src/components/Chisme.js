import React from 'react'
import PropTypes from 'prop-types'

const Chisme = ({onClick1,onClick2,onClick3,titulo,descripcion})=>(
<ul>
  <li>titulo</li>
  <li>descripcion</li>
  <li onClick={onClick1}>
  Add Chisme</li>
  <li onClick={onClick2}>
  Modify Chisme</li>
  <li onClick={onClick3}>
  Delete Chisme</li>
</ul>
)

Chisme.propTypes = {
  onClick1: PropTypes.func.isRequired,
  onClick2: PropTypes.func.isRequired,
  onClick3: PropTypes.func.isRequired,
  titulo:   PropTypes.string.isRequired,
  descripcion:PropTypes.string.isRequired,
}

export default Chisme;