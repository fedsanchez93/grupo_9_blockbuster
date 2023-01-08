

module.exports = (sequelize, dataTypes)=>{

    let alias = 'Pelicula'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING(10000)
        },
        duracion: {
            type: dataTypes.DECIMAL(5,2)
        },
        estreno: {
            type: dataTypes.INTEGER
        },
        precio: {
            type: dataTypes.DECIMAL(10,2)
        },
        trailer: {
            type: dataTypes.STRING
        },
        pelicula: {
            type: dataTypes.STRING
        },
        CalificacionBlockbuster: {
            type: dataTypes.DECIMAL(5,2)
        },
        CalificacionIMDb: {
            type: dataTypes.DECIMAL(5,2)
        },
        CalificacionRottenTomatoes: {
            type: dataTypes.DECIMAL(5,2)
        }
    }

    let config = {
        tableName : 'peliculas',
        timestamps: true
    }

    const Pelicula = sequelize.define(alias, cols, config)
    
    return Pelicula
}