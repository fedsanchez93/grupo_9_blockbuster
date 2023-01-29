

module.exports = (sequelize, dataTypes)=>{

    let alias = 'Movie'

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
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
        timestamps: false
    }

    const Movie = sequelize.define(alias, cols, config);
    
    Movie.associate = (modelos)=>{
        /*Movie.belongsTo(modelos.Genre, {
            as:'genero',
            foreignKey:'id_genre'
        });*/

        Movie.belongsToMany(modelos.Genre, {
            as:'genres',
            through:'movies_genres',
            foreignKey:'id_movie',
            otherKey:'id_genre',
            timestamps:false
        })

        Movie.belongsToMany(modelos.Language, {
            as:'languages',
            through:'movies_languages',
            foreignKey:'id_movie',
            otherKey:'id_language',
            timestamps:false
        })
        
        Movie.belongsToMany(modelos.User, {
            as:'users_wishlist',
            through:'movies_users_wishlist',
            foreignKey:'id_movie',
            otherKey:'id_user',
            timestamps:false
        })
        
        Movie.belongsToMany(modelos.User, {
            as:'users_cart',
            through:'movies_users_cart',
            foreignKey:'id_movie',
            otherKey:'id_user',
            timestamps:false
        })
        
        Movie.belongsToMany(modelos.User, {
            as:'users_rentals',
            through:'movies_users_rentals',
            foreignKey:'id_movie',
            otherKey:'id_user',
            timestamps:false
        }) 

    }

    return Movie;
}