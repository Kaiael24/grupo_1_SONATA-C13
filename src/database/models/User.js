module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(20),
            allowNull: false,
        },
        lastName:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        passwd: {
            type: dataTypes.STRING(70),
            allowNull: false,
        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull:false
        },
        rol: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
    };

    let config = {
        tableName: "users",
        timestamps: false,
    };

    const User = sequelize.define(alias, cols, config);
    
    /* User.associate = (models) => {
        User.hasMany(models.Producto, {
            as: "Producto",
            foreignKey: "id_user"
        })
    } */
    return User;
}