
const colors = document.querySelectorAll('.colors')
const body = document.querySelector('body')

colors.forEach( color => {
    color.addEventListener('click',(e) => {
        if(e.target.id == 'orange'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id == 'green'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id == 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id == 'red'){
            body.style.backgroundColor = e.target.id
        }
    })
})



