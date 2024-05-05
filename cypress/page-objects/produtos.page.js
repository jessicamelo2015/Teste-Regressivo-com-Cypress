class ProdutoPage{
    fazerLogin(){
            cy.visit('/')
            cy.fixture('perfil').then((dados)=>{
            cy.login(dados.usuario,dados.senha)
            })
    }
    
}export default new ProdutoPage()