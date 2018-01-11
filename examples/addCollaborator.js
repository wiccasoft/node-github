const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.repos.addCollaborator({
  owner: 'octokit',
  repo: 'rest.js',
  username: 'defunkt'
})
