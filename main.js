var convidados = []

function enviar(){
    var convidado = document.getElementById("nomes").value
    convidados.push(convidado)
    document.getElementById("nome").innerHTML = convidados.toString()
}