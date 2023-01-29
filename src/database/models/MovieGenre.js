

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
        tableName : 'movies_genres',
        timestamps: false
    }
    const MovieGenre = sequelize.define(alias, cols, config)

    MovieGenre.associate= modelos=>{
        /*MovieGenre.belongsToMany(modelos.Movie, {
            as:'movies',
            through:'actor_movie',
            foreignKey:'actor_id',
            otherKey:'movie_id',
            timestamps:false
        })*/
        MovieGenre.belongsTo(modelos.Movie,{
            foreignKey:'id_movie'
        })
        MovieGenre.belongsTo(modelos.Genre,{
            foreignKey:'id_genre'
        })
    }


    return MovieGenre
}