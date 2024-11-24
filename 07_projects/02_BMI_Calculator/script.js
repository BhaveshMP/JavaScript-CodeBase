const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")

    if(isNaN(height) || height < 0 || height == ""){
        result.innerHTML = 'please enter valid number'
    }else{
    const bmi = weight / ((height * height)/10000);
    let r = "Normal";
    if(bmi < 18.6){
        r = "underweigth"
    }
    else if(bmi > 24.9){
        r = "overweigth"
    }

    result.innerHTML = `BMI: ${bmi} (${r})`;
}
})
