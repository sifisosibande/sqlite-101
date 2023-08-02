
import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const db = await sqlite.open({
    filename: "./101.db",
    driver: sqlite3.Database
});
await db.migrate()
// call the query using an await
//create a function that returns all the greetings from the db
export async function getGreetings(){
  const result = await db.all(`SELECT * FROM greetings`);
  return result
}

const result = await getGreetings();
console.log(result);

//create a function that delete a specific greeting
//create a function that add a new greeting
export async function addGreeting(language, greeting) {
    const sql = `insert into greetings (language,greeting) values (?,?)`
    await db.run(sql, [language, greeting]);
}
export async function deleteGreeting(id){
    const sql = `delete from greetings where id = ?`;
    await db.run(sql, [id]);

}

/* const result1 = await getGreetings()
console.log(result1) */

/* console.log('===============')
await deleteGreeting(16);
await deleteGreeting(15);
await deleteGreeting(14);
await deleteGreeting(13);
await deleteGreeting(12);
await deleteGreeting(11);
await deleteGreeting(10);
await deleteGreeting(9);
await deleteGreeting(8);
await deleteGreeting(7);
await deleteGreeting(6);
await deleteGreeting(5); */


export async function uptadeGreeting(language, greeting, id){
    const sql = `update greetings set language = ?, greeting = ? where id = ?`;
    await db.run(sql, [language, greeting, id]);

}
/* const result1 = await getGreetings()
console.log(result1); */

/* console.log('===========')
await uptadeGreeting('Sepedi', 'Thobela',4)
console.log('===============') */


/* const result2 = await getGreetings()
console.log(result2); */

// //call the query using a promise
// db.all(SELECT * FROM greetings)
//   .then(result => {
//     console.log(result)
//   })
  const countResult = await db.get(`SELECT COUNT(*) AS count FROM greetings`);
  console.log(countResult);
console.log("end");
