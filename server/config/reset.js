import { pool } from './database.js'
import './dotenv.js'
import chairData from '../data/chairs.js'

const createChairsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS chairs;

        CREATE TABLE IF NOT EXISTS chairs (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            designer VARCHAR(255) NOT NULL,
            year VARCHAR(4) NOT NULL,
            image VARCHAR(255) NOT NULL,
            materials VARCHAR(255) NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 chairs table created successfully')
    } catch (err) {
        console.error('⚠️ error creating chairs table', err)
    }
}

const seedChairsTable = async () => {
    await createChairsTable()

    chairData.forEach((chair) => {
        const insertQuery = {
            text: 'INSERT INTO chairs (name, designer, year, image, materials) VALUES ($1, $2, $3, $4, $5)'
        }

        const values = [
            chair.name,
            chair.designer,
            chair.year,
            chair.image,
            chair.materials,
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting chair', err)
                return
            }

            console.log(`✅ ${chair.name} added successfully`)
        })
    })
}

seedChairsTable()