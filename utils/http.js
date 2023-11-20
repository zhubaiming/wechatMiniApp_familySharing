'use strict';

import { runAsyncHttpRequest } from './util';

// var CryptoJS = require("./crypto-js-4.0.0.min");

class Http {
	/**
	 * method	string	GET	否	HTTP 请求方法	
		合法值	说明
		OPTIONS	HTTP 请求 OPTIONS
		GET	HTTP 请求 GET
		HEAD	HTTP 请求 HEAD
		POST	HTTP 请求 POST
		PUT	HTTP 请求 PUT
		DELETE	HTTP 请求 DELETE
		TRACE	HTTP 请求 TRACE
		CONNECT	HTTP 请求 CONNECT
	 */
	static async get(url, data) {
		try {
			url += "?";
			for (var k in data) {
				url += `${k}=${data[k]}&`;
			}
			const res = await runAsyncHttpRequest(url, 'GET');

			console.log(res)
			// return { status: res.statusCode, code: res.data.code, result: res.data.result, message: 'success', errCode: 0 };
			// return res.data.result;
			return res.data;
		} catch (e) {
			return { status: res.statusCode, code: 0, result: {}, message: e.errMsg, errCode: e.errno };
		}
	}

	static async post(url, data, header = {}) {
		try {
			const res = await runAsyncHttpRequest(url, 'POST', data, header);

			// return { status: res.statusCode, code: res.data.code, result: res.data.result, message: 'success', errCode: 0 };
			return res.data.result;
		} catch (e) {
			return { status: res.statusCode, code: 0, result: {}, message: e.errMsg, errCode: e.errno };
		}
	}
}

export {
	Http
}