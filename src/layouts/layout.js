import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import Header from './header';
import Messenger from '../modules/messages/components/messenger';
import Snackbar from 'material-ui/Snackbar';

export class Layout extends React.Component {
	componentWillMount () {
		this.setState( {
			'open' : false
		} );
	}

	componentWillReceiveProps ( nextProps ) {
		this.setState( {
			'open' : true
		} );
	}

	handleRequestClose = () => {
		this.setState( {
			'open' : false
		} );
	}

	render () {
		return (
			<div>
				<Header />
				<Grid columns={2} divided>
					<Grid.Row className="full-height padding-left">
						<Grid.Column width={4}>
							<br />
							{ this.props.children }
						</Grid.Column>
						<Grid.Column width={12}>
							<br />
							<Messenger />
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<Snackbar
					anchorOrigin={ { 'vertical' : 'top', 'horizontal' : 'right' } }
					open={ ( this.props.message && this.state.open ) }
					SnackbarContentProps={{
						'aria-describedby' : 'message-id',
					}}
					message={ this.props.message }
					onRequestClose={ this.handleRequestClose }
				/>
				<Snackbar
					anchorOrigin={ { 'vertical' : 'top', 'horizontal' : 'right' } }
					open={ ( this.props.error && this.state.open ) }
					SnackbarContentProps={{
						'aria-describedby' : 'message-id',
					}}
					message={ this.props.error }
					onRequestClose={ this.handleRequestClose }
				/>
			</div>
		);
	}
}

export function mapsStateToProps ( state ) {
	return {
		'message' : state.messageReducer.message,
		'error'   : state.contactReducer.error
	};
}

export function mapsDispatchToProps ( dispatch ) {
	return {
	};
}

export default connect( mapsStateToProps, mapsDispatchToProps )( Layout );