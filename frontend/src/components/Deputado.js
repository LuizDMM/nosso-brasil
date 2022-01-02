import React from 'react'
import { useParams } from "react-router-dom";

class Partido extends React.Component {
    params = useParams();
    
    render () {
        document.title = "Nosso Brasil"
        
        return (
            <div className="Partido">
                <div className="container">
                    params.id
                </div>
            </div>
        )
    }
}

export default Partido;