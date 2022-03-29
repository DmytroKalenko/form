let validation = {
  name: false,
  email: false,
  password: false,
  bithday: false
};

// input-name validation 
function nameVerification (data){
  const pattern = new RegExp(/^[a-zA-Z]{2,16}$/)
  if(pattern.test(data.value)){
    validation =  {...validation, name: true}
    data.classList.remove('is-invalid');
    data.classList.add('is-valid');
  }else{
    validation =  {...validation, name: false}
    data.classList.remove('is-valid');
    data.classList.add('is-invalid');
  }
} 

// input  email validation
function validationEmail (data){
  const pattern = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)
  if(pattern.test(data.value)){
    validation =  {...validation, email: true}
    data.classList.remove('is-invalid');
    data.classList.add('is-valid');
  }else{
    validation =  {...validation, email: false}
    data.classList.remove('is-valid');
    data.classList.add('is-invalid');
  }
} 

// input  email validation
function validationPassrord (data){
  const pattern = new RegExp(/^(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/)
  if(pattern.test(data.value)){
    validation =  {...validation, password: true}
    data.classList.remove('is-invalid');
    data.classList.add('is-valid');
  }else{
    validation =  {...validation, password: false}
    data.classList.remove('is-valid');
    data.classList.add('is-invalid');
  }
} 

// input validation Bithday
function validationBithday(data){
  const pattern = new RegExp(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/)

  if(pattern.test(data.value)){
    validation =  {...validation, bithday: true}
    data.classList.remove('is-invalid');
    data.classList.add('is-valid');
  }else{
    validation =  {...validation, bithday: false}
    data.classList.remove('is-valid');
    data.classList.add('is-invalid');
  }
}


const nameInput = document.querySelector('#userName');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const inputData = document.querySelector('#data');

const btnSubmit = document.querySelector('#btnSubmit');

nameInput.addEventListener("input",(event)=>{
  nameVerification(event.target)
})

emailInput.addEventListener("input",(event)=>{
  validationEmail(event.target)
})

passwordInput.addEventListener("input",(event)=>{
  validationPassrord(event.target)
})

inputData.addEventListener("input",(event)=>{
  validationBithday(event.target)
})

btnSubmit.addEventListener('click',(event)=>{
  event.preventDefault();
  if(validation.name && validation.email && validation.password && validation.bithday){
    alert('data was been send')
  }else{
    alert('please wright correct data')
  }
})
