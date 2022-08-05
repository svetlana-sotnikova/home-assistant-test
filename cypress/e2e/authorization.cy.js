describe('Authorization', () => {
  it('successfully passes', () => {
    cy.visit('/');
    cy.contains('Готовы');
  });
});
