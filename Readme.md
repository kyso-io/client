
# @kyso/api

Kyso API client javascript library

## Installation

```bash
yarn add @kyso/api
```

or

```bash
npm install @kyso/api
```

## Usage

```javascript
const kyso = require('@kyso/api')

// example
const studies = await kyso.getStudies({ token: user.sessionToken })
```

Set the auth token for each call using `token: user.sessionToken`

### Auth & Profile

- `login`
  Returns a response object!
  ```javascript
    const response = await kyso.login({ email, password, apiUrl })
  ```

- `getMe`
  Returns a response object!
  ```javascript
    const response = await kyso.getMe({ token, apiUrl })
  ```
- `signup`
  Returns a response object!  
  ```javascript
    const response = await kyso.signup({ userData, apiUrl })
  ```

  `userData` must include email, username and password

- `checkNameUniqueness`
  Checks if a nickname is already taken
  ```javascript
    const { exists } = await kyso.checkNameUniqueness({ name, apiUrl })
  ```
  Exists will be true or false

- `getAuth0User` - not in use anymore

- `linkAuth0Accounts` - not in use anymore

- `setNickname`
  ```javascript
    await kyso.setNickname({ token, nickname, apiUrl })
  ```
  Sets the nickname of a user

- `uploadProfilePicture` !!! needs testing and example
  ```javascript
    await kyso.uploadProfilePicture({ token, data, apiUrl })
  ```
  data must be the buffer or base64 content of the image file.

### Studies

- `createVersion`
  Use the library [@kyso/publish](https://github.com/kyso-io/publish) to create a version

- `createStudy`
  Use the library [@kyso/publish](https://github.com/kyso-io/publish) to create a study

- `addTags`
  ```javascript
    await kyso.addTags({ token, studyId, tags, apiUrl })
  ```

- `getTagSuggestions`
```javascript
  await kyso.getTagSuggestions({ apiUrl })
```

- `checkVersionExists`
  ```javascript
    const { exists } = await kyso.checkVersionExists({ token, name, versionSha, apiUrl })
  ```

- `deleteStudy`
  ```javascript
    await kyso.deleteStudy({ token, studyId, apiUrl })
  ```

- `getExploreStudies`
  ```javascript
    const studies = await kyso.getExploreStudies()
  ```
  Returns a list of study objects

- `getMainFile`
  ```javascript
    const content = await kyso.getMainFile({ versionId, token (optional), apiUrl })
  ```

- `getStudies`
  ```javascript
    const studies = await kyso.getStudies({ token, apiUrl })
  ```

- `getStudiesByAuthor`
  ```javascript
    const studies = await kyso.getStudiesByAuthor({ author, apiUrl })
  ```

- `getStudy`
  ```javascript
    const study = await kyso.getStudy({ token, author, name, limit, sha, apiUrl })
  ```
  Author is the author nickname, and name is the studyname. Limit and sha are optional.

- `getVersion`
  ```javascript
    const version = await kyso.getVersion({ token, versionId, apiUrl })
  ```

- `incrementViews`
  ```javascript
    await incrementViews({ studyId, apiUrl })
  ```

- `togglePrivate`
  ```javascript
    const study = await togglePrivate({ token, studyId, privacy, apiUrl })
  ```

- `toggleStar`
  ```javascript
    const study = await toggleStar({ token, studyId, privacy, apiUrl })
  ```

### Comments

- `createComment`
  ```javascript
    const comment = await createComment({ token, text, studyId, parentId, apiUrl })
  ```

- `getComments`
  ```javascript
    const comments = await getComments({ studyId, parentId, apiUrl })
  ```

- `editComment`
  ```javascript
    const comment = await editComment({ token, text, commentId, apiUrl })
  ```

- `deleteComment`
  ```javascript
    const comment = await deleteComment({ token, commentId, apiUrl })
  ```
  This simply removes the comment author from the comment, it still exists.

### Containers

- `getContainer`
  ```javascript
    const container = await kyso.getContainer({ token, proxyUrl, containerId, apiUrl })
  ```
  Returns container object

- `getContainers`
  ```javascript
    const containers = await kyso.getContainers({ token, apiUrl })
  ```
  Returns list of container objects

- `getRunningContainers`
  ```javascript
    const runningContainers = await kyso.getRunningContainers({ token, apiUrl })
  ```
  Returns list of container objects

- `updateContainerActivity`
  ```javascript
    await kyso.updateContainerActivity({ token, proxyUrl, lastActivity, apiUrl })
  ```

### Email

- `feedback`
  ```javascript
    await kyso.feedback({ token, text, apiUrl })
  ```

### Github

- `getGithubRepositories`
  ```javascript
    const repos = await kyso.getGithubRepositories({ token, apiUrl })
  ```
  Returns list of repo objects

- `importGithubRepository`
  ```javascript
  await kyso.importRepo({ repo, branch, main, token, apiUrl })
  ```
