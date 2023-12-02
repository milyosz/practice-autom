describe('JavaScript Delays', () => {
  it('sprawdzeie czasu opóxnienia', () => {
    cy.visit('https://practice-automation.com/javascript-delays/')

    ///kliknięcie w przycisk start
    cy.get('#start').click().wait(10000)

    // sprawdzenie czy po 10 sekundach pojawił się napis Liftoff!
    cy.get('#delay')
      .should('have.value', 'Liftoff!')




  })
})