

module.exports = (sequelize, dataTypes)=>{

    let alias = 'Movie'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100)
        },
        description: {
            type: dataTypes.STRING(10000) //en realidad TEXT
        },
        length: {
            type: dataTypes.DECIMAL(5,2)
        },
        year: {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.DECIMAL(10,2)
        },
        trailer: {
            type: dataTypes.STRING(300)
        },
        movie: {
            type: dataTypes.STRING(300)
        },
        CalificacionBlockbuster: {
            type: dataTypes.DECIMAL(6,3)
        },
        CalificacionIMDb: {
            type: dataTypes.DECIMAL(6,3)
        },
        CalificacionRottenTomatoes: {
            type: dataTypes.DECIMAL(6,3)
        },
        isActive: {
            type: dataTypes.INTEGER
        },
    }

    let config = {
        tableName : 'movies',
        timestamps: true
    }

    const Movie = sequelize.define(alias, cols, config)
    
    return Movie
}