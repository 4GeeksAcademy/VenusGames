import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Context } from '../store/appContext.js';
import pokeballiconVenus from "../../img/pokeballicon03venus.png";
import defaultAvatar from "../../img/defaultAvatar.png";
import "../../styles/navbar.css";
import SearchBar from "../pages/SearchBar.jsx";
import Logout from './Logout.jsx';


export const Navbar = () => {
	const { store } = useContext(Context);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const navigate = useNavigate();

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const closeDropdown = () => {
		setIsDropdownOpen(false);
	};

	const handlerEdit = async (currentUser) => {
		navigate("/CustUser", { state: { currentUser: currentUser } });
	}

	const handleSearch = (searchTerm) => {
		// Lógica para manejar la búsqueda
		console.log("Search term:", searchTerm)
		const filteredPokemons = getStore().pokemon.filter((pokemon) =>
			pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		console.log("Filtered Pokemons:", filteredPokemons);
	};

	return (
		<nav className="navbar navbar-dark d-flex justify-content-space-between mainHeader">

			{store.currentUser ?

				<div className='logouser-drop'>
					<div className='me-4'>
						<h5>Welcome {store.currentUser.full_name}</h5>
					</div>
					<div className='cont-btns'>
						<div className="dropdown">
							<button
								className={`dropdown-btn dropdown-toggle ${isDropdownOpen ? 'active' : ''}`}
								type="button"
								onClick={toggleDropdown}
							>
								Menu&nbsp;
							</button>
							<ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} onBlur={closeDropdown}>
								<li><Link to={"/CustUser"}>Edit User</Link></li>
								<li><Link to="/demo">---</Link></li>
								{store.currentUser.admin && (
									<li><Link to="/listUsers">All Users</Link></li>
								)}
								<hr />
								<li>
									<Logout />
								</li>
							</ul>
						</div>

					</div>
					<div>
						<button className='user-btn' onClick={() => handlerEdit(store.currentUser)}>
							<img className="w-100 h-100 rounded-circle" src={store.currentUser?.avatar ? store.currentUser.avatar : defaultAvatar} alt="" />
						</button>
					</div>


				</div>

				:

				<div className="Firstbutton">
					<Link to="/login" style={{ textDecoration: "none" }}>
						<button className="button" id="navbarButton"><i className="fa-solid fa-user-astronaut loginIcon"></i>  LogIn  </button>
					</Link>
				</div>

			}

			<div className="web-name" >
				<Link to="/">
					<figure className="header__logo">
						<img src={pokeballiconVenus} style={{ height: "65px" }} />
					</figure>
					<span className="navbar-brand mb-0 h1" id="Poketitle">Pokemon Venus</span>
				</Link>
			</div>

			<div className="ml-auto">
				<div className="secondButton">
					<Link to="/PokeMarket" style={{ textDecoration: "none" }}>
						<button className='primary'>PokeMarket</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
