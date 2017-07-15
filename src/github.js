'use strict';

const token = localStorage.getItem('token');

if (!token) {
    throw new Error('Please set localStorage.token and try again');
}

module.exports = async function requestGithub(params = {}) {
    const [url, options] = typeof params === 'string' ?
        [params, {}] : [params.url, params];
    const {
        method = 'GET',
    } = options;
    const headers = {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${token}`,
    };
    const res = await fetch(`https://api.github.com${url}`, {
        method,
        headers,
    });
    const json = await res.json();
    if (res.status >= 400) {
        const err = new Error(`GitHub request failed: ${json.message}`);
        err.details = json;
        err.status = res.status;
        throw err;
    }
    return json;
};
