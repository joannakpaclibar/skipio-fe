import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Card } from 'semantic-ui-react';
import { getContacts } from '../actions';
import Contact from './contact';

export class ContactList extends React.Component {
	componentWillMount () {
		this.props.getContacts();
	}

	render () {
		let contacts = [];

		if ( Object.keys( this.props.contacts ).length  ) {
			contacts = this.props.contacts;
		}

		return (
			<Card.Group>
				{
					contacts.map( ( row, index ) => (
						<Contact
							key={ index }
							id={ row.id }
							imgSrc={ row.avatar_url }
							fullName={ row.full_name }
							mobile={ row.phone_mobile_international }
						/>
					) )
				}
			</Card.Group>
		);
	}
}

export function mapsStateToProps ( state ) {
	return {
		'contacts'   : state.contactReducer.contacts,
		'error'      : state.contactReducer.error,
		'totalPages' : state.contactReducer.totalPages,
		'totalCount' : state.contactReducer.totalCount
	};
}

export function mapsDispatchToProps ( dispatch ) {
	return {
		getContacts () {
			dispatch( getContacts() );
		}
	};
}

export default connect( mapsStateToProps, mapsDispatchToProps )( ContactList );