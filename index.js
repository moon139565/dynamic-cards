

const fecthData = async (config) => {
    try{
        const res = await axios(config)
        return res.data
    }catch (error) {
        throw error("data is not find")
    }
}


const cardParent = document.querySelector(".card-parent");

const cardWork = async ()=>{
    const posts = await fecthData("https://jsonplaceholder.typicode.com/posts")
    posts.map((post)=>{
        const cardElement = document.createElement("div");
        cardElement.classList.add("card")
        cardElement.innerHTML = `
        <h3 class="card-title">${post.title}</h3>
        <p class="card-body">${post.body}</p>
        `
        cardParent.appendChild(cardElement)
    })

    
}
cardWork()