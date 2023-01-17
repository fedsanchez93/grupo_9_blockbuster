
module.exports = (sequelize, dataTypes)=>{

    let alias = 'Genre'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        genre: {
            type: dataTypes.STRING(45)
        }
    }

    let config = {
        tableName : 'genres',
        timestamps: false
    }
    const Genre = sequelize.define(alias, cols, config)
    
    return Genre
}