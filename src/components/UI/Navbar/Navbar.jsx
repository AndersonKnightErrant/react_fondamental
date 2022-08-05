import React, { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__link'>
				<Link style={{marginRight: "10px"}} to='/about'>О нас</Link>
        <Link to='/posts'>Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;
