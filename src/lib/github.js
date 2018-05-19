import http from './http';
import { getQuery, appendQuery } from "./utils";
import store from './store';

/**
 * 找到第一个符合的issue
 *
 * @export
 * @param {string} labels labels 用逗号分隔
 * @returns {any>}
 */
export function getFirstIssue(labels) {
    const { owner, repo } = store;
    return http.get(`/repos/${owner}/${repo}/issues`, {
        creator: owner,
        labels,
        _: Math.random()
    }).then(body => {
        // window.ele_issue = JSON.parse(body);
        return JSON.parse(body)[0];
    });
}

/**
 *
 *
 * @export
 * @param {number} number
 * @returns
 */
export function getIssue(number) {
    const { owner, repo } = store;
    return http.get(`/repos/${owner}/${repo}/issues/${number}`)
        .then(body => JSON.parse(body));
}

/**
 * 获取当前使用的issue
 *
 * @export
 * @param {string} labels
 */
export function getCurrentIssue(labels) {
    const { owner, repo } = store;
    getFirstIssue(owner, repo, labels)
        .then(issue => {

        });
}

/**
 * 获取token
 *
 * @export
 * @param {string} code
 * @returns {Promise<string>}
 */
export function getToken(code) {
    const { client_id, client_secret } = store;
    return http
        .post('https://github.com/login/oauth/access_token', {
            client_id,
            client_secret,
            code
        }, true)
        .then(body => getQuery(body, 'access_token'));
}

/**
 * 跳转去认证
 *
 * @export
 * @param {string} client_id
 */
export function toAuthorize(client_id) {
    let url = 'https://github.com/login/oauth/authorize';
    url = appendQuery(url, {
        client_id: client_id,
        redirect_uri: window.location.href,
        scope: 'public_repo',
        state: window.location.href
    });
    window.location.href = url;
}

/**
 * 获取用户信息
 *
 * @export
 * @returns {Promise<any>}
 */
export function getAuthUser() {
    return http.get('/user').then(body => JSON.parse(body));
}

/**
 * 获取markdown信息
 *
 * @export
 * @param {string} content
 * @returns {Promise<string>}
 */
export function getMarkDown(content) {
    return http.post('/markdown', {
        mode: 'gfm',
        text: content
    });
}

/**
 * 获取评论信息
 *
 * @export
 * @returns
 */
export function getComments() {
    const { owner, repo, issue: { number } } = store;
    return http.get(`/repos/${owner}/${repo}/issues/${number}/comments`, {
        page: store.comments.page,
        per_page: store.comments.per_page
    }).then(body => JSON.parse(body));
}

/**
 * 创建个 issue
 *
 * @export
 * @param {string} owner
 * @param {string} repo
 * @param {Array<string>} labels
 * @param {string} title
 * @param {string} body
 * @returns
 */
export function createIssue(owner, repo, labels, title, body) {
    return http.post(`/repos/${owner}/${repo}/issues`, { labels, title, body })
        .catch(({ status, message }) => {
            if (status == 201) {
                return message;
            }
            throw new Error(message);
        });
}

export function createComment(owner, repo, number, body) {
    return http.post(`/repos/${owner}/${repo}/issues/${number}/comments`, { body })
        .catch(({ status, message }) => {
            if (status == 201) {
                return message;
            }
            throw new Error(message);
        })
}
