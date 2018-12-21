import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
  align-self: center;
  margin-left: 50px;
  @media (max-width: 1024px) {
    display:none;
  }
`

const NavLink = styled(Link)`
  color: #666;
  text-decoration: none;
  margin-right: 20px;
  padding: 20px 5px;
  font-weight: light;
  font-family: 'Roboto', sans-serif;
  font-size: 0.7937rem;
  border-bottom: 4px solid transparent;
  transition: all 0.3s ease-in;
  &:hover {
    border-bottom: 4px solid #ba8de6;
  }
`
const MobileNavLink = styled(Link)`
  display: flex;
  color: #663399;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`

const MenuIcon= styled.div`
 
  display: flex;
  position:absolute;
  flex-direction:column;
  top:8px;
  right:30px;
  justify-content:flex-end;
  padding: 14px;
  align-items:center;
  z-index: 99999;
 
`

const MenuLine=  styled.div`
 background:white;
 border: 2px solid #663399;
 padding: 3px;
 width: 40px;
`
const Label = styled.label`
   display:none;
   @media (max-width:1024px) {
    &.menulabel {
      display:block;
    }
`

const CheckBoxMenu = styled.input`
&:checked ~ .mobilenavbar {
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  background:white;
  text-align:center;
  padding: 60px 0px;
  position:fixed;
  top:0px;
  width:100%;
  height:100%;
  z-index: 99998;
  }

  &:checked ~ .menulabel {
    display:block;
    @media (max-width:1024px) {
      &.menulabel {
        display:block;
      }
    }
   }
  
`

const MobileNavbar = styled.div`
    display:none;
`

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      borderBottom: '1px #ccc solid',
      position: 'fixed',
      width: '100vw',
      zIndex: 100,
    }}
  >
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        height: 66,
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'rebeccapurple',
            textDecoration: 'none',
            padding: '1rem',
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      <NavBar>
        {[
          { name: 'blogs', link: 'blogs' },
          { name: 'projects', link: 'projects' },
          { name: 'about us', link: '/aboutus'},
          { name: 'contact us', link: '/contactus'},
          { name: 'jobs', link: '/jobs'},
          { name: 'work with us', link: '/' },
        ].map(item => (
          <NavLink
            key={item.name}
            to={`/${item.link}/`}
            getProps={props =>
              props.isCurrent && {
                style: { borderBottom: '4px solid rebeccapurple' },
              }
            }
          >
            {item.name.toUpperCase()}
          </NavLink>
        ))}
      </NavBar>
      <CheckBoxMenu type="checkbox" id="showmenu" style={{display:"none"}} className="showmenu"/>
     <Label for="showmenu" className="menulabel">
      <MenuIcon className="hamburger"> 
          <MenuLine/>
          <MenuLine/>
          <MenuLine/>
      </MenuIcon> 
      </Label>  
     <MobileNavbar className="mobilenavbar">
          {[
            { name: 'blogs', link: 'blogs' },
            { name: 'projects', link: 'projects' },
            { name: 'contact us', link: 'contactus' },
            { name: 'about us', link: 'aboutus' },
            { name: 'jobs', link: 'jobs' },
            { name: 'work with us', link: '/' },
          ].map(item => (
            <MobileNavLink key={item.name} to={`/${item.link}/`}>
              {item.name.toUpperCase()}
            </MobileNavLink>
          ))}
    </MobileNavbar>
    </div>
  </div>
)

export default Header
