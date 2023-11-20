var CryptoJS = require("./crypto-js-4.0.0.min")

var encSecKey = 'bae337fdb08c604c0d2b104d5d6228d460e26256e98fa9f89eed2deca94c0cf860ad0f375da82dbbbebf982627ac6e04a2563b15ceb056c9699be66a0cca0d1eb6f697611091c209460b168a93811d2f1290209b225c77253a01a79eb3004f8c64a35b2dd5935a666b9f4e411fa6e5f575b4654bc039601f27b24117553b5ff2',
	a16 = 'UQ1SOUeC2XbpAT2t',
	params2 = '010001',
	params3 = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7',
	params4 = '0CoJUm6Qyw8W8jud';

function search_song_info(keywords) {
	let params = {
		csrf_token: '',
		s: keywords,
		limit: '50'
	}

	const res = setBody(JSON.stringify(params));

	return {
		url: 'https://music.163.com/weapi/search/suggest/web?csrf_token=',
		params: res.encText,
		encSecKey: encSecKey
	}
}

function get_song_lyric(songId) {
	let params = {
		csrf_token: '',
		id: songId,
		lv: -1,
		tv: -1
	}

	const res = setBody(JSON.stringify(params));

	return {
		url: 'https://music.163.com/weapi/song/lyric?csrf_token=',
		params: res.encText,
		encSecKey: encSecKey
	}
}

function get_song_player_url(songId) {
	let params = {
		csrf_token: '',
		encodeType: 'aac',
		ids: '[' + songId + ']',
		level: 'standard'
	}

	/**
	 * level 是音乐品质
	 * standard - 标准
	 * higher - 较高音质
	 * - 极高音质
	 * lossless - 无损音质
	 */

	const res = setBody(JSON.stringify(params));

	return {
		url: 'https://music.163.com/weapi/song/enhance/player/url/v1?csrf_token=',
		params: res.encText,
		encSecKey: encSecKey
	}
}

function get_song_detail(songId) {
	let picUrl = ''
	wx.request({
		url: `https://music.163.com/song?id=${songId}`,
		method: 'GET',
		success(res) {
			// console.log(res)
			// console.log(typeof res.data)
			// console.log(res.data)
			// console.log(res.data.match(/\<meta(.*)og:image(.*)\>/))
			let arr = res.data.match(/\<meta(.*)og:image(.*)\>/)
			let i = arr[2].search(/http/)
			let len = arr[2].lastIndexOf('\"')
			// let str = arr[2].substring(i, len)
			// console.log(str)
			picUrl = arr[2].substring(i, len)
		}
	})

	console.log(picUrl)
	return picUrl
}

function setBody(param) {
	var h = {};
	return h.encText = cjEnCrypto(param, params4), h.encText = cjEnCrypto(h.encText, a16), h.encSecKey = encSecKey, h
}

function cjEnCrypto(param, param_append) {
	var c = CryptoJS.enc.Utf8.parse(param_append),
		d = CryptoJS.enc.Utf8.parse('0102030405060708'),
		e = CryptoJS.enc.Utf8.parse(param),
		f = CryptoJS.AES.encrypt(e, c, {
			iv: d,
			mode: CryptoJS.mode.CBC
		});
	return f.toString()
}

module.exports = {
	webApi: {
		search_song_info: search_song_info,
		get_song_lyric: get_song_lyric,
		get_song_player_url: get_song_player_url,
		get_song_detail: get_song_detail
	}
}