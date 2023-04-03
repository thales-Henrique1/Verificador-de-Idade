function calcular(){
   var data = new Date()
   var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano  ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

     }
    else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0  && idade < 10 ){
                //criança
                img.setAttribute('src', 'criançaHomem.jpg')

            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'HomemAdolecente.jpg')

            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'HomemAdulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'HomemIdoso.jpg')

            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0  && idade < 10 ){
                //criança
                img.setAttribute('src', 'criançaMulher.jpg')

            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'MulherAdolecente.jpg')

            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'MulherAdulta.jpg')

            }else{
                //idoso
                img.setAttribute('src', 'MulherIdosa.jpg')


            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>` 
        res.appendChild(img)
    } 

}
