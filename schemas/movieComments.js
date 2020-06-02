import { schema } from 'normalizr'

/* 
movieComment : 
    author
    text
*/

const comment = new schema.Entity(
    'comments'
)
export const comments = new schema.Array(comment)