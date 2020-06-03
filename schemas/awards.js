import { schema } from 'normalizr'

/*  
award:
    name
    entity
    category
    year
*/

const award = new schema.Entity('awards')

export const awards = new schema.Array(award)