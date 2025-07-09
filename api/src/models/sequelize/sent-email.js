module.exports = function (sequelize, DataTypes) {
  const Model = sequelize.define('SentEmail',
    { // definicion de los campos del modelo
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      userType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Tipo Usuario".'
          },
          notEmpty: {
            msg: 'Por favor, rellena el campo "Tipo Usuario".'
          }
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      emailTemplate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sentAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      readedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.STRING,
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
      tableName: 'sent_emails',
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
