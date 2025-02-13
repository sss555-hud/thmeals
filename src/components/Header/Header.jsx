import React, {useState, useEffect} from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import "./Header.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {

  const [text, setText] = useState('')
  const navigate = useNavigate()
  
  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      navigate(`/search2/${text}`)
      setText('')
    }
    
  }

  return (
    <div className='header'>
      <nav className='nav container'>
        <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
        <div className='nav-right'>
          <Link to="/">
          <button className='home-btn'>Home</button>
          </Link>
          <button className='API-btn'>API</button>
          <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='search' onKeyDown={handleKeyDown}  />
        </div>
        <div className='burger'>
        <HiOutlineMenu className='icon' />
        </div>
      </nav>
    </div>
  )
}

export default Header
