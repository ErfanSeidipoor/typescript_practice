import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url)
  .then(response=>{

    const {
      id,
      title,
      completed
    } = response.data as Todo

    logToDo(id, title, completed)
  })

  const logToDo = (id: number, title:string , completed: boolean) => {
    console.log(`
      The Todo with ID: ${id},
      Has a title of: ${title}, 
      Is it Finished ? ${completed}
    `)
  }
