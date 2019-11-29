document.getElementById('boto2').addEventListener('click', oper)
function oper() {
  let opera = document.getElementById('ope').value
  let nume1 = parseFloat(document.getElementById('num1').value)
  let nume2 = parseFloat(document.getElementById('num2').value)
  if (opera==='+' || opera==='suma'){
    alert('El resultado es '+ (nume1+nume2))
  }
if (opera ==='-' || opera==='resta'){
  alert('El resultado es '+ (nume1-nume2))
}
if (opera ==='x' || opera==='multiplicación'){
  alert('El resultado es '+ (nume1*nume2))
}
if (opera ==='/' || opera==='división'){
  alert('El resultado es '+ (nume1/nume2))
}
else {
  alert('>:u')
}
}
