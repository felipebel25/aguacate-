/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :))))))))))))))))');
const url = 'https://platzi-avo.vercel.app/api/avo';
const baseUrl = 'https://platzi-avo.vercel.app/';
const app = document.querySelector('#app')

const precios = (price) =>{

    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency: "EUR"
    }).format(price)
    return newPrice;
}



async function fetchData(){
    const response = await fetch(url)
    const data = await response.json()
   
    const every =[]
    data.data.forEach(item =>{
        console.log(item.name)

        const title = document.createElement('h2');
        title.textContent = item.name;
        
        const img = document.createElement('img')
        img.src = `${baseUrl}${item.image}`
        const p = document.createElement('div')
        p.textContent= precios(item.price);
      
        p.className  = "price"
        const div = document.createElement('div')
        div.className = "content"
        
        div.append(img,title,p) 
        every.push(div)

    } )
    app.append(...every)
}

fetchData()