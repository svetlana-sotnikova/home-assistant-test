import { login, password } from './secret';

describe('Registration', () => {
  it('successfully passes', () => {
    cy.visit('/');

    cy.get('ha-selector-text').contains('Имя').find('input').type(login);

    cy.contains('Пароль').type(password);

    cy.contains('Подтвердите пароль').type(password);

    cy.get('mwc-button').find('button').click();

    cy.get('input[name="name"]')
      .clear({ force: true })
      .type('Test Home', { force: true });

    cy.get('mwc-button').contains('Далее').click();

    cy.contains('Share anonymized', { timeout: 30000 });

    cy.get('mwc-button').contains('Далее').should('be.visible').click();

    cy.contains('Устройства и службы', { timeout: 30000 });

    cy.get('.footer').find('mwc-button').contains('Готово').click();
  });
});
