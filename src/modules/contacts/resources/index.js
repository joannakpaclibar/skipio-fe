import requestHelper from '../../../helpers/request-helper';

export default {

	/**
	 * Get contacts
	 *
	 */
	getContacts ( token, page, limit ) {
		return requestHelper.get( `/api/v2/contacts?token=${ token }&page=${ page }&per=${ limit }` );
	}
};