

module.exports = (sequelize, dataTypes)=>{

    let alias = 'MovieUserCart'

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
        tableName : 'movies_users_cart',
        timestamps: false,
    }
    const MovieUserCart = sequelize.define(alias, cols, config) 
    
    MovieUserCart.associate= modelos=>{

        MovieUserCart.belongsTo(modelos.Movie,{
            foreignKey:'id_movie'
        })
        MovieUserCart.belongsTo(modelos.User,{
            foreignKey:'id_user'
        })
    }

    return MovieUserCart
}