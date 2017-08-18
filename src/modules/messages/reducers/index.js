import {
	SEND_MESSAGE,
	ERR_MESSAGE
} from '../../../constants';

const messageDefaultState = {
	'message' : '',
};

export default function messageReducer ( state = messageDefaultState, action ) {
	switch ( action.type ) {
		case SEND_MESSAGE:
			return {
				'message' : 'Message sent successfully',
			}

		case ERR_MESSAGE:
			return {
				'message' : action.error,
			}

		default:
			return state;
	}
}