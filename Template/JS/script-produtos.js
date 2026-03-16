
btnNovo = document.querySelector(".novo-produto");
containerProdutos = document.querySelector(".container-produtos");
produtos = containerProdutos.querySelectorAll(".produto");

btnNovo.addEventListener('click', function(e){
    e.preventDefault();
    
});

for(const produto of produtos){
    
    produto.addEventListener('click', function(e){
        e.preventDefault();
        
    });
}