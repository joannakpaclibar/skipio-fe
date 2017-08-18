import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import GroupIcon from 'material-ui-icons/Group';

export class Header extends React.Component {
	render () {
		return (
			<AppBar position="static">
				<Toolbar>
					<IconButton color="contrast" aria-label="Menu">
						<GroupIcon />
					</IconButton>
					<Typography type="title" color="inherit">
						Contacts
					</Typography>
				</Toolbar>
			</AppBar>
		);
	}
}

export function mapsStateToProps ( state ) {
	return {
	};
}

export function mapsDispatchToProps ( dispatch ) {
	return {
	};
}

export default connect( mapsStateToProps, mapsDispatchToProps )( Header );