describe('Authorization', () => {
  it('successfully passes', () => {
    cy.visit('/');

    cy.get('ha-selector-text').contains('Имя').find('input').type('svetlana');

    cy.contains('Пароль').type('jO!f7_Un09');

    cy.contains('Подтвердите пароль').type('jO!f7_Un09');

    cy.get('mwc-button').find('button').click();
  });
});
