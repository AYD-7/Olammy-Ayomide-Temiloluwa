// async function to fetch comments
const fetchComments = async () => {
    try {
        // getting the response from the server
        const res = await fetch("https://jsonplaceholder.typicode.com/comments");

        // gracefully handling error when request is not successful
        if (!res.ok) {
            return "Try again later!"
        }

        // unpacking the actual data from the response
        const data = await res.json();

        // returning the unpacked data
        return data;
    } catch (error) {
        // handling error 
        console.log("Error:", error);
        
    }
};


// rendering the file immediately the web content is loaded
document.addEventListener("DOMContentLoaded", async () => {
    // getting the returned value from the fetchComments function
    const comments = await fetchComments();

    // getting the comment wrapper div
    const commentWrapper = document.getElementById("commentsWrapper");

    // rendering each comment as a card
    comments.slice(0, 10).forEach((comment) => {
        // creating a new div element
        const card = document.createElement("div");
        card.setAttribute("class", "comment-card")

        // inserting the needed data  into the card
        card.innerHTML = `
        <h3 class="comment-name">${comment.name}</h3> 
        <p class="comment-email">${comment.email}</p>
        <p class="comment-body">${comment.body}</p>
        `
        // attaching each card to the comment wrapper
        commentWrapper.appendChild(card)
    })
})