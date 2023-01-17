

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
        tableName : 'moviesUsersRentals',
        timestamps: false
    }
    const MovieUserRental = sequelize.define(alias, cols, config)
    
    return MovieUserRental
}