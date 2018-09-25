const handleRequest = require('./handle-request')

const kyso = {}
module.exports = kyso

// Auth & Profile
kyso.login = async ({ email, password, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: `/parse/login?username=${email}&password=${password}`,
    method: 'get',
    headers: {
      'X-Parse-Application-Id': 'api-kyso-io'
    },
    returnRaw: true
  })

kyso.getMe = async ({ token, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: `/parse/users/me`,
    method: 'get',
    token,
    headers: {
      'X-Parse-Application-Id': 'api-kyso-io',
      'X-Parse-Session-Token': token
    },
    returnRaw: true
  })

kyso.signup = async ({ userData, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: `/parse/users`,
    method: 'post',
    body: userData,
    headers: {
      'X-Parse-Application-Id': 'api-kyso-io'
    },
    returnRaw: true
  })

kyso.checkNameUniqueness = async ({ name, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/check-name-uniqueness',
    method: 'post',
    body: {
      name
    }
  })

kyso.getAuth0User = async ({ email, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-auth0-user',
    method: 'post',
    body: {
      email
    }
  })

kyso.linkAuth0Accounts = async ({ token, user_id, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/link-auth0-accounts',
    method: 'post',
    body: {
      token, user_id
    }
  })

kyso.setNickname = async ({ token, nickname, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/set-nickname',
    method: 'post',
    token,
    body: {
      nickname
    }
  })

kyso.uploadProfilePicture = async ({ token, data, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/upload-profile-picture',
    method: 'post',
    token,
    data
  })

// Containers

kyso.getContainer = async ({ token, proxyUrl, containerId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-container',
    method: 'post',
    token,
    body: {
      proxyUrl, containerId
    }
  })

kyso.getContainers = async ({ token, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-containers',
    method: 'post',
    token
  })

kyso.getRunningContainers = async ({ token, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-running-containers',
    method: 'post',
    token
  })

kyso.updateContainerActivity = async ({ token, proxyUrl, lastActivity, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/update-container-activity',
    method: 'post',
    token,
    body: { proxyUrl, lastActivity }
  })

// Email

kyso.feedback = async ({ token, text, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/feedback',
    method: 'post',
    token,
    body: {
      text
    }
  })

// Github

kyso.getGithubRepositories = async ({ token, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-github-repositories',
    method: 'post',
    token
  })

kyso.importGithubRepository = async ({ token, repo, main, branch, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/import-github-repository',
    method: 'post',
    token,
    body: { repo, main, branch }
  })

// Comments

kyso.createComment = async ({ token, text, studyId, parentId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/create-comment',
    method: 'post',
    token,
    body: { text, studyId, parentId }
  })


kyso.deleteComment = async ({ token, commentId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/delete-comment',
    method: 'post',
    token,
    body: { commentId }
  })


kyso.editComment = async ({ token, text, commentId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/edit-comment',
    method: 'post',
    token,
    body: { text, commentId }
  })


kyso.getComments = async ({ studyId, parentId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-comments',
    method: 'post',
    body: { studyId, parentId }
  })


// Studies

kyso.createVersion = async () => {
  throw new Error('Use the @kyso/publish library for creating versions')
}

kyso.createStudy = async () => {
  throw new Error('Use the @kyso/publish library for creating studies')
}

kyso.addTags = async ({ token, studyId, tags, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/add-tags',
    method: 'post',
    token,
    body: { studyId, tags }
  })

kyso.getTagSuggestions = async ({ apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-tag-suggestions',
    method: 'post',
  })


kyso.checkVersionExists = async ({ token, name, versionSha, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/check-version-exists',
    method: 'post',
    token,
    body: { name, versionSha }
  })

kyso.deleteStudy = async ({ token, studyId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/delete-study',
    method: 'post',
    token,
    body: { studyId }
  })

kyso.getExploreStudies = async ({ page, limit, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-explore-studies',
    method: 'post',
    body: { page, limit }
  })

kyso.getMainFile = async ({ versionId, token = null, apiUrl }) => {
  const res = await handleRequest({
    apiUrl,
    url: '/get-main-file',
    method: 'post',
    body: { versionId },
    token,
    returnRaw: true
  })
  return res.text()
}

kyso.getStudy = async ({ token, author, name, limit, sha, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-study',
    method: 'post',
    token,
    body: { author, name, limit, sha }
  })

kyso.getStudies = async ({ token, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-studies',
    method: 'post',
    token,
  })

kyso.getStudiesByAuthor = async ({ author, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-studies-by-author',
    method: 'post',
    body: { author },
  })

kyso.getVersion = async ({ token, versionId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-version',
    method: 'post',
    token,
    body: { versionId }
  })

kyso.incrementViews = async ({ studyId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/increment-views',
    method: 'post',
    body: { studyId }
  })

kyso.toggleStar = async ({ token, studyId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/toggle-star',
    method: 'post',
    token,
    body: { studyId }
  })

kyso.togglePrivate = async ({ token, studyId, privacy, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/toggle-private',
    method: 'post',
    token,
    body: { studyId, privacy }
  })
