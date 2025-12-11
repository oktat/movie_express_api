import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Movie = sequelize.define('movie', {
    title: { type: DataTypes.STRING,  allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: true },
    director: { type: DataTypes.STRING, allowNull: true },
    genre: { type: DataTypes.STRING, allowNull: true },
    length: { type: DataTypes.INTEGER, allowNull: true }
})

export default Movie
