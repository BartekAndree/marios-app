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

  checkIfProfilePage() {
    cy.contains("LAST MARIOS:");
  }

  checkIfModalContains(...strings: string[]) {
    strings.forEach((str) => {
      cy.contains(str);
    })
  }
}

export default ProfilePage;
