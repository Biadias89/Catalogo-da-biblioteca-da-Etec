const livrosRecente = [
  {
    id: 1,
    src: "https://picsum.photos/seed/livro-001/300/450",
    titulo: "O Cortiço",
    descricao: "Romance naturalista que retrata a vida e os conflitos dos moradores de um cortiço no Rio de Janeiro.",
    ano: 1890,
    autor: "Aluísio Azevedo"
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/livro-002/300/450",
    titulo: "Quarto de Despejo",
    descricao: "Diário de Carolina Maria de Jesus sobre sua vida, a pobreza e as dificuldades enfrentadas na favela do Canindé.",
    ano: 1960,
    autor: "Carolina Maria de Jesus"
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/livro-003/300/450",
    titulo: "Dom Casmurro",
    descricao: "Romance narrado por Bentinho, que relembra sua juventude e seu relacionamento com Capitu.",
    ano: 1899,
    autor: "Machado de Assis"
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/livro-004/300/450",
    titulo: "Memórias Póstumas de Brás Cubas",
    descricao: "Narrativa irônica de um homem que decide contar sua história depois de morto.",
    ano: 1881,
    autor: "Machado de Assis"
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/livro-005/300/450",
    titulo: "O Alienista",
    descricao: "Novela que questiona os limites entre a loucura e a normalidade por meio do médico Simão Bacamarte.",
    ano: 1882,
    autor: "Machado de Assis"
  },
  {
    id: 6,
    src: "https://picsum.photos/seed/livro-006/300/450",
    titulo: "A Hora da Estrela",
    descricao: "História de Macabéa, uma jovem nordestina que leva uma vida simples no Rio de Janeiro.",
    ano: 1977,
    autor: "Clarice Lispector"
  },
  {
    id: 7,
    src: "https://picsum.photos/seed/livro-007/300/450",
    titulo: "Vidas Secas",
    descricao: "Uma família de retirantes atravessa o sertão enfrentando a seca, a pobreza e a fome.",
    ano: 1938,
    autor: "Graciliano Ramos"
  },
  {
    id: 8,
    src: "https://picsum.photos/seed/livro-008/300/450",
    titulo: "Grande Sertão: Veredas",
    descricao: "Riobaldo relembra sua vida no sertão e suas experiências durante conflitos e viagens.",
    ano: 1956,
    autor: "João Guimarães Rosa"
  },
  {
    id: 9,
    src: "https://picsum.photos/seed/livro-009/300/450",
    titulo: "Capitães da Areia",
    descricao: "Romance sobre um grupo de crianças abandonadas que vive nas ruas de Salvador.",
    ano: 1937,
    autor: "Jorge Amado"
  },
  {
    id: 10,
    src: "https://picsum.photos/seed/livro-010/300/450",
    titulo: "Iracema",
    descricao: "Romance indianista que conta a história de amor entre Iracema e Martim.",
    ano: 1865,
    autor: "José de Alencar"
  },

  {
    id: 11,
    src: "https://picsum.photos/seed/livro-011/300/450",
    titulo: "O Hobbit",
    descricao: "Bilbo Bolseiro abandona sua vida tranquila para participar de uma aventura pela Terra-média.",
    ano: 1937,
    autor: "J. R. R. Tolkien"
  },
  {
    id: 12,
    src: "https://picsum.photos/seed/livro-012/300/450",
    titulo: "Orgulho e Preconceito",
    descricao: "Elizabeth Bennet enfrenta questões familiares e sociais enquanto conhece Mr. Darcy.",
    ano: 1813,
    autor: "Jane Austen"
  },
  {
    id: 13,
    src: "https://picsum.photos/seed/livro-013/300/450",
    titulo: "1984",
    descricao: "Distopia sobre uma sociedade controlada por um governo que vigia constantemente seus cidadãos.",
    ano: 1949,
    autor: "George Orwell"
  },
  {
    id: 14,
    src: "https://picsum.photos/seed/livro-014/300/450",
    titulo: "A Divina Comédia",
    descricao: "Poema épico que narra a viagem de Dante pelo Inferno, Purgatório e Paraíso.",
    ano: 1320,
    autor: "Dante Alighieri"
  },
  {
    id: 15,
    src: "https://picsum.photos/seed/livro-015/300/450",
    titulo: "A Ilíada",
    descricao: "Poema épico atribuído a Homero que apresenta acontecimentos da Guerra de Troia.",
    ano: -750,
    autor: "Homero"
  },
  {
    id: 16,
    src: "https://picsum.photos/seed/livro-016/300/450",
    titulo: "A Odisseia",
    descricao: "Poema épico que acompanha a longa viagem de retorno de Ulisses para sua terra natal.",
    ano: -700,
    autor: "Homero"
  },
  {
    id: 17,
    src: "https://picsum.photos/seed/livro-017/300/450",
    titulo: "Édipo Rei",
    descricao: "Tragédia grega sobre um rei que tenta descobrir a verdade por trás de uma antiga profecia.",
    ano: -429,
    autor: "Sófocles"
  },
  {
    id: 18,
    src: "https://picsum.photos/seed/livro-018/300/450",
    titulo: "Metamorfoses",
    descricao: "Poema que reúne diversas histórias mitológicas envolvendo transformações.",
    ano: 8,
    autor: "Ovídio"
  },
  {
    id: 19,
    src: "https://picsum.photos/seed/livro-019/300/450",
    titulo: "A República",
    descricao: "Obra filosófica que discute justiça, política, educação e organização da sociedade.",
    ano: -380,
    autor: "Platão"
  },
  {
    id: 20,
    src: "https://picsum.photos/seed/livro-020/300/450",
    titulo: "A Arte da Guerra",
    descricao: "Tratado clássico sobre estratégia, planejamento, liderança e conflitos militares.",
    ano: -500,
    autor: "Sun Tzu"
  },

  {
    id: 21,
    src: "https://picsum.photos/seed/livro-021/300/450",
    titulo: "O Retrato de Dorian Gray",
    descricao: "Um jovem deseja manter sua juventude enquanto um retrato passa a revelar as marcas de suas escolhas.",
    ano: 1890,
    autor: "Oscar Wilde"
  },
  {
    id: 22,
    src: "https://picsum.photos/seed/livro-022/300/450",
    titulo: "A Letra Escarlate",
    descricao: "História ambientada em uma comunidade puritana marcada por julgamentos e conflitos sociais.",
    ano: 1850,
    autor: "Nathaniel Hawthorne"
  },
  {
    id: 23,
    src: "https://picsum.photos/seed/livro-023/300/450",
    titulo: "O Sol é Para Todos",
    descricao: "Uma jovem observa sua comunidade enquanto seu pai defende um homem acusado injustamente.",
    ano: 1960,
    autor: "Harper Lee"
  },
  {
    id: 24,
    src: "https://picsum.photos/seed/livro-024/300/450",
    titulo: "Admirável Mundo Novo",
    descricao: "Distopia que apresenta uma sociedade organizada por condicionamento e controle social.",
    ano: 1932,
    autor: "Aldous Huxley"
  },
  {
    id: 25,
    src: "https://picsum.photos/seed/livro-025/300/450",
    titulo: "O Grande Gatsby",
    descricao: "Romance sobre riqueza, festas e relações amorosas na sociedade americana dos anos 1920.",
    ano: 1925,
    autor: "F. Scott Fitzgerald"
  },
  {
    id: 26,
    src: "https://picsum.photos/seed/livro-026/300/450",
    titulo: "O Velho e o Mar",
    descricao: "Um velho pescador enfrenta uma longa luta contra um enorme peixe em alto-mar.",
    ano: 1952,
    autor: "Ernest Hemingway"
  },
  {
    id: 27,
    src: "https://picsum.photos/seed/livro-027/300/450",
    titulo: "O Apanhador no Campo de Centeio",
    descricao: "Holden Caulfield narra seus conflitos durante alguns dias de sua adolescência.",
    ano: 1951,
    autor: "J. D. Salinger"
  },
  {
    id: 28,
    src: "https://picsum.photos/seed/livro-028/300/450",
    titulo: "Romeu e Julieta",
    descricao: "Tragédia sobre dois jovens apaixonados que pertencem a famílias rivais.",
    ano: 1597,
    autor: "William Shakespeare"
  },
  {
    id: 29,
    src: "https://picsum.photos/seed/livro-029/300/450",
    titulo: "Hamlet",
    descricao: "Um príncipe busca descobrir a verdade sobre a morte de seu pai.",
    ano: 1600,
    autor: "William Shakespeare"
  },
  {
    id: 30,
    src: "https://picsum.photos/seed/livro-030/300/450",
    titulo: "Macbeth",
    descricao: "Um general escocês é levado pela ambição após ouvir uma profecia sobre seu futuro.",
    ano: 1606,
    autor: "William Shakespeare"
  },

  {
    id: 31,
    src: "https://picsum.photos/seed/livro-031/300/450",
    titulo: "A Garota que Roubava Livros",
    descricao: "Durante a Segunda Guerra Mundial, Liesel encontra nos livros uma forma de enfrentar a realidade.",
    ano: 2005,
    autor: "Markus Zusak"
  },
  {
    id: 32,
    src: "https://picsum.photos/seed/livro-032/300/450",
    titulo: "O Código Da Vinci",
    descricao: "Um professor de simbologia investiga um assassinato ligado a antigos segredos.",
    ano: 2003,
    autor: "Dan Brown"
  },
  {
    id: 33,
    src: "https://picsum.photos/seed/livro-033/300/450",
    titulo: "Anjos e Demônios",
    descricao: "Robert Langdon investiga uma conspiração envolvendo símbolos e uma antiga organização.",
    ano: 2000,
    autor: "Dan Brown"
  },
  {
    id: 34,
    src: "https://picsum.photos/seed/livro-034/300/450",
    titulo: "Coraline",
    descricao: "Uma menina encontra uma passagem para uma versão estranha e perigosa de sua própria casa.",
    ano: 2002,
    autor: "Neil Gaiman"
  },
  {
    id: 35,
    src: "https://picsum.photos/seed/livro-035/300/450",
    titulo: "O Circo da Noite",
    descricao: "Dois jovens mágicos participam de uma competição misteriosa realizada em um circo extraordinário.",
    ano: 2011,
    autor: "Erin Morgenstern"
  },
  {
    id: 36,
    src: "https://picsum.photos/seed/livro-036/300/450",
    titulo: "A Casa dos Espíritos",
    descricao: "Saga familiar que acompanha várias gerações marcadas por acontecimentos políticos e sobrenaturais.",
    ano: 1982,
    autor: "Isabel Allende"
  },
  {
    id: 37,
    src: "https://picsum.photos/seed/livro-037/300/450",
    titulo: "O Menino do Pijama Listrado",
    descricao: "Um menino desenvolve uma amizade inesperada durante a Segunda Guerra Mundial.",
    ano: 2006,
    autor: "John Boyne"
  },
  {
    id: 38,
    src: "https://picsum.photos/seed/livro-038/300/450",
    titulo: "A Menina que Tinha Dons",
    descricao: "Em um futuro devastado, uma menina especial pode ser importante para o futuro da humanidade.",
    ano: 2014,
    autor: "M. R. Carey"
  },
  {
    id: 39,
    src: "https://picsum.photos/seed/livro-039/300/450",
    titulo: "O Estranho Caso do Cachorro Morto",
    descricao: "Um adolescente decide investigar a morte de um cachorro e descobre segredos inesperados.",
    ano: 2003,
    autor: "Mark Haddon"
  },
  {
    id: 40,
    src: "https://picsum.photos/seed/livro-040/300/450",
    titulo: "A Menina que Brincava com Fogo",
    descricao: "Lisbeth Salander se envolve em uma investigação perigosa enquanto tenta provar sua inocência.",
    ano: 2006,
    autor: "Stieg Larsson"
  },

  {
    id: 41,
    src: "https://picsum.photos/seed/livro-041/300/450",
    titulo: "A Sociedade do Anel",
    descricao: "Frodo e seus companheiros iniciam a jornada para destruir o Um Anel.",
    ano: 1954,
    autor: "J. R. R. Tolkien"
  },
  {
    id: 42,
    src: "https://picsum.photos/seed/livro-042/300/450",
    titulo: "As Duas Torres",
    descricao: "A Sociedade do Anel é separada e seus membros enfrentam diferentes perigos.",
    ano: 1954,
    autor: "J. R. R. Tolkien"
  },
  {
    id: 43,
    src: "https://picsum.photos/seed/livro-043/300/450",
    titulo: "O Retorno do Rei",
    descricao: "Os personagens enfrentam a batalha final contra as forças de Sauron.",
    ano: 1955,
    autor: "J. R. R. Tolkien"
  },
  {
    id: 44,
    src: "https://picsum.photos/seed/livro-044/300/450",
    titulo: "O Silmarillion",
    descricao: "Conjunto de histórias que apresenta acontecimentos antigos da Terra-média.",
    ano: 1977,
    autor: "J. R. R. Tolkien"
  },
  {
    id: 45,
    src: "https://picsum.photos/seed/livro-045/300/450",
    titulo: "Contos Inacabados",
    descricao: "Coleção de narrativas relacionadas à história e aos personagens da Terra-média.",
    ano: 1980,
    autor: "J. R. R. Tolkien"
  },
  {
    id: 46,
    src: "https://picsum.photos/seed/livro-046/300/450",
    titulo: "O Nome do Vento",
    descricao: "Kvothe conta sua trajetória desde a infância até se tornar uma figura lendária.",
    ano: 2007,
    autor: "Patrick Rothfuss"
  },
  {
    id: 47,
    src: "https://picsum.photos/seed/livro-047/300/450",
    titulo: "Mistborn",
    descricao: "Uma jovem com poderes especiais se envolve em uma revolta contra um império.",
    ano: 2006,
    autor: "Brandon Sanderson"
  },
  {
    id: 48,
    src: "https://picsum.photos/seed/livro-048/300/450",
    titulo: "O Leão, a Feiticeira e o Guarda-Roupa",
    descricao: "Quatro irmãos encontram uma passagem para o mundo mágico de Nárnia.",
    ano: 1950,
    autor: "C. S. Lewis"
  },
  {
    id: 49,
    src: "https://picsum.photos/seed/livro-049/300/450",
    titulo: "O Guia do Mochileiro das Galáxias",
    descricao: "Arthur Dent é levado para uma aventura pelo espaço pouco antes da destruição da Terra.",
    ano: 1979,
    autor: "Douglas Adams"
  },
  {
    id: 50,
    src: "https://picsum.photos/seed/livro-050/300/450",
    titulo: "Alice no País das Maravilhas",
    descricao: "Alice cai em um mundo fantástico onde encontra criaturas e situações extraordinárias.",
    ano: 1865,
    autor: "Lewis Carroll"
  },

  {
    id: 51,
    src: "https://picsum.photos/seed/livro-051/300/450",
    titulo: "Jogos Vorazes",
    descricao: "Katniss Everdeen é escolhida para participar de uma competição mortal.",
    ano: 2008,
    autor: "Suzanne Collins"
  },
  {
    id: 52,
    src: "https://picsum.photos/seed/livro-052/300/450",
    titulo: "Em Chamas",
    descricao: "Katniss retorna à arena enquanto as consequências dos Jogos começam a atingir Panem.",
    ano: 2009,
    autor: "Suzanne Collins"
  },
  {
    id: 53,
    src: "https://picsum.photos/seed/livro-053/300/450",
    titulo: "A Esperança",
    descricao: "Katniss se torna um símbolo de resistência contra o governo de Panem.",
    ano: 2010,
    autor: "Suzanne Collins"
  },
  {
    id: 54,
    src: "https://picsum.photos/seed/livro-054/300/450",
    titulo: "Harry Potter e a Pedra Filosofal",
    descricao: "Harry descobre que é um bruxo e começa seus estudos em Hogwarts.",
    ano: 1997,
    autor: "J. K. Rowling"
  },
  {
    id: 55,
    src: "https://picsum.photos/seed/livro-055/300/450",
    titulo: "Harry Potter e a Câmara Secreta",
    descricao: "Harry retorna a Hogwarts e enfrenta um novo mistério dentro da escola.",
    ano: 1998,
    autor: "J. K. Rowling"
  },
  {
    id: 56,
    src: "https://picsum.photos/seed/livro-056/300/450",
    titulo: "Harry Potter e o Prisioneiro de Azkaban",
    descricao: "Harry descobre novos segredos sobre o passado de sua família.",
    ano: 1999,
    autor: "J. K. Rowling"
  },
  {
    id: 57,
    src: "https://picsum.photos/seed/livro-057/300/450",
    titulo: "Harry Potter e o Cálice de Fogo",
    descricao: "Harry participa inesperadamente do Torneio Tribruxo.",
    ano: 2000,
    autor: "J. K. Rowling"
  },
  {
    id: 58,
    src: "https://picsum.photos/seed/livro-058/300/450",
    titulo: "Harry Potter e a Ordem da Fênix",
    descricao: "Harry enfrenta novos conflitos enquanto Voldemort volta a agir.",
    ano: 2003,
    autor: "J. K. Rowling"
  },
  {
    id: 59,
    src: "https://picsum.photos/seed/livro-059/300/450",
    titulo: "Harry Potter e o Enigma do Príncipe",
    descricao: "Harry descobre informações importantes sobre o passado de Voldemort.",
    ano: 2005,
    autor: "J. K. Rowling"
  },
  {
    id: 60,
    src: "https://picsum.photos/seed/livro-060/300/450",
    titulo: "Harry Potter e as Relíquias da Morte",
    descricao: "Harry, Ron e Hermione partem em uma missão para derrotar Voldemort.",
    ano: 2007,
    autor: "J. K. Rowling"
  },

  {
    id: 61,
    src: "https://picsum.photos/seed/livro-061/300/450",
    titulo: "Duna",
    descricao: "Paul Atreides chega ao planeta Arrakis em meio a disputas políticas e econômicas.",
    ano: 1965,
    autor: "Frank Herbert"
  },
  {
    id: 62,
    src: "https://picsum.photos/seed/livro-062/300/450",
    titulo: "Fundação",
    descricao: "Um matemático desenvolve um método para prever grandes acontecimentos da humanidade.",
    ano: 1951,
    autor: "Isaac Asimov"
  },
  {
    id: 63,
    src: "https://picsum.photos/seed/livro-063/300/450",
    titulo: "Eu, Robô",
    descricao: "Coletânea de histórias que explora a relação entre humanos e robôs.",
    ano: 1950,
    autor: "Isaac Asimov"
  },
  {
    id: 64,
    src: "https://picsum.photos/seed/livro-064/300/450",
    titulo: "Fahrenheit 451",
    descricao: "Em uma sociedade onde livros são proibidos, um bombeiro começa a questionar seu trabalho.",
    ano: 1953,
    autor: "Ray Bradbury"
  },
  {
    id: 65,
    src: "https://picsum.photos/seed/livro-065/300/450",
    titulo: "Neuromancer",
    descricao: "Um hacker é contratado para realizar um trabalho envolvendo inteligência artificial.",
    ano: 1984,
    autor: "William Gibson"
  },
  {
    id: 66,
    src: "https://picsum.photos/seed/livro-066/300/450",
    titulo: "O Fim da Infância",
    descricao: "Uma misteriosa raça alienígena chega à Terra e transforma profundamente a humanidade.",
    ano: 1953,
    autor: "Arthur C. Clarke"
  },
  {
    id: 67,
    src: "https://picsum.photos/seed/livro-067/300/450",
    titulo: "Solaris",
    descricao: "Cientistas estudam um planeta misterioso coberto por um oceano aparentemente consciente.",
    ano: 1961,
    autor: "Stanislaw Lem"
  },
  {
    id: 68,
    src: "https://picsum.photos/seed/livro-068/300/450",
    titulo: "O Homem do Castelo Alto",
    descricao: "História alternativa que imagina um mundo em que as potências do Eixo venceram a Segunda Guerra.",
    ano: 1962,
    autor: "Philip K. Dick"
  },
  {
    id: 69,
    src: "https://picsum.photos/seed/livro-069/300/450",
    titulo: "O Jogo do Exterminador",
    descricao: "Um jovem prodígio é treinado para comandar uma possível guerra contra uma ameaça alienígena.",
    ano: 1985,
    autor: "Orson Scott Card"
  },
  {
    id: 70,
    src: "https://picsum.photos/seed/livro-070/300/450",
    titulo: "O Conto da Aia",
    descricao: "Em uma sociedade autoritária, mulheres perdem seus direitos e são submetidas a um sistema de controle.",
    ano: 1985,
    autor: "Margaret Atwood"
  },

  {
    id: 71,
    src: "https://picsum.photos/seed/livro-071/300/450",
    titulo: "Crime e Castigo",
    descricao: "Raskólnikov comete um crime e passa a enfrentar suas consequências psicológicas e morais.",
    ano: 1866,
    autor: "Fiódor Dostoiévski"
  },
  {
    id: 72,
    src: "https://picsum.photos/seed/livro-072/300/450",
    titulo: "Os Irmãos Karamázov",
    descricao: "Romance sobre uma família marcada por conflitos, fé, dúvidas e questões morais.",
    ano: 1880,
    autor: "Fiódor Dostoiévski"
  },
  {
    id: 73,
    src: "https://picsum.photos/seed/livro-073/300/450",
    titulo: "Anna Kariênina",
    descricao: "Romance que acompanha relações amorosas, conflitos familiares e a sociedade russa.",
    ano: 1878,
    autor: "Liev Tolstói"
  },
  {
    id: 74,
    src: "https://picsum.photos/seed/livro-074/300/450",
    titulo: "Guerra e Paz",
    descricao: "Grande romance que acompanha famílias russas durante as guerras napoleônicas.",
    ano: 1869,
    autor: "Liev Tolstói"
  },
  {
    id: 75,
    src: "https://picsum.photos/seed/livro-075/300/450",
    titulo: "O Estrangeiro",
    descricao: "Meursault vive acontecimentos que o colocam diante de questões sobre existência e sociedade.",
    ano: 1942,
    autor: "Albert Camus"
  },
  {
    id: 76,
    src: "https://picsum.photos/seed/livro-076/300/450",
    titulo: "A Peste",
    descricao: "Uma cidade enfrenta uma epidemia enquanto seus moradores lidam com medo e isolamento.",
    ano: 1947,
    autor: "Albert Camus"
  },
  {
    id: 77,
    src: "https://picsum.photos/seed/livro-077/300/450",
    titulo: "A Metamorfose",
    descricao: "Gregor Samsa acorda transformado em uma criatura estranha e passa a enfrentar o afastamento da família.",
    ano: 1915,
    autor: "Franz Kafka"
  },
  {
    id: 78,
    src: "https://picsum.photos/seed/livro-078/300/450",
    titulo: "O Processo",
    descricao: "Josef K. é envolvido em um processo misterioso sem saber exatamente qual é sua acusação.",
    ano: 1925,
    autor: "Franz Kafka"
  },
  {
    id: 79,
    src: "https://picsum.photos/seed/livro-079/300/450",
    titulo: "Cem Anos de Solidão",
    descricao: "A história de várias gerações da família Buendía na cidade fictícia de Macondo.",
    ano: 1967,
    autor: "Gabriel García Márquez"
  },
  {
    id: 80,
    src: "https://picsum.photos/seed/livro-080/300/450",
    titulo: "O Amor nos Tempos do Cólera",
    descricao: "História de um amor que atravessa décadas e diferentes fases da vida dos personagens.",
    ano: 1985,
    autor: "Gabriel García Márquez"
  },

  {
    id: 81,
    src: "https://picsum.photos/seed/livro-081/300/450",
    titulo: "O Alquimista",
    descricao: "Santiago parte em busca de um tesouro e aprende sobre sonhos, escolhas e propósito.",
    ano: 1988,
    autor: "Paulo Coelho"
  },
  {
    id: 82,
    src: "https://picsum.photos/seed/livro-082/300/450",
    titulo: "Ensaio Sobre a Cegueira",
    descricao: "Uma cidade é atingida por uma epidemia de cegueira que transforma completamente a sociedade.",
    ano: 1995,
    autor: "José Saramago"
  },
  {
    id: 83,
    src: "https://picsum.photos/seed/livro-083/300/450",
    titulo: "O Evangelho Segundo Jesus Cristo",
    descricao: "Romance que apresenta uma interpretação literária da vida de Jesus.",
    ano: 1991,
    autor: "José Saramago"
  },
  {
    id: 84,
    src: "https://picsum.photos/seed/livro-084/300/450",
    titulo: "Os Lusíadas",
    descricao: "Poema épico que narra a viagem de Vasco da Gama e celebra acontecimentos da história portuguesa.",
    ano: 1572,
    autor: "Luís de Camões"
  },
  {
    id: 85,
    src: "https://picsum.photos/seed/livro-085/300/450",
    titulo: "Auto da Barca do Inferno",
    descricao: "Peça teatral em que personagens são julgados após a morte por suas ações durante a vida.",
    ano: 1517,
    autor: "Gil Vicente"
  },
  {
    id: 86,
    src: "https://picsum.photos/seed/livro-086/300/450",
    titulo: "Memórias de um Sargento de Milícias",
    descricao: "Romance que acompanha as aventuras de Leonardo em uma sociedade carioca do século XIX.",
    ano: 1854,
    autor: "Manuel Antônio de Almeida"
  },
  {
    id: 87,
    src: "https://picsum.photos/seed/livro-087/300/450",
    titulo: "A Moreninha",
    descricao: "Romance romântico sobre Augusto e sua relação com Carolina.",
    ano: 1844,
    autor: "Joaquim Manuel de Macedo"
  },
  {
    id: 88,
    src: "https://picsum.photos/seed/livro-088/300/450",
    titulo: "Senhora",
    descricao: "Aurélia Camargo usa sua riqueza para confrontar questões de amor, casamento e interesse.",
    ano: 1875,
    autor: "José de Alencar"
  },
  {
    id: 89,
    src: "https://picsum.photos/seed/livro-089/300/450",
    titulo: "O Guarani",
    descricao: "Romance indianista que acompanha Peri e sua relação com Cecília.",
    ano: 1857,
    autor: "José de Alencar"
  },
  {
    id: 90,
    src: "https://picsum.photos/seed/livro-090/300/450",
    titulo: "Memorial de Aires",
    descricao: "Diário de um diplomata aposentado que observa pessoas e acontecimentos ao seu redor.",
    ano: 1908,
    autor: "Machado de Assis"
  },

  {
    id: 91,
    src: "https://picsum.photos/seed/livro-091/300/450",
    titulo: "Sagarana",
    descricao: "Coletânea de contos que apresenta personagens e histórias ambientadas no sertão brasileiro.",
    ano: 1946,
    autor: "João Guimarães Rosa"
  },
  {
    id: 92,
    src: "https://picsum.photos/seed/livro-092/300/450",
    titulo: "Macunaíma",
    descricao: "Narrativa modernista que acompanha as aventuras de Macunaíma, apresentado como um herói brasileiro.",
    ano: 1928,
    autor: "Mário de Andrade"
  },
  {
    id: 93,
    src: "https://picsum.photos/seed/livro-093/300/450",
    titulo: "Triste Fim de Policarpo Quaresma",
    descricao: "Romance que acompanha Policarpo Quaresma e suas ideias sobre o Brasil.",
    ano: 1915,
    autor: "Lima Barreto"
  },
  {
    id: 94,
    src: "https://picsum.photos/seed/livro-094/300/450",
    titulo: "O Ateneu",
    descricao: "Sérgio relembra sua experiência em um internato marcado por conflitos e relações sociais.",
    ano: 1888,
    autor: "Raul Pompeia"
  },
  {
    id: 95,
    src: "https://picsum.photos/seed/livro-095/300/450",
    titulo: "Clara dos Anjos",
    descricao: "Romance que acompanha Clara e aborda questões sociais e raciais da sociedade brasileira.",
    ano: 1948,
    autor: "Lima Barreto"
  },
  {
    id: 96,
    src: "https://picsum.photos/seed/livro-096/300/450",
    titulo: "A Paixão Segundo G.H.",
    descricao: "Uma mulher passa por uma experiência inesperada que provoca profundas reflexões sobre sua existência.",
    ano: 1964,
    autor: "Clarice Lispector"
  },
  {
    id: 97,
    src: "https://picsum.photos/seed/livro-097/300/450",
    titulo: "São Bernardo",
    descricao: "Paulo Honório conta sua trajetória de ascensão social e suas relações pessoais.",
    ano: 1934,
    autor: "Graciliano Ramos"
  },
  {
    id: 98,
    src: "https://picsum.photos/seed/livro-098/300/450",
    titulo: "Fogo Morto",
    descricao: "Romance que retrata a decadência dos engenhos de açúcar e de seus antigos proprietários.",
    ano: 1943,
    autor: "José Lins do Rego"
  },
  {
    id: 99,
    src: "https://picsum.photos/seed/livro-099/300/450",
    titulo: "Morte e Vida Severina",
    descricao: "Poema dramático que acompanha a jornada de Severino pelo sertão em direção ao litoral.",
    ano: 1955,
    autor: "João Cabral de Melo Neto"
  },
  {
    id: 100,
    src: "https://picsum.photos/seed/livro-100/300/450",
    titulo: "O Quinze",
    descricao: "Romance que retrata os efeitos da grande seca de 1915 sobre diferentes personagens.",
    ano: 1930,
    autor: "Rachel de Queiroz"
  }
];

export default livrosRecente;