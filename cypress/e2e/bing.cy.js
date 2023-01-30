describe('Realizar pesquisas no Bing', () => {
    it.only('Realizar várias pesquisas', () => {
      // Escreva o código do teste aqui
      const pokemons = [
        'Ivysaur',
        'Venusaur',
        'Charmander',
        'Charmeleon',
        'Charizard',
        'Squirtle',
        'Wartortle',
        'Blastoise',
        'Caterpie',
        'Metapod',
        'Butterfree',
        'Weedle',
        'Kakuna',
        'Beedrill',
        'Pidgey',
        'Pidgeotto',
        'Pidgeot',
        'Rattata',
        'Raticate',
        'Spearow',
        'Fearow',
        'Ekans',
        'Arbok',
        'Pikachu',
        'Raichu',
        'Sandshrew',
        'Sandslash',
        'Nidoran♀',
        'Nidorina',
        'Nidoqueen',
        'Nidoran♂',
        'Nidorino',
        'Nidoking',
        'Clefairy',
        'Clefable',
        'Vulpix',
        'Ninetales',
        'Jigglypuff',
        'Wigglytuff',
        'Zubat',
        'Golbat',
        'Oddish',
        'Gloom',
        'Vileplume',
        'Paras',
        'Parasect',
        'Venonat',
        'Venomoth',
        'Diglett',
        'Dugtrio',
        'Meowth',
        'Persian',
        'Psyduck',
        'Golduck',
        'Mankey',
        'Primeape',
        'Growlithe',
        'Arcanine',
        'Poliwag',
        'Poliwhirl',
        'Poliwrath',
        'Abra',
        'Kadabra',
        'Alakazam'
      ];
      
    cy.viewport(1280,720)
    cy.visit('https://www.bing.com/search?q=bulbasaur')
    cy.wait(5000)
    cy.get('#bnp_btn_accept').then(($btn) => {
        if ($btn.is(":enabled")) {
            cy.wrap($btn).click() //Button is enabled
        } else {
            //Button is disabled
        }
    })
    cy.wait(5000)
    for (let i = 0; i < pokemons.length; i++) 
        {            
            cy.get('#sb_form_q').clear().type(pokemons[i])
            cy.get('#sb_form_go').click()
            cy.wait(1000)
        }    
  });
})