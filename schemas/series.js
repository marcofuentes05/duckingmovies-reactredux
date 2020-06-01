import { schema } from 'normalizr'

/*
serie: 
    id
    name
    rating
    actors
    director
    seasons
    classification
    comments
    award
*/

const actor = new schema.Entity('actors')
const actors = new schema.Array(actor)

const director = new schema.Entity('directors')

const award = new schema.Entity('awards')
const awards = new schema.Array(award)

const comment = new schema.Entity('comments')
const comments = new schema.Array(comment)

export const serie = new schema.Entity(
    'series',
    {
        actors : actors,
        director : director,
        awards : awards,
        comments,
    }
)

export const series = new schema.Array(serie)