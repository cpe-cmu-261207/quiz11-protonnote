//your code here!

document.getElementById("button-compute").addEventListener("click",function(event){
    event.preventDefault()
    let num = document.getElementById('input-number')
    console.log(num.value)

    const lii = document.querySelector('#show-wow')

    const lis = document.createElement('ul')

    const list_n = document.createElement('li')
    const hh = document.createElement('h2')
    hh.innerHTML = num.value
    list_n.append(hh)
    lis.append(list_n)
    lii.append(lis)

},false)



document.getElementById("button-create-table").addEventListener("click",function(event){
    event.preventDefault()

},false)