//CONSTANTES GERAIS / DESKTOP
const imagemGrande = document.querySelector("#container-imagem-grande")
const containerPrincipal = document.querySelector("#container-principal")
const subContainerNav = document.querySelector("#subcontainer-nav")
const imagemGrandeFoco = document.querySelector("#container-imagem-grande-foco")
const containerImagensFoco = document.querySelector("#container-imagens-foco")
const imagem1 = document.querySelector("#imagem1"); const imagem2 = document.querySelector("#imagem2"); const imagem3 = document.querySelector("#imagem3"); const imagem4 = document.querySelector("#imagem4"); const imagem1Foco = document.querySelector("#imagem1-foco"); const imagem2Foco = document.querySelector("#imagem2-foco"); const imagem3Foco = document.querySelector("#imagem3-foco"); const imagem4Foco = document.querySelector("#imagem4-foco")
const footer = document.querySelector(".attribution")
const fechar = document.querySelector("#icone-close")
const botaoNext = document.querySelector("#next-button"); const botaoPrevious = document.querySelector("#previous-button")
const quantidadeItens = document.querySelector("#quantidade-itens")
const botaoPlus = document.querySelector("#plus"); const botaoMinus = document.querySelector("#minus")
const containerCarrinho = document.querySelector("#container-carrinho")
const botaoCarrinho = document.querySelector("#btn-adicionar-carrinho")
const iconeCarrinho = document.querySelector("#icone-carrinho-compras")
const carrinhoCheio = document.querySelector("#carrinho-cheio")
const carrinhoVazio = document.querySelector("#carrinho-vazio")
const quantItensCarrinho = document.querySelector("#quantidade-itens-carrinho")
const valorCarrinho = document.querySelector("#valor-carrinho")
const iconeLixeiraCarrinho = document.querySelector("#icone-lixeira-carrinho")
const botaoCheckout = document.querySelector("#btn-checkout")
///////////////////////////////////////////////////////////////////////////

//CONSTANTES MOBILES
const containerMobileFoto = document.querySelector("#container-imagem-foco-icones")
const botaoMenu = document.querySelector("#icone-menu")
const containerNavegacaoMobile = document.querySelector("#sub-container-navegacao")
const fundo = document.querySelector("#fundo")
const iconeCloseNav = document.querySelector("#icone-close-nav")

if (window.matchMedia("(min-width: 1110px)").matches) {

    
    // ALTERAR ENTRE IMAGENS 
    
    const alterarEntreImagens = (imgGrande, img1, img2, img3, img4) =>{
        img1.addEventListener("click", (e) => {
            imgGrande.style.backgroundImage = 'url("src/images/image-product-1.jpg")'
            console.log("Cliquei aqui")
        })
        img2.addEventListener("click", (e) => {
            imgGrande.style.backgroundImage = 'url("src/images/image-product-2.jpg")'
            console.log("Cliquei aqui")
        })
        img3.addEventListener("click", (e) => {
            imgGrande.style.backgroundImage = 'url("src/images/image-product-3.jpg")'
            console.log("Cliquei aqui")
        })
        img4.addEventListener("click", (e) => {
            imgGrande.style.backgroundImage = 'url("src/images/image-product-4.jpg")'
            console.log("Cliquei aqui")
        })
        
    }
    
    
    
    
    // ALTERAR ENTRE IMAGENS PELO BOTÃO
    
    const alterarImagensBotao = () => {
        let variavel = 2
        
        
        botaoNext.addEventListener("click", () =>{
            let varImagens = `url("src/images/image-product-${variavel}.jpg")`
            if(variavel === 4) {
                variavel = 1
            } else{
                variavel += 1
            }
            
            imagemGrandeFoco.style.backgroundImage = varImagens
            
        })
        
        
        botaoPrevious.addEventListener("click", () =>{
            let varImagens = `url("src/images/image-product-${variavel}.jpg")`
            if(variavel === 1) {variavel = 4 } else{variavel -= 1}
            
            imagemGrandeFoco.style.backgroundImage = varImagens
        })
    }
    
    
    
    //IMAGEM PRINCIPAL FOCO
    imagemGrande.addEventListener("click", (e) => {
        containerImagensFoco.style.height = "120vh"
        containerImagensFoco.style.width = "100vw"
        footer.style.display = "none"
        alterarEntreImagens(imagemGrandeFoco, imagem1Foco, imagem2Foco, imagem3Foco, imagem4Foco)
        fechar.addEventListener("click", () =>{
            containerImagensFoco.style.height = "0vh"
            containerImagensFoco.style.width = "0vw"
        })
        
        
        
        
    })
    
    
    //ALTERAR A QUANTIDADE DE ITENS ESCOLHIDOS
    
    class QuantItens{
        constructor(){
            this.quantidade = 0
        }
    
        aumentarQuantidade(){
            this.quantidade += 1
        }
    
        diminuirQuantidade(){
            if(this.quantidade === 0) return this.quantidade = 0
            this.quantidade -= 1
        }
    
    }
    
    let varQuantidadeItens = new QuantItens
    quantidadeItens.innerHTML = varQuantidadeItens.quantidade
    botaoPlus.addEventListener("click", () =>{
        varQuantidadeItens.aumentarQuantidade()
        quantidadeItens.innerHTML = varQuantidadeItens.quantidade
    })
    
    botaoMinus.addEventListener("click", () =>{
        varQuantidadeItens.diminuirQuantidade()
        quantidadeItens.innerHTML = varQuantidadeItens.quantidade
    })
    
    
    
    
    
    
    // ABRIR E FECHAR CARRINHO
    iconeCarrinho.addEventListener("click", () =>{
        if (containerCarrinho.classList.contains("oculto")) {
            // Se estiver presente, remove a classe
            containerCarrinho.classList.remove("oculto");
            
        } else {
            // Caso contrário, adiciona a classe
            containerCarrinho.classList.add("oculto");
          }
        
        
          containerPrincipal.addEventListener("click", () =>{
              if (!containerCarrinho.classList.contains("oculto")) {
                  // Se estiver presente, remove a classe
                  containerCarrinho.classList.add("oculto")
                } 
          })
          subContainerNav.addEventListener("click", () =>{
              if (!containerCarrinho.classList.contains("oculto")) {
                  // Se estiver presente, remove a classe
                  containerCarrinho.classList.add("oculto")
                } 
          })
    
    
    })
    
    
    let htmlteste = document.getElementById("container-produto")
    let htmlConteudo = htmlteste.innerHTML
    
    
    //ADICIONAR ITENS AO CARRINHO
    
    
    botaoCarrinho.addEventListener("click",(e) =>{
        e.preventDefault()
        
        if(varQuantidadeItens.quantidade > 0){
            if(varQuantidadeItens.quantidade === 1){
                carrinhoCheio.style.display = "flex"
                carrinhoVazio.classList.add("oculto")
                quantItensCarrinho.innerHTML = ""
                valorCarrinho.innerHTML = "125.00"
                botaoCheckout.classList.remove("oculto")
            }
            if(varQuantidadeItens.quantidade > 1){
                carrinhoCheio.style.display = "flex"
                carrinhoVazio.classList.add("oculto")
                quantItensCarrinho.innerHTML = `x ${varQuantidadeItens.quantidade}`
                valorCarrinho.innerHTML = `$${125.00 * varQuantidadeItens.quantidade},00`
                botaoCheckout.classList.remove("oculto")
            }
        }
        iconeLixeiraCarrinho.addEventListener("click", () =>{
            carrinhoCheio.style.display = "none"
            carrinhoVazio.classList.remove("oculto")
            botaoCheckout.classList.add("oculto")
            
        })
    })
    

    
    alterarEntreImagens(imagemGrande, imagem1, imagem2, imagem3, imagem4)
    alterarImagensBotao()
    
}


if (window.matchMedia("(min-width: 320px) and (max-width: 1099px)").matches) {
    


    const alterarImagensBotao = () => {
        let variavel = 2
        
        //ALTERAR FOTO PRINCIPAL
        botaoNext.addEventListener("click", () =>{
            let varImagens = `url("src/images/image-product-${variavel}.jpg")`
            if(variavel === 4) {
                variavel = 1
            } else{
                variavel += 1
            }
            
            containerMobileFoto.style.backgroundImage = varImagens
            
        })
        
        
        botaoPrevious.addEventListener("click", () =>{
            let varImagens = `url("src/images/image-product-${variavel}.jpg")`
            if(variavel === 1) {variavel = 4 } else{variavel -= 1}
            
            containerMobileFoto.style.backgroundImage = varImagens
        })
    }


    //CHAMAR E FECHAR O MENU
    botaoMenu.addEventListener("click", () => {
        containerNavegacaoMobile.style.display = "flex"
        fundo.style.display = "initial"

        iconeCloseNav.addEventListener("click", () =>{
            containerNavegacaoMobile.style.display = "none"
            fundo.style.display = "none"
        })

    })


    //QUANTIDADE DE ITENS

    class QuantItens{
        constructor(){
            this.quantidade = 0
        }
    
        aumentarQuantidade(){
            this.quantidade += 1
        }
    
        diminuirQuantidade(){
            if(this.quantidade === 0) return this.quantidade = 0
            this.quantidade -= 1
        }
    
    }
    
    let varQuantidadeItens = new QuantItens
    quantidadeItens.innerHTML = varQuantidadeItens.quantidade
    botaoPlus.addEventListener("click", () =>{
        varQuantidadeItens.aumentarQuantidade()
        quantidadeItens.innerHTML = varQuantidadeItens.quantidade
    })
    
    botaoMinus.addEventListener("click", () =>{
        varQuantidadeItens.diminuirQuantidade()
        quantidadeItens.innerHTML = varQuantidadeItens.quantidade
    })



    //ABRIR E FECHAR O CARRINHO

    iconeCarrinho.addEventListener("click", () =>{
        if (containerCarrinho.classList.contains("oculto")) {
            // Se estiver presente, remove a classe
            containerCarrinho.classList.remove("oculto");
          } else {
            // Caso contrário, adiciona a classe
            containerCarrinho.classList.add("oculto");
          }
        
        
          containerPrincipal.addEventListener("click", () =>{
              if (!containerCarrinho.classList.contains("oculto")) {
                  // Se estiver presente, remove a classe
                  containerCarrinho.classList.add("oculto")
                } 
          })
          subContainerNav.addEventListener("click", () =>{
              if (!containerCarrinho.classList.contains("oculto")) {
                  // Se estiver presente, remove a classe
                  containerCarrinho.classList.add("oculto")
                } 
          })
    
    
    })



    botaoCarrinho.addEventListener("click",(e) =>{
        e.preventDefault()
        
        if(varQuantidadeItens.quantidade > 0){
            if(varQuantidadeItens.quantidade === 1){
                carrinhoCheio.style.display = "flex"
                carrinhoVazio.classList.add("oculto")
                quantItensCarrinho.innerHTML = ""
                valorCarrinho.innerHTML = "125.00"
                botaoCheckout.classList.remove("oculto")
            }
            if(varQuantidadeItens.quantidade > 1){
                carrinhoCheio.style.display = "flex"
                carrinhoVazio.classList.add("oculto")
                quantItensCarrinho.innerHTML = `x ${varQuantidadeItens.quantidade}`
                valorCarrinho.innerHTML = `$${125.00 * varQuantidadeItens.quantidade},00`
                botaoCheckout.classList.remove("oculto")
            }
        }
        iconeLixeiraCarrinho.addEventListener("click", () =>{
            carrinhoCheio.style.display = "none"
            carrinhoVazio.classList.remove("oculto")
            botaoCheckout.classList.add("oculto")
            
        })
    })
    

    alterarImagensBotao()
}


