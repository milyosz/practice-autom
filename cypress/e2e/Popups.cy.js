
describe('Popuos_test', () => {

    let url = 'https://practice-automation.com/popups/'
    it('Test elementu Popup OK', () => {
      cy.visit(url)

      cy.get('.tooltip_1').click()
      cy.get('#myTooltip').should('be.visible').should('contain', 'Cool text').wait(1000)
      cy.get('#myTooltip').click()
      cy.get('#myTooltip').should('not.be.visible')
    })

    it('Test elementu Popup Ok/Cancel', () => {
        cy.visit(url)

      cy.get('#alert').click()

      cy.on('window:alert', function(alertMessage){

        expect(alertMessage).to.contains('Hi there, pal!')
      })

    cy.get('#confirm').click()
    cy.on('window:confirm', function(confirmMessage){
        return false
    })

    cy.get('#confirmResult').contains('Cancel it is!')

    })

    it('Test elementu Popup ', () => {
        cy.visit(url)

      cy.get('#alert').click()

      cy.on('window:alert', function(alertMessage){

        expect(alertMessage).to.contains('Hi there, pal!')
      })

    cy.get('#prompt').click()
    cy.on('window:confirm', function(confirmMessage){ ////// wpisanie tekstu w oknie prompt
        return true
        
    })

    // cy.get('#confirmResult').contains('Cancel it is!')

    })




    

  })