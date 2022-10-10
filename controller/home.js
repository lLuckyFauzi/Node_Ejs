let todo = [];

const date = new Date();
const year = date.getFullYear();
const mount = date.getDate();

module.exports = {
  sendMessage: (req, res) => {
    res.render("home", {
      todos: todo,
      year: year.toString(),
      mount: mount.toString(),
    });
  },
  newTodo: (req, res) => {
    if (!req.body.addtodo) {
      console.log("Tidak boleh kosong");
    } else {
      todo.push(req.body);
      res.redirect("/");
    }
  },
};
