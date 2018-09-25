const jsome = require('jsome')
const kyso = require('../index')

;(async () => {
  try {
    const token = 'r:c48dde1c817ef25a9927998b89e84631'
    const studyId = 'FROu18JFyt'
    const apiUrl = process.env.API_URL

    let comment = await kyso.createComment({
      token,
      text: 'this is a comment',
      studyId,
      apiUrl
    })

    jsome(await kyso.getComments({
      studyId,
      apiUrl
    }))

    comment = await kyso.editComment({
      token,
      text: 'this is a comment edit',
      commentId: comment.objectId,
      apiUrl: process.env.API_URL
    })

    jsome(await kyso.getComments({
      studyId,
      apiUrl
    }))

    await kyso.deleteComment({
      token,
      commentId: comment.objectId,
      apiUrl: process.env.API_URL
    })

    jsome(await kyso.getComments({
      studyId,
      apiUrl
    }))

  } catch (err) {
    console.error(err)
  }
})()
