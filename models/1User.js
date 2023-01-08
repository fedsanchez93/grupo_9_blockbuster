


module.exports = (sequelize, dataTypes)=>{

    let alias = 'User'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        user: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        category: {
            type: dataTypes.STRING
        },
        idGeneroFavorito: {
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