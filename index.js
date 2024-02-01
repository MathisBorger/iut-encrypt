'use strict';

const Crypto = require('crypto');

class Encrypt {

    sha1(data) {

        const shasum = Crypto.createHash('sha1');
        shasum.update(data);
        shasum.digest('hex');
    }

    compareSha1(data, hash) {

        return this.sha1(data) === hash;
    }
}

module.exports = Encrypt;
