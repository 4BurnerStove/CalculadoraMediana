function resultado() {
  var nameStudent = document.getElementById('nameStudy').value
  document.getElementById('NameAlun').innerHTML = nameStudent

  var n1 = document.getElementById('n1').value
  var n2 = document.getElementById('n2').value
  var n3 = document.getElementById('n3').value
  var n4 = document.getElementById('n4').value

  var resultNote =
    parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)
  var divide = resultNote / 4
  console.log(divide)
  document.getElementById('result').innerHTML = divide
  var text = ''
  if (divide >= 7.0) {
    text = 'Aprovado'
  } else if (divide < 4.0) {
    text = 'Reprovado'
  } else if (4 >= divide < 7) {
    text = 'Na prova final!'
  }
  document.getElementById('situation').innerHTML = text
}
