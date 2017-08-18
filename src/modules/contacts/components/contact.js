import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Card, Image } from 'semantic-ui-react';

import { selectContact } from '../actions';

export class Contact extends React.Component {

	handleClick = () => {
		let contact = {
			'id'     : this.props.id,
			'name'   : this.props.fullName,
			'mobile' : this.props.mobile
		}

		this.props.selectContact( contact );
	}

	render () {
		return (
		<Card fluid link onClick={ this.handleClick }>
			<Card.Content>
				<Image floated='right' size='mini' src={ this.props.imgSrc } />
				<Card.Header>
					{ this.props.fullName }
				</Card.Header>
				<Card.Meta>
					{ this.props.mobile }
				</Card.Meta>
				<Card.Description>
					Address here 
				</Card.Description>
			</Card.Content>
		</Card>
		);
	}
}

export function mapsStateToProps ( state ) {
	return {
	};
}

export function mapsDispatchToProps ( dispatch ) {
	return {
		goTo ( url ) {
			dispatch( push( url ) );
		},

		selectContact ( contact ) {
			dispatch( selectContact( contact ) );
		}
	};
}

export default connect( mapsStateToProps, mapsDispatchToProps )( Contact );