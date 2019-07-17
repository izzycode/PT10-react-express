import React from 'react'
import PropTypes from 'prop-types'

class Projects extends React.Component {

  state = {
    repos: []
  }

  componentDidMount(){
    fetch('/api/repos')
      .then( resp => resp.json() )
      .then( repos => this.setState({ repos }) )
      .catch( err => console.log( err ) )
  }

  render(){
    return(
      <ul>
        {
          this.state.repos.map( repo => {
            return(
              <div>test</div>
            )
          })
        }
      </ul>
    )
  }
}

export default Projects
