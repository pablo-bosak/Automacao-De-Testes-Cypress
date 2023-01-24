/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Carrinho', () => {
    
    it('Deve acessar o site da loja Magento realizar e realizar cadastro', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.content > p').should('have.text', 'This is a demo store. No orders will be fulfilled.')
        cy.get('.panel > .header > :nth-child(3) > a').click()

        cy.get('.base').should('have.text', 'Create New Customer Account')
        cy.get('.info > .legend > span').should('have.text','Personal Information')
        cy.get('#firstname').type(faker.name.firstName())
        cy.get('#lastname').type(faker.name.lastName())                                                                                                                             
        cy.get('.account > .legend > span').should('have.text', 'Sign-in Information')
        cy.get('#email_address').type(faker.internet.email())
        cy.get('#password').type('Senha12345678.')
        cy.get('#password-confirmation').type('Senha12345678.')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()

        cy.get('.base').should('have.text', 'My Account')
        cy.get('.block-dashboard-addresses > .block-title > strong').should('have.text', 'Address Book')
        cy.get('.box-billing-address > .box-title > span').should('have.text', 'Default Billing Address')
        cy.get('.box-billing-address > .box-actions > .action > span').click()

        cy.get('.base').should('have.text', 'Add New Address')
        cy.get(':nth-child(1) > .legend > span').should('have.text', 'Contact Information')
        cy.get('#telephone').type(faker.phone.phoneNumber())
        cy.get(':nth-child(2) > .legend > span').should('have.text', 'Address')
        cy.get('#country').select('Brazil')
        cy.get('#region_id').select('Rio de Janeiro')
        cy.get('#city').type('Rio de Janeiro')
        cy.get('#zip').type(faker.address.zipCode())
        cy.get('#street_1').type(faker.address.streetName())
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.base').should('have.text','Address Book')

        cy.get('#ui-id-6 > :nth-child(2)').click()
        cy.get('.base').should('have.text','Gear')
        cy.get('dd > .items > :nth-child(3) > a').click()
        cy.get('.base').should('have.text','Watches')        
        cy.get(':nth-child(5) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('.base').should('have.text','Dash Digital Watch')
        cy.get('#product-addtocart-button > span').click()
        cy.get('.logo > img').click()

        cy.get('.showcart').click()
        cy.get('.base').should('have.text', 'Shopping Cart')
        cy.get('.summary').should('have.text', 'Summary')
        cy.get('#block-shipping > .title').click()
        cy.get('.item > span').should('have.text', 'Item')
        cy.get('thead > tr > .subtotal > span').should('have.text', 'Subtotal')         
        cy.wait(6000)
        cy.get('.mark > strong').should('have.text', 'Order Total')
        cy.get('.checkout-methods-items > :nth-child(1) > .action').click()
        
        cy.wait(6000)
        cy.get('#shipping > .step-title').should('have.text', 'Shipping Address')
        cy.get('.checkout-shipping-method > .step-title').should('have.text', 'Shipping Methods')
        cy.get('.button').click()
        cy.wait(6000)

        cy.get('.payment-group > .step-title').should('have.text', 'Payment Method')
        cy.wait(6000)
        cy.get('span.title').should('have.text', 'Order Summary')        
        cy.wait(2000)
        cy.get('.payment-method-content > .actions-toolbar > div.primary > .action').click()

        cy.get('.base').should('have.text', 'Thank you for your purchase!')
    })
});