import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('movies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: { type: DataTypes.STRING,  allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: true },
    director: { type: DataTypes.STRING, allowNull: true },
    genre: { type: DataTypes.STRING, allowNull: true },
    length: { type: DataTypes.INTEGER, allowNull: true },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('movies');
}

export { up, down }
