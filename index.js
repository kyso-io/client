const handleRequest = require('./handle-request')
// "name": "@kyso/api",
// "version": "3.2.1",
// Auth & Profile
export const login = async ({ email, password, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: `/parse/login?username=${email}&password=${password}`,
    method: 'get',
    headers: {
      'X-Parse-Application-Id': 'api-kyso-io'
    }
  })

export const getMe = async ({ token, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: `/parse/users/me`,
    method: 'get',
    token,
    headers: {
      'X-Parse-Application-Id': 'api-kyso-io'
    }
  })

export const signup = async ({ userData, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: `/parse/users`,
    method: 'post',
    body: userData,
    headers: {
      'X-Parse-Application-Id': 'api-kyso-io'
    }
  })

export const checkNameUniqueness = async ({ name, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/check-name-uniqueness',
    method: 'post',
    body: {
      name
    }
  })

export const getAuth0User = async ({ email, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-auth0-user',
    method: 'post',
    body: {
      email
    }
  })

export const linkAuth0Accounts = async ({ token, user_id, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/link-auth0-accounts',
    method: 'post',
    body: {
      token, user_id
    }
  })

export const setNickname = async ({ token, nickname, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/set-nickname',
    method: 'post',
    token,
    body: {
      nickname
    }
  })

export const uploadProfilePicture = async ({ token, data, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/upload-profile-picture',
    method: 'post',
    token,
    data
  })

// Containers

export const getContainer = async ({ token, proxyUrl, containerId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-container',
    method: 'post',
    token,
    body: {
      proxyUrl, containerId
    }
  })

export const getContainers = async ({ token, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-containers',
    method: 'post',
    token
  })

export const getRunningContainers = async ({ token, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-running-containers',
    method: 'post',
    token
  })

export const updateContainerActivity = async ({ token, proxyUrl, lastActivity, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/update-container-activity',
    method: 'post',
    token,
    body: { proxyUrl, lastActivity }
  })

// Email

export const feedback = async ({ token, text, apiUrl }) =>
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

export const getGithubRepositories = async ({ token, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-github-repositories',
    method: 'post',
    token
  })

export const importGithubRepository = async ({ token, repo, main, branch, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/import-github-repository',
    method: 'post',
    token,
    body: { repo, main, branch }
  })


export const createComment = async ({ token, text, studyId, parentId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/create-comment',
    method: 'post',
    token,
    body: { text, studyId, parentId }
  })


export const getComments = async ({ studyId, parentId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-comments',
    method: 'post',
    body: { studyId, parentId }
  })


// Studies

export const createVersion = async () => {
  throw new Error('Use the @kyso/publish library for creating versions')
}

export const createStudy = async () => {
  throw new Error('Use the @kyso/publish library for creating studies')
}

export const addTags = async ({ token, studyId, tags, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/add-tags',
    method: 'post',
    token,
    body: { studyId, tags }
  })

export const checkVersionExists = async ({ token, name, versionSha, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/check-version-exists',
    method: 'post',
    token,
    body: { name, versionSha }
  })

export const deleteStudy = async ({ token, studyId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/delete-study',
    method: 'post',
    token,
    body: { studyId }
  })

export const getExploreStudies = async () =>
  handleRequest({
    apiUrl,
    url: '/get-explore-studies',
    method: 'post',
  })


export const getMainFile = async ({ versionId, apiUrl }) => {
  handleRequest({
    apiUrl,
    url: '/check-version-exists',
    method: 'post',
    body: { versionId }
  })
}

export const getStudy = async ({ token, author, name, limit, sha, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-study',
    method: 'post',
    token,
    body: { author, name, limit, sha }
  })

export const getStudies = async ({ token, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-studies',
    method: 'post',
    token,
  })

export const getVersion = async ({ token, versionId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/get-version',
    method: 'post',
    token,
    body: { versionId }
  })

export const incrementViews = async ({ studyId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/increment-views',
    method: 'post',
    body: { studyId }
  })

export const toggleStar = async ({ token, studyId, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/toggle-star',
    method: 'post',
    token,
    body: { studyId }
  })

export const togglePrivate = async ({ token, studyId, privacy, apiUrl }) =>
  handleRequest({
    apiUrl,
    url: '/toggle-private',
    method: 'post',
    token,
    body: { studyId, privacy }
  })
