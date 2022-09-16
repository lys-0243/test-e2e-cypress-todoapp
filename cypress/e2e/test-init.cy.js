/// <reference types="cypress" />

context ('Initialize ', () => {
 
   it('Je charge la page et verifie si elle est vierge', () => {
    cy.visit('http://localhost:3000/')

    cy.get('.form__button').should('be.disabled')
    cy.contains('La liste des tâches est vide')
    cy.get(':nth-child(1) > span').contains(0)
    cy.get(':nth-child(2) > span').contains(0)

   })

   it('Je tape du texte dans le champ et le btn devient cliquable', () => {

    cy.visit('http://localhost:3000/')

    cy.get('.form > .input_form').type('Ma première tâche')
    cy.get('.form__button').should('not.be.disabled')
    cy.get('.form__button').click()
    cy.get('.form > .input_form').type('Ma lambda')
    cy.get('.form__button').click()
    cy.get('.form > .input_form').type('Ma tâche omega')
    cy.get('.form__button').click()
    cy.get('div.sub_container').find('.Task_task__rKCmn')
   })

   it('Je tape une recherche et je trouve un resultat', () => {
    cy.get('.margin_bottom').type('omeg')
    cy.get('div.sub_container').find('.Task_task__rKCmn')

    cy.get('.margin_bottom').type('ericka')
    cy.get('div.sub_container').contains('Aucune tâche')
    

   })

   it('Je tape du texte dans le champ et le btn devient cliquable', () => {

    cy.visit('http://localhost:3000/')

    cy.get('.form > .input_form').type('Ma première tâche')
    cy.get('.form__button').should('not.be.disabled')
    cy.get('.form__button').click()
    cy.get('.form > .input_form').type('Ma lambda')
    cy.get('.form__button').click()
    cy.get('.form > .input_form').type('Ma tâche omega')
    cy.get('.form__button').click()
    cy.get('div.sub_container').find('.Task_task__rKCmn')

    cy.get('[type="checkbox"]').first().check()
    cy.get('.Task_completed__uXe-U').should('have.css', 'background-color', 'rgb(33, 33, 43)')
   })




})