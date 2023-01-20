
module.exports = (sequelize, dataTypes)=>{

    let alias = 'Language'

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        language: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    }

    let config = {
        tableName : 'languages',
        timestamps: false
    }
    const Language = sequelize.define(alias, cols, config);
    
    return Language;
}