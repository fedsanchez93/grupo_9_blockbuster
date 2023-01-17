

module.exports = (sequelize, dataTypes)=>{

    let alias = 'MovieGenre'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_movie: {
            type: dataTypes.INTEGER,
        },
        id_genre: {
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName : 'moviesGenres',
        timestamps: false
    }
    const MovieGenre = sequelize.define(alias, cols, config)
    
    return MovieGenre
}