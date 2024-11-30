import { useState } from "react"
export function CreateTodo({setTodos}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input onChange={function (e) {
            const value = e.target.value;
            setTitle(value);
        }} type="text" placeholder="title" style={{
            padding: 10
            , margin: 10
        }}></input>
        <br />

        <input onChange={function (e) {
            const value = e.target.value;
            setDescription(value);
        }} type="text" placeholder="description" style={{
            padding: 10
            , margin: 10
        }}></input><br />
        <button style={{
            padding: 10
            , margin: 10
        }} onClick={async () => {
            await fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-type": "application/json"
                }
            }
            )
            setTodos((prevTodos) => [...prevTodos, { title, description }]);
            setTitle("");
            setDescription("");
        }}>Add to do</button>
    </div>
}