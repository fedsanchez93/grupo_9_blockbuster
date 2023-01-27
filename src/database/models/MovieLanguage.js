

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
    
    MovieLanguage.associate= modelos=>{
        /*MovieGenre.belongsToMany(modelos.Movie, {
            as:'movies',
            through:'actor_movie',
            foreignKey:'actor_id',
            otherKey:'movie_id',
            timestamps:false
        })*/
        MovieLanguage.belongsTo(modelos.Movie,{
            foreignKey:'id_movie'
        })
        MovieLanguage.belongsTo(modelos.Language,{
            foreignKey:'id_language'
        })
    }

    return MovieLanguage
}