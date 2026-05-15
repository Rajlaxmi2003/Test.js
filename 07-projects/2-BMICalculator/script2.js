const form = document.querySelector('form')
// This will give you empty value if
// const height= parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()   // This is used because ham submit ka default setting ko rokna chahte hai

    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)   // parseInt is used because string mein value aaya hai usko int mein change karenge
    const results= document.querySelector('#results')

    if(height===''|| height<0|| isNaN(height))   // here we are checking if the height will be not a number but we are doing by its method call inspite(height===NaN)
        {
        results.innerHTML=` Please give a valid ${height} `;
    }
    
    else if(weight===''|| weight<0|| isNaN(weight))   // here we are checking if the height will be not a number but we are doing by its method call inspite(height===NaN)
        {
        results.innerHTML=` Please give a valid ${weight}`;
    }else{
        const bmi=  (weight/ ((height*height)/10000)).toFixed(2)
       //show the result
        results.innerHTML= `<span> ${bmi} </span>`;
    }
    
})