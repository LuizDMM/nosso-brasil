import React from 'react'
import { useParams } from 'react-router-dom'

export default function Deputado() {
  let params = useParams()

  document.title = 'Nosso Brasil'

  return (
    <div className="Partido">
      <div className="container">{params.id}</div>
    </div>
  )
}
