import { schema } from 'normalizr'

/*  
actor:
    name
    lastName
    birthDate
    birthPlace
    netWorth
    height
    nickname
    awards
*/
const actor = new schema.Entity('actors')
export const actors = new schema.Array(actor)