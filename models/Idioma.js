


module.exports = (sequelize, dataTypes)=>{

    let alias = 'Idioma'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idioma: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName : 'idiomas',
        timestamps: false
    }
    const Idioma = sequelize.define(alias, cols, config)
    
    return Idioma
}