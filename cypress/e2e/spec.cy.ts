let userSelect:string = "MarekPiorko";
let categorySelect:string = "Thank You";
let titleInput:string = "You did great today Marek!";
let commentInput:string ="I wanted to give you marios for your excellent team leadership. I really appreciate your hard work and commitment. Keep going!";


let countBefore: number;
let countAfter: number;

describe('My First Test', () => {
  it('Should add marios, check if it is added successfully', () => {
    cy.visit('/profile');
    cy.get('.number.sent').invoke('text').then((text) => {
      countBefore = Number(text);
    });
    cy.contains("ADD MARIOS").click();
    cy.url().should('include', '/add');
    cy.get("select[id='user-select']").select(userSelect);
    cy.get("select[id='category-select']").select(categorySelect);
    cy.get("input[id='title']").type(titleInput);
    cy.get("textarea[id='comment']").type(commentInput);
    cy.contains("SEND").click();
    cy.contains("Mario sent successfully!");
    cy.contains("BACK").click();
    cy.url().should('include', '/profile');
    cy.wait(1000);
    cy.get('.number.sent').invoke('text').then((text) => {
      countAfter = Number(text);
    });

    cy.then(() => {
      expect(countAfter).to.equal(countBefore + 1);
    });

    cy.contains("See more").click();
    cy.contains(userSelect);
    cy.contains(categorySelect);
    cy.contains(titleInput);
    cy.contains(commentInput);
    cy.get(".close-button").click();
  });
});

