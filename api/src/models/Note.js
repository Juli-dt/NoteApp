const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "note",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false, 
      },
      status: { 
        type: DataTypes.ENUM('active', 'archived'),
        defaultValue: 'active',
      },
       },
    { createdAt: false, updatedAt: false }
  );
};
