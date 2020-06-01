import { schema } from 'normalizr'
/* 
videogame:
    title
    classification
    release_date
    developer
    genres
    comments
    rating
    consoles
*/

const developer = new schema.Entity('developers')
const developers = new schema.Array(developer)

const genre = new schema.Entity('genres')
const genres = new schema.Array(genre)

const comment = new schema.Entity('comments')
const comments = new schema.Array(comment)

const console = new schema.Entity('consoles')
const consoles = new schema.Array(console)


export const videogame = new schema.Entity(
    'videogames',
    {
        developers,
        genres,
        comments,
        consoles,
    }
)

export const videogames = new schema.Array(videogame)