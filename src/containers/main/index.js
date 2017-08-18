import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../layouts/layout';
import ContactList from '../../modules/contacts/components/contact-list';

export class Main extends React.Component {
	render () {
		return (
			<Layout>
				<ContactList />
			</Layout>
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

export default connect( mapsStateToProps, mapsDispatchToProps )( Main );