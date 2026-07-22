import { validate } from 'graphql-validation-rules';
schema.use(validate({ maxDepth: 5 }));
