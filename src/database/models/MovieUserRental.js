

module.exports = (sequelize, dataTypes)=>{

    let alias = 'MovieUserRental'

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
        tableName : 'movies_users_rentals',
        timestamps: false
    }
    const MovieUserRental = sequelize.define(alias, cols, config)
    
    MovieUserRental.associate= modelos=>{

        MovieUserRental.belongsTo(modelos.Movie,{
            foreignKey:'id_movie'
        })
        MovieUserRental.belongsTo(modelos.User,{
            foreignKey:'id_user'
        })
    }

    return MovieUserRental
}