
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

You can also set `kyso.API_URL` to whatever you want, but it defaults
to `https://api.kyso.io`, eg:

```javascript
kyso.API_URL = 'https://staging.api.kyso.io'
```

Set the auth token for each call using `token: user.sessionToken`

### Auth & Profile

- `checkNameUniqueness`
  Checks if a nickname is already taken
  ```javascript
    const { exists } = await kyso.checkNameUniqueness({ name })
  ```
  Exists will be true or false

- `getAuth0User` - not in use anymore

- `linkAuth0Accounts` - not in use anymore

- `setNickname`
  ```javascript
    await kyso.setNickname({ token, nickname })
  ```
  Sets the nickname of a user

- `uploadProfilePicture` !!! needs testing and example
  ```javascript
    await kyso.uploadProfilePicture({ token, data })
  ```
  data must be the buffer or base64 content of the image file.

### Studies

- `createVersion`
  Use the library [@kyso/publish](https://github.com/kyso-io/publish) to create a version

- `createStudy`
  Use the library [@kyso/publish](https://github.com/kyso-io/publish) to create a study

- `addTags`
  ```javascript
    await kyso.addTags({ token, studyId, tags })
  ```

- `checkVersionExists`
  ```javascript
    const { exists } = await kyso.checkVersionExists({ token, name, versionSha })
  ```

- `deleteStudy`
  ```javascript
    await kyso.deleteStudy({ token, studyId })
  ```

- `getExploreStudies`
  ```javascript
    const studies = await kyso.getExploreStudies()
  ```
  Returns a list of study objects

- `getMainFile`
  ```javascript
    const content = await kyso.getMainFile({ versionId, token (optional) })
  ```

- `getStudies`
  ```javascript
    const studies = await kyso.getStudies({ token })
  ```

- `getStudy`
  ```javascript
    const study = await kyso.getStudy({ token, author, name, limit, sha })
  ```
  Author is the author nickname, and name is the studyname. Limit and sha are optional.

- `getVersion`
  ```javascript
    const version = await kyso.getVersion({ token, versionId })
  ```

- `incrementViews`
  ```javascript
    await incrementViews({ studyId })
  ```

- `togglePrivate`
  ```javascript
    const study = await togglePrivate({ token, studyId })
  ```

- `toggleStar`
  ```javascript
    const study = await toggleStar({ token, studyId, privacy })
  ```

- `createComment`
  ```javascript
    const comment = await createComment({ token, text, studyId, parentId })
  ```

- `getComments`
  ```javascript
    const comments = await getComments({ studyId, parentId })
  ```

### Containers

- `getContainer`
  ```javascript
    const container = await kyso.getContainer({ token, proxyUrl, containerId })
  ```
  Returns container object

- `getContainers`
  ```javascript
    const containers = await kyso.getContainers({ token })
  ```
  Returns list of container objects

- `getRunningContainers`
  ```javascript
    const runningContainers = await kyso.getRunningContainers({ token })
  ```
  Returns list of container objects

- `updateContainerActivity`
  ```javascript
    await kyso.updateContainerActivity({ token, proxyUrl, lastActivity })
  ```

### Email

- `feedback`
  ```javascript
    await kyso.feedback({ token, text })
  ```

### Github

- `getGithubRepositories`
  ```javascript
    const repos = await kyso.getGithubRepositories({ token })
  ```
  Returns list of repo objects

- `importGithubRepository`
  ```javascript
  await kyso.importRepo({ repo, branch, main, token })
  ```
