

module.exports = (sequelize, dataTypes)=>{

    let alias = 'MovieUserWishe'

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
        tableName : 'moviesUsersWishes',
        timestamps: false
    }
    const MovieUserWishe = sequelize.define(alias, cols, config)
    
    return MovieUserWishe
}