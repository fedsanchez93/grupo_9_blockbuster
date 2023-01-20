

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
        image_url: {
            type: dataTypes.STRING(100)
        },
        description: {
            type: dataTypes.STRING(300) //en realidad TEXT
        },
        length: {
            type: dataTypes.INTEGER
        },
        release_year: {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.DECIMAL(5,2)
        },
        trailer: {
            type: dataTypes.STRING(300)
        },
        is_active: {
            type: dataTypes.TINYINT
        },
        movie_url: {
            type: dataTypes.STRING(100)
        },
        blockbuster_rating: {
            type: dataTypes.DECIMAL(2,1)
        },
        imdb_rating: {
            type: dataTypes.DECIMAL(2,1)
        },
        rotten_tomatoes_rating: {
            type: dataTypes.DECIMAL(2,1)
        }
    }

    let config = {
        tableName : 'movies',
        timestamps: true
    }

    const Movie = sequelize.define(alias, cols, config);
    
    return Movie;
}