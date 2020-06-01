import { schema } from 'normalizr'

/*
movie:
    name
    rating
    actors
    director
    producer
    budget
    duration
    classification
    award
    comments
*/
const actor = new schema.Entity('actors')
const actors = new schema.Array(actor)

const director  = new schema.Entity('directors')

const producer = new schema.Entity('movieProducers')
const producers = new schema.Array('producer')

const award = new schema.Entity('awards')
const awards = new schema.Array(award)

const comment = new schema.Entity('comments')
const comments = new schema.Array(comment)


export const movie = new schema.Entity(
    'movies',
    {
        actors,
        director,
        producers,
        awards, 
        comments
    }
)

export const movies = new schema.Array(movie)