import {
	GET_CONTACTS,
	ERR_CONTACTS,
	SEL_CONTACT
} from '../../../constants';
import config from '../../../config';
import resources from '../resources';

export function getContacts ( page, limit ) {
	return async dispatch => {
		try {
			let result = await resources.getContacts( config.token, 0, 5 );

			dispatch( {
				'type' : GET_CONTACTS,
				result
			} );

		} catch ( error ) {
			console.log( 'Error (getContacts):', error );
			dispatch( {
				'type'  : ERR_CONTACTS,
				'error' : 'Error in retrieving contact list.'
			} );
		}
	};
}

export function selectContact ( contact ) {
	return async dispatch => {
		dispatch( {
			'type' : SEL_CONTACT,
			contact
		} );
	};
}
