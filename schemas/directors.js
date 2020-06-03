import { schema } from 'normalizr'
/*
director:
    name
    lastName
    birthDate
    birthPlace
    netWorth
    height
    nickname
    awards
*/
export const directors = new schema.Entity('director')

// export const directors = new schema.Array(director)