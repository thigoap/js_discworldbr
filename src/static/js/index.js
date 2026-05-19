let quotes = [
  "'Dizem que um pouco de conhecimento é perigoso, mas está longe de ser tão ruim quanto muita ignorância.'",
  "'É verdade que as palavras têm poder, e uma das coisas que conseguem fazer é sair da boca da pessoa antes que se tenha chance de detê-las.'",
  "'É melhor acender uma vela do que amaldiçoar a escuridão.'",
  "'As vezes é melhor acender um lança-chamas do que amaldiçoar a escuridão.'",
  "'Se você confiar em si mesma... E acreditar em seus sonhos... E seguir a sua estrela... Ainda assim, será derrotada por pessoas que usaram o tempo delas trabalhando pesado, aprendendo coisas e não sendo preguiçosas.'",
  "'O problema da vida era que não se tinha a chance de praticar antes de fazer para valer.'",
  "'Simples animais não conseguiriam agir assim. É preciso ser um humano para ser realmente burro.'",
  "'- E o que seriam os humanos sem amor? - Raros - disse Morte.'",
  "'Porque você parte? Para que possa voltar. Para que possa ver o lugar de onde vei com novos olhos e cores diferentes. E as pessoas de lá veem você de forma diferente também. Voltar ao ponto de partida não é a mesma coisa que nunca partir.'",
  "'As pessoas costumam  dizer coisas como 'Ouça o seu coração', mas as bruxas aprendem a ouvir outras partes também. Os rins podem nos dizer coisas espantosas.'",
  "'Pode ser de alguma ajuda compreender as questões humanas para esclarecer que a maioria dos grandes trinfos e tragédias da história são provocados não pelas pessoas serem fundamentalmente boas ou más, mas por elas serem, fundamentalmente, pessoas.'",
  "'Se você não transforma a sua vida em uma história, simplesmente se torna parte da história de outra pessoa.'",
  "''Pessoal' não é a mesma coisa que importante. As pessoas apenas pensam que é.'",
  "'Os vivos ignoravam as coisas estranhas e maravilhosas porque a vida era muito cheia de coisas chatas e mundanas.'",
  "'Se vocês parassem de falar pras pessoas que tudo vai ser definido depois que elas morrerem, elas poderiam tentar definir tudo enquanto estivessem vivas.'",
  "'Turista, Ricewind concluiu, siginifica idiota.'",
  "'Não pense nisso como morrer, disse Morte. Pense nisso como sair mais cedo para evitar o trânsito.'",
  "'Nos tempos antigos gatos eram venerados como deuses; Eles não se esqueceram disso.'",
  "'Dentro de toda pessoa velha há uma pessoa nova se perguntando o que aconteceu.'",
  "'Ainda é mágica, mesmo se você souber como é feita.'",
  "'Estupidez real vence inteligência artificial todas as vezes.'",
]  

let books = [
  ["Direitos Iguais, Rituais Iguais","direitos-iguais-rituais-iguais"],
  ["Estranhas Irmãs","estranhas-irmas"],
  ["Homens de Armas","homens-de-armas"],
  ["Homens de Armas","homens-de-armas"],
  ["Os Pequenos Homens Livres","os-pequenos-homens-livres-conrad"],
  ["Pirâmides","piramides"],
  ["Pirâmides","piramides"],
  ["O Oitavo Mago","o-oitavo-mago"],
  ["Um Chapéu Cheio de Céu","um-chapeu-cheio-de-ceu"],
  ["Os Pequenos Homens Livres","os-pequenos-homens-livres-bertrand"],
  ["Belas Maldições","belas-maldicoes-v1"],
  ["O Fabuloso Mauricio e seus Roedores Letrados","o-fabuloso-mauricio-e-seus-roedores-letrados"],
  ["Lordes e Damas","lordes-e-damas"],
  ["O Senhor da Foice","o-senhor-da-foice"],
  ["Belas Maldições", "belas-maldicoes-v2"],
  ["A Cor da Magia", "a-cor-da-magia"],
  ["Belas Maldições", "belas-maldicoes-v3"],
  ["Terry Pratchett","terry-pratchett"],
  ["A Magia de Holy Wood","a-magia-de-holy-wood"],
  ["Um Chapéu Cheio de Céu","um-chapeu-cheio-de-ceu"],
  ["The Hogfather",],
]

window.onload = () => {
  let random = Math.floor(Math.random() * quotes.length)
  document.getElementById('quotes').innerHTML = quotes[random]
  if (books[random][1] == null) {
    document.getElementById('fromBook').innerHTML = books[random][0]
  }  else if (books[random][1] != "terry-pratchett") {
    document.getElementById('fromBook').innerHTML = `<a href="/livros/${books[random][1]}">${books[random][0]}</a>`
  } else {
    document.getElementById('fromBook').innerHTML = `<a href="/${books[random][1]}">${books[random][0]}</a>`
  }
} 