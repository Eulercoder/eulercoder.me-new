import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
  align-self: center;
  margin-left: 50px;
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

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      borderBottom: '1px #ccc solid',
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
        {['blogs', 'projects'].map(item => (
          <NavLink
            key={item}
            to={`/${item}/`}
            getProps={props =>
              props.isCurrent && {
                style: { borderBottom: '4px solid rebeccapurple' },
              }
            }
          >
            {item.toUpperCase()}
          </NavLink>
        ))}
      </NavBar>
    </div>
  </div>
)

export default Header
