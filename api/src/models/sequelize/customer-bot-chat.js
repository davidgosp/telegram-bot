module.exports = function (sequelize, DataTypes) {
  const Model = sequelize.define('CustomerBotChat',
    { // definicion de los campos del modelo
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      customerBotId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      emisor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        get () {
          return this.getDataValue('createdAt')
            ? this.getDataValue('createdAt').toISOString().split('T')[0]
            : null
        }
      },
      updatedAt: {
        type: DataTypes.DATE,
        get () {
          return this.getDataValue('updatedAt')
            ? this.getDataValue('updatedAt').toISOString().split('T')[0]
            : null
        }
      }
    }, { // opciones del modelo
      sequelize,
      tableName: 'customer_bot_chats',
      timestamps: true,
      paranoid: true, // no borres datos
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  Model.associate = function (models) {

  }

  return Model
}
