import express from 'express'
import axios from 'axios'
import environment from './environment'

express()
.post('/build', async (_, res) => {
  await triggerBuildWorkflow()
  res.end()
})
.listen(process.env.PORT ?? 1338)

async function triggerBuildWorkflow () {
  await axios({
    method: 'POST',
    url: `https://api.github.com/repos/${environment.OWNER}/${environment.REPOSITORY}/actions/workflows/${environment.WORKFLOW}/dispatches`,
    data: { 
      ref: 'rewrite' 
    }, 
    headers: { 
      'Accept': 'application/vnd.github.v3+json' 
    },
    auth: {
      username: environment.USERNAME,
      password: environment.PASSWORD
    }
  })
}