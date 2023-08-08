class AddMariosPage {
  selectUser(user: string) {
    cy.get("#user-select").click();
    cy.get('[role="listbox"]>mat-option').contains(user).click();
    cy.get('.cdk-overlay-container').click(15, 40, { force: true });
  }

  selectCategory(category: string) {
    cy.get("select[id='category-select']").select(category);
  }

  typeTitle(title: string) {
    cy.get("input[id='title']").type(title);
  }

  typeComment(comment: string) {
    cy.get("textarea[id='comment']").type(comment);
  }

  clickSend() {
    cy.contains("SEND").click();
  }

  confirmSuccess() {
    cy.contains("Mario sent successfully!");
  }

  clickBack() {
    cy.contains("BACK").click();
  }
}

export default AddMariosPage;
