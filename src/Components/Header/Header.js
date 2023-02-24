import React from 'react';
import './Header.css';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import { Link } from 'react-router-dom';
const Header = () => {
  var menu = ""
  if(window.screen.width<768){
    menu =<>
        <Link to="/"><img className='header_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /></Link>
    <div className="headerRight" style={{justifyContent:"space-between"}}>
      
   

     <Menu menuButton={<MenuButton>Menu</MenuButton>}>
    <MenuItem><Link to="/movies/popular" style={{textDecoration:"none"}}> <span>Popular Movies</span></Link></MenuItem>
    <MenuItem><Link to="/movies/top_rated" style={{textDecoration:"none"}}> <span>Top Rated Movies</span></Link></MenuItem>
    <MenuItem><Link to="/movies/upcoming" style={{textDecoration:"none"}}> <span>Upcoming Movies</span></Link></MenuItem>
    <MenuItem><Link to="/tvs/popular" style={{textDecoration:"none"}}> <span>Popular Tv-Shows</span></Link></MenuItem>
    <MenuItem><Link to="/tvs/top_rated" style={{textDecoration:"none"}}> <span>Top Rated Tv-Shows</span></Link></MenuItem>
    <MenuItem><Link to="/tvs/on_the_air" style={{textDecoration:"none"}}> <span>On The Air Tv-Shows</span></Link></MenuItem>
  </Menu>
      </div>
    </>
  }else{
   menu = <>
   <div className="headerLeft">
      
   
        <Link to="/"><img className='header_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /></Link>

    <Link to="/movies/popular" style={{textDecoration:"none"}}> <span>Popular Movies</span></Link>
    <Link to="/movies/top_rated" style={{textDecoration:"none"}}> <span>Top Rated Movies</span></Link>
    <Link to="/movies/upcoming" style={{textDecoration:"none"}}> <span>Upcoming Movies</span></Link>
    <Link to="/tvs/popular" style={{textDecoration:"none"}}> <span>Popular Tv-Shows</span></Link>
    <Link to="/tvs/top_rated" style={{textDecoration:"none"}}> <span>Top Rated Tv-Shows</span></Link>
    <Link to="/tvs/on_the_air" style={{textDecoration:"none"}}> <span>On The Air Tv-Shows</span></Link>

      </div>
    </>
  }
  return (
    <div className='header'>
        {menu}
    </div>
  );
}

export default Header;
