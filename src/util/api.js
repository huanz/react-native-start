/**
 * @desc api请求封装
 */

import utils from './utils';

/**
 *  
 * @param {object} [params]
 * @returns {string} url
 */
function paramsSerializer(params) {
    if (!params) {
        return '';
    }
    let parts = [];
    for (let key in params) {
        let val = params[key];
        if (val === null || typeof val === 'undefined') {
            return;
        }
        if (Array.isArray(val)) {
            key = key + '[]';
        } else {
            val = [val];
        }
        val.forEach(v => {
            if (utils.isDate(v)) {
                v = v.toISOString();
            } else if (utils.isObject(v)) {
                v = JSON.stringify(v);
            }
            parts.push(encode(key) + '=' + encode(v));
        });
    }
    return parts.join('&');
}

/**
 * encode val
 * @param {string} val 
 */
function encode(val) {
    return encodeURIComponent(val).
        replace(/%40/gi, '@').
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
}

const defaults = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
};

/**
 * 
 * @param {string} url 请求地址
 * @param {any} options 请求设置项
 */
let Api = async (url, options) => {
    try {
        let res = await fetch(url, Object.assign({}, defaults, options));
        let data = await res.json();
        if (data && data.error && data.error.returnCode != 0) {
            throw data;
        }
        return data;
    } catch (error) {
        console.log(error);
    }
};

/**
 * @param {string} url 请求地址
 * @param {object} [params] 请求参数
 */
Api.post = async (url, params) => {
    return await Api(url, {
        body: JSON.stringify(params)
    });
};

Api.get = async (url, params) => {
    return await Api((url.indexOf('?') === -1 ? '?' : '$') + paramsSerializer(params), {
        method: 'GET',
    });
};

Api.paramsSerializer = paramsSerializer;

export default Api;