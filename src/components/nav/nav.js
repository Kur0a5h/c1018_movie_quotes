import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import SideNav from './side_nav';
import './nav.scss';

class Nav extends Component {
    state = {
        commonLinks:[
            {
                text: 'Home',
                to: '/'
            },
            {
                text: 'About Us',
                to: '/about'
            },
            {
                text: 'Movie List',
                to: '/movie-list'
            }
        ],
        noAuthLinks: [
            {
                text: 'Sign In',
                to: '/sign-in'
            },
            {
                text: 'Sign Up',
                to: '/sign-Up'
            }
        ],
        authLinks: [
            {
                text: 'Private Movie List',
                to: '/movie-list/private'
            },
            {
                text: 'Movie Quotes',
                to: '/movie-quotes'
            }
        ]
    }
    
    buildLink(link){

        return (
            <li key={link.to}>
                <Link to={link.to}>{link.text}</Link>
            </li>
        )
    }
    handleSignOut = () => {
        console.log('Sign Out Button Clicked');
    }
    renderLinks(){
        const {authLinks, commonLinks, noAuthLinks } = this.state;
        const auth = false;

        let links = [ ...commonLinks ];

        if(auth){
            links = [ ...links, ...authLinks ].map(this.buildLink);

            links.push(
                <li className="sign-out" key="sign-out">
                <button onClick={this.handleSignOut} className="btn green lighten-2">Sign Out</button>
                </li>
            )
        }else{
            links= [ ...links, ...noAuthLinks ].map(this.buildLink);
        }

        return links;

    }

    render(){

        const links = this.renderLinks();

        return (
            <Fragment>
                <nav className="purple lighten-2">
                <Link className="brand-logo" to="/">Movie Quotes</Link>
                <a href="#" data-target="side-nav" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                    {links}
                </ul>
                </nav>
                <SideNav links={links}/>
            </Fragment>
        );
    }
}

export default Nav;
