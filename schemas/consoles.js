import { schema } from 'normalizr'
/* 
console:
    name
    brand
    release_date
*/
export const console = new schema.Entity('consoles')
export const consoles = new schema.Array(console)