const { DataTypes } = require("sequelize");
const { sequelize } = require("sequelize");

module.exports = (sequelize,DataTypes) =>{
    const User = sequelize.define("User",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        mno:{
            type:DataTypes.INTEGER,
            allowNull:true,
            defaultValue: 0,
            validate:{
                notEmpty:true
            }
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },

    })


    return User
}

