const filme = { 
    titulo: 'Wakanda',
}

function declaraFilme() {
    console.log(filme.titulo) //o objeto esta chamando uma variavel fora do seu escopo pois não deve uma declaração de variavel
}

function mostraFilme() { //função de escopo global
    const filme = { titulo: 'Titanic'}
    // objeto de escopo local
    console.log(filme.titulo) //objeto está chamndo algo dentro do escopo pois a variavel foi declarada em seu interior
     // objeto de escopo local
}
//diferença de escopo global e local 