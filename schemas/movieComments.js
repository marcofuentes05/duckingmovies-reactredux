import { schema } from 'normalizr'

/* 
movieComment : 
    author
    text
*/

const author = new schema.Entity('user')
const comment = new schema.Entity(
    'comments',
    {
        author : author,
    }
)
export const comments = new schema.Array(comment)