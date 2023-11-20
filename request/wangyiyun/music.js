import { Http } from '../../utils/http';

var CryptoJS = require('../../utils/crypto-js-4.0.0.min');

var encSecKey = 'bae337fdb08c604c0d2b104d5d6228d460e26256e98fa9f89eed2deca94c0cf860ad0f375da82dbbbebf982627ac6e04a2563b15ceb056c9699be66a0cca0d1eb6f697611091c209460b168a93811d2f1290209b225c77253a01a79eb3004f8c64a35b2dd5935a666b9f4e411fa6e5f575b4654bc039601f27b24117553b5ff2',
	a16 = 'UQ1SOUeC2XbpAT2t',
	encryptStr = '0CoJUm6Qyw8W8jud';

function setBody(data) {
	let res = { encSecKey: encSecKey };
	res.params = cjEnCrypto(data, encryptStr);
	res.params = cjEnCrypto(res.params, a16);

	return res;
}

function cjEnCrypto(data, salt) {
	var a = CryptoJS.enc.Utf8.parse(salt),
		b = CryptoJS.enc.Utf8.parse('0102030405060708'),
		c = CryptoJS.enc.Utf8.parse(data),
		d = CryptoJS.AES.encrypt(c, a, { iv: b, mode: CryptoJS.mode.CBC });

	return d.toString();
}

class WYY {
	static async searchSongInfo(keywords) {
		return await Http.post(
			'https://music.163.com/weapi/search/suggest/web?csrf_token=',
			setBody(JSON.stringify({ csrf_token: '', s: keywords, limit: '50' })),
			{ 'Content-Type': 'application/x-www-form-urlencoded' }
		);
	}

	static async getSongLyric(songId) {
		return await Http.post(
			'https://music.163.com/weapi/song/lyric?csrf_token=',
			setBody(JSON.stringify({ csrf_token: '', id: songId, lv: -1, tv: -1 })),
			{ 'Content-Type': 'application/x-www-form-urlencoded' }
		);
	}

	static async getSongPlayerUrl(songId) {
		return await Http.post(
			'https://music.163.com/weapi/song/enhance/player/url/v1?csrf_token=',
			setBody(JSON.stringify({ csrf_token: '', encodeType: 'aac', ids: `[${songId}]`, level: 'lossless' })),
			{ 'Content-Type': 'application/x-www-form-urlencoded' }
		);
		/**
		 * level 是音乐品质
		 * standard - 标准
		 * higher - 较高音质
		 * - 极高音质
		 * lossless - 无损音质
		 */
	}

	static async getSongCoverPic(songId) {
		return await Http.get(
			'https://music.163.com/song',
			{ id: songId }
		);

		// console.log(resp);
	}

	static async getResourceByKeywords({ keyword, artistKey }) {
		console.log('keyword: ' + keyword);
		console.log('artistKey: ' + artistKey);


		let result;
		const info = await this.searchSongInfo(keyword);

		console.log(info);

		info.songs.forEach((item) => {
			item.artists.forEach((artistItem) => {
				if (artistItem.name.includes(artistKey)) {
					result = item
				}
			})
		})

		const [result1, result2, result3] = await Promise.all([
			this.getSongLyric(result.id),
			this.getSongPlayerUrl(result.id),
			this.getSongCoverPic(result.id)
		]);

		// const [lrc, player, pic] = await Promise.all([
		// 	this.getSongLyric(result.id),
		// 	this.getSongPlayerUrl(result.id),
		// 	this.getSongCoverPic(result.id)
		// ]).then(function (res) {
		// 	console.log(res)
		// })

		console.log(result1)
		console.log(result2)
		console.log(result3)
	}
}

export { WYY }