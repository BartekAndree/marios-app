import ProfilePage from "../support/page_objects/ProfilePage";
import AddMariosPage from "../support/page_objects/AddMariosPage";


let userSelect: string = "MarekPiorko";
let categorySelect: string = "Thank You";
let titleInput: string = "You did great today Marek!";
let commentInput: string = "I wanted to give you marios for your excellent team leadership. I really appreciate your hard work and commitment. Keep going!";

let countBefore: number;
let countAfter: number;

describe('My First Test', () => {
  it('Should add marios, check if it is added successfully', () => {
    const profilePage = new ProfilePage();
    const addMariosPage = new AddMariosPage();

    profilePage.visit();
    profilePage.getSentNumber().invoke('text').then((text) => {
      countBefore = Number(text);
    });
    profilePage.clickAddMarios();

    addMariosPage.checkIfAddMariosPage()
    addMariosPage.selectUser(userSelect);
    addMariosPage.selectCategory(categorySelect);
    addMariosPage.typeTitle(titleInput);
    addMariosPage.typeComment(commentInput);
    addMariosPage.clickSend();
    addMariosPage.confirmSuccess();
    addMariosPage.clickBack();
    cy.wait(1000);

    profilePage.checkIfProfilePage();
    profilePage.getSentNumber().invoke('text').then((text) => {
      countAfter = Number(text);
    });

    cy.then(() => {
      expect(countAfter).to.equal(countBefore + 1);
    });

    profilePage.clickSeeMore();
    profilePage.checkIfModalContains(userSelect, categorySelect, titleInput, commentInput)
    profilePage.closeSeeMore();
  });
});
