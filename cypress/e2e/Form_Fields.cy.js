
describe('Form Fields', () => {

    let savedUrl;
    it('Form Testing', () => {
      cy.visit('https://practice-automation.com/form-fields/')

      cy.get('.wp-block-jetpack-contact-form > .grunion-field-name-wrap > #g1103-name').type('Adamo')

      cy.get('#g1103-whatisyourfavoritedrink-Wine').click()
      // JAK SPRAWIDZIĆ CZY CHECKBOX JEST ZAZNACZONY?
      cy.get('#g1103-whatisyourfavoritedrink-Wine').should('be.checked')

      // zazanaczenie checkboxa z kolorem
      cy.get('#g1103-whatisyourfavoritecolor-Red').click()
      cy.get('#g1103-whatisyourfavoritecolor-Red').should('be.checked')
      /// zmiana na inny kolor
      cy.get('#g1103-whatisyourfavoritecolor-Green')
        .click()
        .should('be.checked')

        // sprawdzenie czy checkbox został odznaczony
        cy.get('#g1103-whatisyourfavoritecolor-Red').should('not.be.checked')

        // sprawdzenie zawartości listy 
        cy.get('.wp-block-jetpack-contact-form > :nth-child(6) > :nth-child(1)').should('contain', 'Falcon')
        cy.get('.wp-block-jetpack-contact-form > :nth-child(6) > :nth-child(2)').should('contain', 'Eagle')
        cy.get('.wp-block-jetpack-contact-form > :nth-child(6) > :nth-child(3)').should('contain', 'Horsefly')
        cy.get('.wp-block-jetpack-contact-form > :nth-child(6) > :nth-child(4)').should('contain', 'Cheetah')

        //sprawdzenie listy rozwijanej
        cy.get('#g1103-doyouhaveanysiblings-button').should('contain', '(make a selection)')
        cy.get('#g1103-doyouhaveanysiblings-button').click()
        cy.get('#ui-id-3').click()

        // sprawdzenie zmiany stanu listy rozwijanej po wybraniu opcji
        cy.get('#g1103-doyouhaveanysiblings-button').should('contain', 'No')

        // ponowne otwarcie listy rozwijanej i wybranie innej opcji i sprawdzenie zmiany stanu
        cy.get('#g1103-doyouhaveanysiblings-button').click()
        cy.get('#ui-id-2').click()

        cy.get('#g1103-doyouhaveanysiblings-button').should('contain', 'Yes')


        cy.get('#email').type('adamo@adamo.xz')

        cy.get('#contact-form-comment-message').type('To jest wiadomość testowa')

        cy.get('.entry-content > [data-test="contact-form"] > .contact-form > .contact-submit > .pushbutton-wide').click().wait(3000)

        //// zapisanie url 
        cy.url().then(url => {
            savedUrl = url 
        })

    })




    it('Summary Check', () => {

    expect(savedUrl).to.not.be.undefined
    cy.visit(savedUrl)

    cy.get('.contact-form-submission > :nth-child(5)').should('contain', 'Adamo')

    cy.get('.contact-form-submission > :nth-child(9)').should('contain', 'Wine')

    cy.get('.contact-form-submission > :nth-child(13)').should('contain', 'Green')
    
    cy.get('.contact-form-submission > :nth-child(17)').should('contain', 'Yes')

    cy.get('.contact-form-submission > :nth-child(21)').should('contain', 'adamo@adamo.xz')

    cy.get('.contact-form-submission > :nth-child(25)').should('contain', 'To jest wiadomość testowa')
    })
    })  
