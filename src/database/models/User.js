

module.exports = (sequelize, dataTypes)=>{

    let alias = 'User'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45)
        },
        user: {
            type: dataTypes.STRING(45)
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(500)
        },
        isAdmin: {
            type: dataTypes.INTEGER
        },
        idFavoriteGenre: {
            type: dataTypes.INTEGER
        },
        isActive: {
            type: dataTypes.INTEGER
        },
    }

    let config = {
        tableName : 'users',
        timestamps: true
    }
    const User = sequelize.define(alias, cols, config)
    
    return User
}