import concurrently from 'concurrently'

concurrently([
  'cd strapi && npm ci',
  'cd webhook-proxy && npm ci',
  'cd gatsby && npm ci'
])
