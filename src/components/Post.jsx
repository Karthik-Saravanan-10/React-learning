let names = ["vsk", "sk"];
let id;

function Post() {
    let random = Math.random()
    if (random > 0.5) {
        id = names[0]
    } else {
        id = names[1]
    }
    return (
        <>
            <h1>{id}</h1>
            <p>This is react!</p>
        </>
    )
}

export default Post;