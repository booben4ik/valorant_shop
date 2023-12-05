async function getResponce() {
    let response = await fetch("data/shop.json")
    let content = await response.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 10)
    console.log(content)

    for (let i = 0; i < content.length; i++) {
        console.log(content[i].id, content[i].title)
        console.log(content[i])
    }

    let node_for_insert = document.getElementById("node_for_insert")
    for (let i = 0; i < content.length; i++) {
        node_for_insert.innerHTML += `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
        <img style="width: 180px" class="align-self-center" src=${content[i].img}>
        <h5 class="card-title">${content[i].title}</h5>
        <p class="card-text">${content[i].episode}. Цена ${content[i].price} ₽</p>
        <input type="hidden" name= "choice" value=${content[i].title}>
        <p class="card-text" >Заказать <input class="w-25" type="checkbox" name="choice" value="checked"></p>
        </li>`
    }
}

getResponce()