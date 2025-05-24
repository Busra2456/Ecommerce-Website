import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
  const {user , logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() =>{

    })
    .catch(error => console.log(error))
  }


  const NavItem = <div className='text-xl  flex'>
  <li><Link to={'/'}>Home</Link></li>
  <li><Link to={'/About'}>About</Link></li>
  {user?.email? <>
        <li><Link to={'/Bookings'}>My Bookings</Link></li>
        <li><button onClick={handleLogOut}>Log Out</button></li>
       
       </> 
       
       : <li><Link to={'/Login'}>Login</Link></li>}
 
  </div>
  
      return (
            <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                   
                      {NavItem}
                  
               
                </ul>
              </div>
              <Link to={'/'}
              
              >
                 <div className='flex items-center space-x-1 '>
                 <img src={logo} className='w-20 ' alt="" />
                 <h1 className='text-3xl font-semibold  hover:text-black'><span className=' text-[#FF3811]'>E</span>-com<span className=' text-[#FF3811]'>m</span>erce<span className=' text-[#FF3811]' >B</span>D</h1>
                 </div>

              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
               {NavItem}
              </ul>
             
            </div>
            <div className="navbar-end">
              <a className="btn btn-outline hover:bg-[#FF3811]  text-[#FF3811] hover:text-white hover:border-white btn-warning border-[#FF3811] p-5 rounded-sm font-semibold text-xl">Appointment</a>
            </div>
          </div>
      );
};

export default Navbar;