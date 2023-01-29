

module.exports = (sequelize, dataTypes)=>{

    let alias = 'Genre'

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        genre: {
            type: dataTypes.STRING(50)
        }
    }

    let config = {
        tableName : 'genres',
        timestamps: false
    }
    const Genre = sequelize.define(alias, cols, config);
    
    Genre.associate = (modelos)=>{
        Genre.belongsToMany(modelos.Movie, {
            as:'movies',
            through:'movies_genres',
            foreignKey:'id_genre',
            otherKey:'id_movie',
            timestamps:false
        })
        
        Genre.hasMany(modelos.User,{
            as:'users',
            foreignKey:'id_favorite_genre'
        })
   
        
    }

    return Genre;
}