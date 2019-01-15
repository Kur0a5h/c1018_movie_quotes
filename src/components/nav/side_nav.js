import React, {Component} from 'react';

class SideNav extends Component {
    componentDidMount(){
        M.Sidenav.init(this.navRef);
    }
    render(){
        return (
            <ul ref={element => {this.navRef = element} } className='sidenav pink lighten-2' id='side-nav'>
                {this.props.links}
            </ul>
        );
    }
}

export default SideNav;