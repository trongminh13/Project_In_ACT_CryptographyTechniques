import axios from "axios";


function getPost(){
    let url="https://jsonplaceholder.typicode.com/posts"
    return axios.get(url)
}

function renderPost():void{
    const postElement = document.querySelector(".posts")
    let html = ''
    getPost()
    .then((response)=>{
        response.data.map((post:any)=>{
            html +=
            `
            <div class="postt">
            <li class="post-item">id :${post.id}</li>
            <li class="post-item">title :${post.title}</li>
            </div>
            

            `
        })
        if(!postElement)
        {
            alert("Khong tim thay the class post!")
            return
        }
        postElement.innerHTML = html
    })
}
renderPost()
