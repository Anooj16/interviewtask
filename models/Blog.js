const { DataTypes } = require("sequelize");


module.exports = (sequelize) =>{
    const Blog = sequelize.define("Blog",{
        title:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        content:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        author:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        createdAt:{
            type:DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true,
            
            }
        }

    })


    return Blog
}

