// import * as issue from './lib/issue';

const config = {
    el: document.getElementById('root'),
    client_id: '3a657823527f57a63864',
    client_secret: '80714a6e5a35b36043a5dfbd15d43795e95aaa9b',
    owner: 'shalldie',
    repo: 'gitment-store',
    key: 'gitment'
};


// issue.getFirstIssue('shalldie', 'gitment-store', 'gc-key')
//     .then(info => console.log(info));

// issue.getIssue('shalldie', 'gitment-store', 1).then(n => console.log(n));

// issue.getRateLimit().then(n => console.log(n));


// import github from './lib/github';

// github.login(auth.client_id);

import gitComment from './git-comment';

gitComment.config(config);

if (!gitComment.state.ifLogin) {
    // gitComment.login();
}
else {
    // gitComment.getUserInfo();
}

window.gitComment = gitComment;
console.log(gitComment);
