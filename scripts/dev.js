import concurrently from 'concurrently'

concurrently([
  'cd strapi && npm run start',
  'cd webhook-proxy && npm run start',
  'cd gatsby && npm run start'
])
