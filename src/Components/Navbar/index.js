import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'

import { Drawer, Button,Carousel } from 'antd';

function onChange(a, b, c) {
	console.log(a, b, c);
  }
  
  const contentStyle = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
  };
  
class Navbar extends Component {
	state = {
		current: 'mail',
		visible: false
	}
	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<nav className="menuBar">
				<div className="logo">
				<img alt="logo" height="50px" src="http://www.uwu.ac.lk/wp-content/uploads/logo_uwu.jpg"/>
				</div>
				<div className="menuCon">
					<div className="leftMenu">
						<LeftMenu />
					</div>
					{/* <div className="rightMenu">
						<RightMenu />
					</div> */}
					<Button className="barsMenu" type="primary" onClick={this.showDrawer}>
						<span className="barsBtn"></span>
					</Button>
					<Drawer
						title="Basic Drawer"
						placement="right"
						closable={false}
						onClose={this.onClose}
						visible={this.state.visible}
					>
						{/* <LeftMenu />
						<RightMenu /> */}
					</Drawer>

				</div>
				
			</nav>
			
		);
	}
}

export default Navbar;
