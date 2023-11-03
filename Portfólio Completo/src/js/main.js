//Geral
const subtitulosPag = document.querySelectorAll(".subtitulos")
const mainHTML = document.querySelector("main")

//Nav
const subContainerNavHero = document.querySelector("#subcontainer-nav-hero")
const linksNav = document.querySelectorAll(".links-nav")
const iconesNav = document.querySelectorAll(".tamanho-icones")
const iconeMenu = document.querySelector("#icone-menu")
const iconeCloseMenu = document.querySelector("#icone-close-nav")
const containerNav = document.querySelector("#container-navbar-hamburger")
const contatoNavHamburguer = document.querySelector("#contato-nav-hamburguer")

//HeroBanner
const containerHeroBanner = document.querySelector("#container-hero-banner")


//Sobre mim
const paragrafoSobreMim = document.querySelector("#subcontainer-sobremim p")
const subContainerSobreMim = document.querySelector("#subcontainer-sobremim")


//Projetos
const containerProjetosFront = document.querySelectorAll(".container-texto-projeto")
const containerProjetosBack = document.querySelectorAll(".container-projeto-backend")
const titulosProjetosFront = document.querySelectorAll(".container-texto-projeto h1")
const titulosProjetosBack= document.querySelectorAll(".subcontainer-backend-texto h1")
const containerProjetoGitHub = document.querySelectorAll(".container-projeto-github a p")
const imagensProjeto = document.querySelectorAll(".imagens-projeto")
const iconesProjeto = document.querySelectorAll(".links-projetos a svg, .icone-link-site")




//Serviços
const iconesServicos = document.querySelectorAll(".icones-servicos")
const tituloServicos = document.querySelectorAll(".titulo-servicos")
const containerServicos = document.querySelectorAll(".container-servico")
const paragrafoServicos = document.querySelectorAll(".paragrafo-servico")



//Habilidades
const hoverHabilidadesTexto = document.querySelectorAll(".descricao-tecnologia")
const hoverHabilidadesImagem = document.querySelectorAll(".container-tecnologias-imagem img")
const iconeNextClaro = document.querySelector("#next-claro")
const iconeNextEscuro = document.querySelector("#next-escuro")



//Entre em contato
const setaDireitaCtt = document.querySelector("#setaEntreEmContato")
const tituloGrandeCtt = document.querySelector("#tituloPrincipalEntreEmContato")
const paragrafoCtt = document.querySelector("#textoEntreEmContato")



//Footer
const Footer = document.querySelector("footer p")










// Rolagem do icone do mouse no hero
document.querySelector('.scroll-icon').addEventListener('click', function() {
    window.scrollBy({
        top: 83 * window.innerHeight / 100,
        behavior: 'smooth'
    });
});

// Animação de rolagem da nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      const offset = 80;
  
      if (target) {
        const targetTop = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
        top: targetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });
  



  //Animação icones mobile
  const corPreto = "#0f0f0f"
  const corBranca = "#f5f5f5" 

  hoverHabilidadesImagem.forEach((imagem, indice) => {
    imagem.addEventListener("mouseover", () =>{
      hoverHabilidadesTexto[indice].style.color = corPreto
    
      }

  )
  })

  hoverHabilidadesImagem.forEach(imagem => {
    imagem.addEventListener("mouseout", () =>{
      hoverHabilidadesTexto.forEach(texto =>{
        texto.style.color = "transparent"
      })
    })
  })

  iconeNextEscuro.style.backgroundColor = corBranca
  iconeNextEscuro.style.borderRadius = "50%"
  iconeNextEscuro.style.border = `3px solid ${corBranca}`







  //ABRIR E FECHAR MENU HAMBURGUER
  iconeMenu.addEventListener("click", () =>{
    containerNav.style.display = "flex"

    iconeCloseMenu.addEventListener("click", () =>{
      containerNav.style.display = "none"
      
  } )

    linksNav.forEach(link => {
      link.addEventListener("click", () =>{
        containerNav.style.display = "none"
      })
    })

    mainHTML.addEventListener("click", ()=>{
      containerNav.style.display = "none"
    })
    containerHeroBanner.addEventListener("click", ()=>{
      containerNav.style.display = "none"
    })
    
} )

  // HOVER SOBRE AS IMAGENS DO PROJETO
    imagensProjeto.forEach(projeto => {
  projeto.addEventListener("mouseover", () =>{
    projeto.style.width = "red"
  })
})



  


const ativarModoEscuro = () => {
  const corPreto = "#0f0f0f"
  const corBranca = "#f5f5f5" 
    //Geral
    document.body.style.backgroundColor = corPreto,
    document.body.style.color = corBranca 
    subtitulosPag.forEach(titulo => {
        titulo.style.color = corBranca
    })



    //Nav
    subContainerNavHero.style.backgroundColor = corPreto
    linksNav.forEach(link => {
        link.style.color = corBranca
    })
    iconesNav.forEach(img => {
      img.style.fill = corBranca
    })
    iconeModoNoturno.style.fill = corBranca
    containerNav.style.backgroundColor = corPreto
    iconeCloseMenu.style.fill = corBranca
    contatoNavHamburguer.style.borderTop =`2px solid ${corBranca}`



    //Sobre mim
    paragrafoSobreMim.style.color = corBranca
    subContainerSobreMim.style.border = "1px solid rgba(255, 255, 255, 0.5)"


    //Projetos
    containerProjetosFront.forEach(container =>{
      container.style.backgroundColor = "#373c3f"
    })
    containerProjetosBack.forEach(container =>{
      container.style.backgroundColor = "#373c3f"
    })
    titulosProjetosFront.forEach(container =>{
      container.style.color = corBranca
    })
    titulosProjetosBack.forEach(container =>{
      container.style.color = corBranca
    })
    containerProjetoGitHub.forEach(container =>{
      container.style.color = corBranca
    })

    iconesProjeto.forEach(icone =>{
      icone.style.fill = corBranca
    })



    //Serviços
    iconesServicos.forEach(icone => {
      icone.style.fill = corBranca
    })
    tituloServicos.forEach(titulo =>{
      titulo.style.color = corBranca
    })
    containerServicos.forEach(container =>{
      container.style.border = "1px solid rgba(255, 255, 255, 0.4)"
    })
    paragrafoServicos.forEach(texto => {
      texto.style.color = corBranca
    })





    //Habilidades
    hoverHabilidadesImagem.forEach((imagem, indice) => {
      imagem.addEventListener("mouseover", () =>{
        hoverHabilidadesTexto[indice].style.color = corBranca
      
        }

    )
    })

    hoverHabilidadesImagem.forEach(imagem => {
      imagem.addEventListener("mouseout", () =>{
        hoverHabilidadesTexto.forEach(texto =>{
          texto.style.color = "transparent"
        })
      })
    })

    iconeNextEscuro.style.backgroundColor = corBranca
    iconeNextEscuro.style.borderRadius = "50%"
    iconeNextEscuro.style.border = `3px solid ${corBranca}`

    // iconeNextClaro.classList.remove("oculto")




    //Entre em contato
    tituloGrandeCtt.style.color = corBranca
    tituloGrandeCtt.addEventListener("mouseover", () => {
      tituloGrandeCtt.style.borderBottom = `7px solid ${corBranca}`

    })
    tituloGrandeCtt.addEventListener("mouseout", () => {
      tituloGrandeCtt.style.borderBottom = `7px solid transparent`


    })


    setaDireitaCtt.style.fill = corBranca
    paragrafoCtt.style.color = corBranca



    //Footer
    Footer.style.backgroundColor = corPreto
    Footer.style.color = corBranca

    console.log(document.body.style.color)
}
// MODO ESCURO






const ativarModoClaro = () => {
  const corPreto = "#0f0f0f"
  const corBranca = "#f5f5f5" 
    //Geral
    document.body.style.backgroundColor = corBranca,
    document.body.style.color = corPreto 
    subtitulosPag.forEach(titulo => {
        titulo.style.color = corPreto
    })



    //Nav
    subContainerNavHero.style.backgroundColor = corBranca
    linksNav.forEach(link => {
        link.style.color = corPreto
    })
    iconesNav.forEach(img => {
      img.style.fill = corPreto
    })
    iconeModoNoturno.style.fill = corPreto
    containerNav.style.backgroundColor = corBranca
    iconeCloseMenu.style.fill = corPreto
    contatoNavHamburguer.style.borderTop =`2px solid ${corPreto}`



    //Sobre mim
    paragrafoSobreMim.style.color = corPreto
    subContainerSobreMim.style.border = "1px solid rgba(255, 255, 255, 0.5)"


    //Projetos
    containerProjetosFront.forEach(container =>{
      container.style.backgroundColor = "#C3D5E0"
    })
    containerProjetosBack.forEach(container =>{
      container.style.backgroundColor = "#C3D5E0"
    })
    titulosProjetosFront.forEach(container =>{
      container.style.color = corPreto
    })
    titulosProjetosBack.forEach(container =>{
      container.style.color = corPreto
    })
    containerProjetoGitHub.forEach(container =>{
      container.style.color = corPreto
    })

    iconesProjeto.forEach(icone =>{
      icone.style.fill = corPreto
    })



    //Serviços
    iconesServicos.forEach(icone => {
      icone.style.fill = corPreto
    })
    tituloServicos.forEach(titulo =>{
      titulo.style.color = corPreto
    })
    containerServicos.forEach(container =>{
      container.style.border = "1px solid rgba(255, 255, 255, 0.4)"
    })
    paragrafoServicos.forEach(texto => {
      texto.style.color = corPreto
    })





    //Habilidades
    hoverHabilidadesImagem.forEach((imagem, indice) => {
      imagem.addEventListener("mouseover", () =>{
        hoverHabilidadesTexto[indice].style.color = corPreto
      
        }

    )
    })

    hoverHabilidadesImagem.forEach(imagem => {
      imagem.addEventListener("mouseout", () =>{
        hoverHabilidadesTexto.forEach(texto =>{
          texto.style.color = "transparent"
        })
      })
    })

    iconeNextEscuro.style.backgroundColor = corBranca
    iconeNextEscuro.style.borderRadius = "50%"
    iconeNextEscuro.style.border = `3px solid ${corBranca}`






    //Entre em contato
    tituloGrandeCtt.style.color = corPreto
    tituloGrandeCtt.addEventListener("mouseover", () => {
      tituloGrandeCtt.style.borderBottom = `7px solid ${corPreto}`

    })
    tituloGrandeCtt.addEventListener("mouseout", () => {
      tituloGrandeCtt.style.borderBottom = `7px solid transparent`


    })


    setaDireitaCtt.style.fill = corPreto
    paragrafoCtt.style.color = corPreto



    //Footer
    Footer.style.backgroundColor = corBranca
    Footer.style.color = corPreto
}






const iconeModoNoturno = document.querySelector("#icone-modo-noturno")
iconeModoNoturno.addEventListener("click", () =>{
  if(document.body.style.color === "rgb(245, 245, 245)"){ ativarModoClaro()}
  else ativarModoEscuro()
  
    
})