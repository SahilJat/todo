//basic express boilerplate;
const express = require('express');
import { createTodo, updateTodo } from "./types";
const app = express();
app.use(express.json());


app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent wrong inputs",
    })
    return;
  }
})

app.get("/todo", (req, res) => {

})
const port = 3000;

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(parsedPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent the wrong inputs",
    })
    return;
  }

})


app.listen(port, () => {
  console.log(`backend running on port ${port}`)
})
