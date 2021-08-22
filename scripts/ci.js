import concurrently from 'concurrently'

concurrently([
  'cd ./src/strapi && npm ci',
  'cd ./src/webhook-proxy && npm ci',
  'cd ./src/gatsby && npm ci'
])
