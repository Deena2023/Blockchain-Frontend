import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({ title ,toggle,showAddTask}) => {
  const loaction= useLocation()
  return (
  <header className='header'>
    <h1 >{title}</h1>
    {loaction.pathname === '/' &&(<Button 
    color={showAddTask ?'red':'green'} 
    text={showAddTask?'Close': 'Add'} 
    toggleAddtask={toggle}/>)}
    
  </header>
  )
}

Header.propTypes = {
title: PropTypes.string,
}

export default Header