import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { menu, lang } from "./cms-data/menu-data";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <Link to="/" className='logo'></Link>
          <nav>
            <Menu />
            <MobileMenu />
            <Language />

          </nav>
        </div>
      </header>
    )
  }
}

class Language extends Component {
  render() {
    return (
      <a href={lang.link} title={lang.link} className='button lang-button small-button'>{lang.name}</a>
    )
  }
}

class Menu extends Component {
  render() {
    return (
      <ul id='menu' className="menu">
        {menuLinks}
      </ul>
    )
  }
}

class MobileMenu extends Component {
  state = {
    isOpen: false,
  }

  render() {
    return (
      <>
        <ul onClick={() => this.setState({ isOpen: false })} className={this.state.isOpen ? 'mobile-menu menu-open' : 'mobile-menu'}>
          {menuLinks}
        </ul>
        <button onClick={() => this.setState({ isOpen: !this.state.isOpen })} className={this.state.isOpen ? 'burger open' : 'burger'}>
          <div className="bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </ button>
      </>
    )
  }
}


export class MenuLink extends Component {
  render() {
    return (
      <Link to={this.props.link}><li>{this.props.name}</li></Link>
    )
  }
}

const menuLinks = menu.map((element, index) =>
  <MenuLink key={index} link={element.link} name={element.name} />
);


export { menuLinks };