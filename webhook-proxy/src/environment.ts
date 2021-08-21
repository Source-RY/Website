import { JSONSchemaType } from 'ajv'
import envScema from 'env-schema'


interface Environment {
  OWNER: string
  REPOSITORY: string
  USERNAME: string
  PASSWORD: string
  WORKFLOW: string
  BRANCH: string
}

const schema: JSONSchemaType<Environment> = {
  type: 'object',
  required: ['OWNER', 'REPOSITORY', 'USERNAME', 'PASSWORD', 'WORKFLOW', 'BRANCH'],
  properties: {
    OWNER: { type: 'string' },
    REPOSITORY: { type: 'string' },
    PASSWORD: { type: 'string' },
    USERNAME: { type: 'string' },
    WORKFLOW: { type: 'string' },
    BRANCH: { type: 'string' }
  }
}

const environment = envScema({ schema }) as unknown as Environment

export default environment
