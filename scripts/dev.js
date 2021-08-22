import concurrently from 'concurrently'

concurrently([
  'cd ./src/strapi && npm run start',
  'cd ./src/webhook-proxy && npm run start',
  'cd ./src/gatsby && npm run start'
])
