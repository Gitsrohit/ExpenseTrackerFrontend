import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { rupees, signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../../context/globalContext';

function Navigation({ active, setActive }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const {totalBalance} = useGlobalContext()

    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="User Avatar" />
                <div className="text">
                    <h2>Rohit</h2>
                    <p style={{
                        color: totalBalance() <= 0 ? 'red' : 'var(--color-green)'
                      }}>
                        <span style={{
                            color:' #FFFFFF'
                        }}>Your Savings:</span> {rupees} {totalBalance()}
                    </p>
                </div>
            </div>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <FaBars />
            </div>
            <ul className={`menu-items ${menuOpen ? 'open' : ''}`}>
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active' : ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    );
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    // background: rgb(61, 0, 0);
    border: 1px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    position: relative; /* Ensure menu items position correctly */

    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2 {
            color: rgb(236, 235, 255);
        }
        p {
            color: rgb(236, 235, 255);
        }
    }
        .your-savings{
        color: var(--color-green);
        }

    .hamburger {
        display: none;
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;
        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgb(236, 235, 255);
            padding-left: 1rem;
            position: relative;
            i {
                color: rgb(236, 235, 255);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }

        &.open {
            display: flex;
            height:40%;
            width:100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }

    .active {
        color: rgb(236, 235, 255); !important;
        i {
            color: rgb(236, 235, 255); !important;
        }
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: rgb(236, 235, 255);
            border-radius: 0 10px 10px 0;
        }
    }

    .bottom-nav {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 0;
        border-top: 1px solid rgb(236, 235, 255);
        li {
            font-weight: 500;
            cursor: pointer;
            color: rgb(236, 235, 255);;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 10%;
        border-radius: 2rem;
        display: flex;
        gap: 0;
        justify-content: center;
         &.open {
            display: flex;
            height:40%;
            width:100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
        .hamburger {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            cursor: pointer;
        }

        .bottom-nav {
            display: none;
        }

        .user-con {
            display: none;
        }

        .menu-items {
            display: ${props => props.menuOpen ? 'flex' : 'none'};
            flex-direction: column;
            li {
                grid-template-columns: 30px auto;
                padding-left: 0.5rem;
                i {
                    font-size: 1rem;
                }
                p {
                    font-size: 1rem;
                }
            }
        }
    }
`;

export default Navigation;
