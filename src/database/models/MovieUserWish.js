

module.exports = (sequelize, dataTypes)=>{

    let alias = 'MovieUserWish'

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
        id_user: {
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName : 'movies_users_wishlist',
        timestamps: false
    }
    const MovieUserWish = sequelize.define(alias, cols, config)
    
    MovieUserWish.associate= modelos=>{

        MovieUserWish.belongsTo(modelos.Movie,{
            foreignKey:'id_movie'
        })
        MovieUserWish.belongsTo(modelos.User,{
            foreignKey:'id_user'
        })
    }

    return MovieUserWish
}