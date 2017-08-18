import {
	ERR_MESSAGE,
	SEND_MESSAGE
} from '../../../constants';
import config from '../../../config';
import resources from '../resources';

export function sendMessage ( body ) {
	return async dispatch => {

		resources
		.sendMessage( config.token, body )
		.then( () => {
			dispatch( {
				'type' : SEND_MESSAGE
			} );
		} )
		.catch( ( error ) => {
			console.log( 'Error (sendMessage):', error );
			dispatch( {
				'type'  : ERR_MESSAGE,
				'error' : 'Error in sending SMS'
			}  );
		} );
	};
}