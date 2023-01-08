


module.exports = (sequelize, dataTypes)=>{

    let alias = 'Genero'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        genero: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName : 'generos',
        timestamps: false
    }
    const Genero = sequelize.define(alias, cols, config)
    
    return Genero
}