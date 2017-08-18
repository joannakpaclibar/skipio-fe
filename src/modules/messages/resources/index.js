import requestHelper from '../../../helpers/request-helper';

export default {

	/**
	 * Send SMS
	 *
	 */
	sendMessage ( token, body ) {
		return requestHelper.post( `/api/v2/messages?token=${ token }`, body );
	}
};