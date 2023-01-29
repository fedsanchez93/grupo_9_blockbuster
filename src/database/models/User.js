

module.exports = (sequelize, dataTypes)=>{

    let alias = 'User'

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(50)
        },
        username: {
            type: dataTypes.STRING(50)
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(500)
        },
        image_url: {
            type: dataTypes.STRING(100)
        },
        is_admin: {
            type: dataTypes.TINYINT
        },
        id_favorite_genre: {
            type: dataTypes.INTEGER
        },
        is_active: {
            type: dataTypes.INTEGER
        },
    }

    let config = {
        tableName : 'users',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);
    
    User.associate = (modelos) => {

        User.belongsTo(modelos.Genre,{
            as: 'genres',
            foreignKey: 'id_favorite_genre'
        })
        /*
        User.belongsToMany(modelos.Movie,{
            as:'movies',
            through:'movies_users_wishlist',
            foreignKey:'id_user',
            otherKey:'id_movie',
            timestamps:false
        })

        User.belongsToMany(modelos.Movie,{
            as:'movies',
            through:'movies_users_cart',
            foreignKey:'id_user',
            otherKey:'id_movie',
            timestamps:false
        })

        User.belongsToMany(modelos.Movie,{
            as:'movies',
            through:'movies_users_rentals',
            foreignKey:'id_user',
            otherKey:'id_movie',
            timestamps:false
        }) */
    }

    return User;
}