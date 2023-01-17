

module.exports = (sequelize, dataTypes)=>{

    let alias = 'MovieLanguage'

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
        id_language: {
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName : 'moviesLanguages',
        timestamps: false
    }
    const MovieLanguage = sequelize.define(alias, cols, config)
    
    return MovieLanguage
}