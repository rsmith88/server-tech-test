describe('Storing and retrieving data', () => {
  it ('stores and retrieves data; can send as body of response', () => {
    let testKey = 'testKey'
    let testValue = 'testValue'

    cy.request(`http://localhost:4000/set?${testKey}=${testValue}`)
    cy.request(`http://localhost:4000/get?key=${testKey}`)
      .its('body').should('equal', testValue)

  })



})
