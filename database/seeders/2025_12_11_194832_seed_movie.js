import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Movie) {
    await db.Movie.bulkCreate([
      { id: 1, title: 'The Shawshank Redemption', year: 1994, director: 'Frank Darabont', genre: 'Drama', length: 142 },
      { id: 2, title: 'The Godfather', year: 1972, director: 'Francis Ford Coppola', genre: 'Crime, Drama', length: 175 },
      { id: 3, title: 'The Dark Knight', year: 2008, director: 'Christopher Nolan', genre: 'Action, Crime, Drama', length: 152 },
      { id: 4, title: 'Pulp Fiction', year: 1994, director: 'Quentin Tarantino', genre: 'Crime, Drama', length: 154 },
      { id: 5, title: 'The Lord of the Rings: The Return of the King', year: 2003, director: 'Peter Jackson', genre: 'Adventure, Drama, Fantasy', length: 201 },
      { id: 6, title: 'Fight Club', year: 1999, director: 'David Fincher', genre: 'Drama', length: 139 },
      { id: 7, title: 'Inception', year: 2010, director: 'Christopher Nolan', genre: 'Action, Adventure, Sci-Fi', length: 148 },
    ]);
  }else {
    await QueryInterface.bulkInsert('movies', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('movies');
}

export { up, down }
