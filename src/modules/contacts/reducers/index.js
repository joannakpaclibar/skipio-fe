import {
	GET_CONTACTS,
	ERR_CONTACTS,
	SEL_CONTACT
} from '../../../constants';

const contactDefaultState = {
	'selected'   : {},
	'error'      : null,
	'contacts'   : []
};

export default function contactReducer ( state = contactDefaultState, action ) {
	switch ( action.type ) {
		case GET_CONTACTS:
			return {
				'error'      : null,
				'contacts'   : action.result.data
			}

		case ERR_CONTACTS:
			return {
				...state,
				'error' : action.error,
			}

		case SEL_CONTACT:
			return {
				...state,
				'error'    : null,
				'selected' : action.contact
			}

		default:
			return state;
	}
}