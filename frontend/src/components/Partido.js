import React from 'react'
import { useParams } from 'react-router-dom'

export default function Partido() {
  let params = useParams()

  document.title = 'Nosso Brasil'

  return (
    <div className="Partido">
      <div className="container">Sucess!! {params.id}</div>
    </div>
  )
}
