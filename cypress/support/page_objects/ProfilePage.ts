class ProfilePage {
  visit() {
    cy.visit('/profile');
  }

  getSentNumber() {
    return cy.get('.number.sent');
  }

  clickAddMarios() {
    cy.contains("ADD MARIOS").click();
  }

  clickSeeMore() {
    cy.contains("See more").click();
  }

  closeSeeMore() {
    cy.get(".close-button").click();
  }
}

export default ProfilePage;
