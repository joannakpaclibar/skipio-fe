import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Grid, Card, Form, TextArea, Button } from 'semantic-ui-react';

import { sendMessage } from '../actions';

export class Messenger extends React.Component {
	componentWillMount () {
		this.setState( {
			'message' : ''
		} );
	}

	handleSend = ( id, e ) => {
		let body = {
			'recipients' : [ `contact-${ id }` ],
			'message'   : {
				'body' : this.state.message
			}
		}

		if ( !id ) {
			return;
		}

		this.props.sendMessage( body );
	}

	updateMessage = ( e ) => {
		let msg = e.target.value;

		if ( msg.length > 160 || msg.length === 0 ) {
			return;
		}

		this.setState( {
			'message' : e.target.value
		} );
	}

	render () {
		let current = this.props.selected || {};
		let details = '';

		if ( current.id ) {
			details = `${ current.name } <${ current.mobile }>`;
		}

		return (
			<Grid centered columns={2}>
				<Grid.Column>
					<Card fluid>
						<Card.Content header={ `To: ${ details }` } />
						<Card.Content>
							<Form>
								<Form.Field
									control={ TextArea }
									rows="15"
									value={ this.state.message }
									onChange={ this.updateMessage }
								/>
							</Form>
						</Card.Content>
						<Card.Content extra className="center">
							<Button primary fluid onClick={ this.handleSend.bind( this, current.id ) }>Send</Button>
						</Card.Content>
					</Card>
				</Grid.Column>
			</Grid>
		);
	}
}

export function mapsStateToProps ( state ) {
	return {
		'selected' : state.contactReducer.selected
	};
}

export function mapsDispatchToProps ( dispatch ) {
	return {
		sendMessage ( body ) {
			dispatch ( sendMessage( body ) );
		}
	};
}

export default connect( mapsStateToProps, mapsDispatchToProps )( Messenger );