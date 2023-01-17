

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
        tableName : 'moviesUsersCart',
        timestamps: true,
        updatedAt: false
    }
    const MovieUserCart = sequelize.define(alias, cols, config)
    
    return MovieUserCart
}