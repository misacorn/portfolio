import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { compose, withStateHandlers, lifecycle } from 'recompose'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'

const Header = ({ sidebar, toggle, isHomePage }) => (
	<StyledHeader isHomePage={isHomePage}>
		<Overlay sidebar={sidebar} onClick={toggle} />
		<Navbar />
		<Hamburger isHomePage={isHomePage} sidebar={sidebar} toggle={toggle} />
		<Sidebar sidebar={sidebar} toggle={toggle} />
	</StyledHeader>
)

const StyledHeader = styled.div`
	background: #fff;
	width: 100%;
	z-index: 1;
	border-bottom: .01em solid rgb(204, 204, 204);
	margin-bottom: -3rem;
	${({ isHomePage }) => isHomePage && `
		position: fixed;
		margin-bottom: unset;
	`}
`

const Overlay = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, .7);
	width: 100%;
	height: 100%;
	display: none;
	transition: .4s;
	${({ sidebar }) => sidebar && `
		display: block;
		z-index: 4;	
	`}
`

const enhance = compose(
	withStateHandlers(
		() => ({ sidebar: false, isHomePage: false }),
		{
			toggle: ({ sidebar }) => () => ({ sidebar: !sidebar }),
			setHomePage: ({ isHomePage }) => () => ({ isHomePage: !isHomePage })
		}
	),
	withRouter,
	lifecycle({
		componentDidMount() {
			if (this.props.location.pathname === '/') this.props.setHomePage()
		}
	})
)

export default enhance(Header)
