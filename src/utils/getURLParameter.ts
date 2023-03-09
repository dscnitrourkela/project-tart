const getURLparameter = (paramName: string, URL = window.location.href): string | null => {
	const regex = new RegExp(`[\\?&]&${paramName}=([^&#]*)`);
	const results = regex.exec(URL);
	if (results && results.length > 0) {
		return decodeURIComponent(results[1].replace(/\+/g, ' '));
	}
	return '';
};

export default getURLparameter;
