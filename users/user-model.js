const db = require("../data/config")

function deleteUserById(userID){
    return db("users").where({ id: userID }).del()
}


function findPostsByUserId(userID) {
   // SELECT p.id, p.contents, u.username
		// FROM posts AS p
		// JOIN users AS u ON u.id = p.user_id
		// WHERE user_id = ?;
         return db("posts as p")
        .innerJoin("users as u", "u.id", "p.user_id")
        .where("user_id", userID)
        .select("p.id", "p.contents", "u.username")
}

module.exports = {
findPostsByUserId,
deleteUserById,

}