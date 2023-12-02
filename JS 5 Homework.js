class Tank {
    constructor(name, role) {
    this.name = name;
    this.role = role;
    }
    
    
    describe() {
    //console.log(`${this.name} fufills ${this.role}`)
    return `${this.name} fufills ${this.role}`;
    }
    }
    class Team {

    constructor(name) {
    this.name = name;
    this.tanks = [];
    }
    
    addTank(Tank) {
    if (tank instanceof Tank) {
    this.tanks.push(tank);
    } else {
    throw new Error(`You can only add an instance of Tank. 
    argument is not a Tank: ${tank}`);
    }
    }
    
    describe() {
    return `${this.name} has ${this.tanks.length} tanks.`;
    }
    }
    class Menu { // what drives the application and our choices
    constructor() {
    this.Battalions = [];
    this.selectedBattalion = null; // manage one Battalion at a time
    }
    
    start() { // entry point to application
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createBattalion();
    break;
    case '2' :
    this.viewBattalion();
    break;
    case '3' :
    this.deleteBattalion();
    break;
    case '4' :
    this.displayBattalions();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
    }
    
    
    showMainMenuOptions() {
   let answer = prompt(`
    0) exit
    1) create a new battalion
    2) view a battalion
    3) delete a battalion
    4) display all battalions
    `);
     return answer;
    }
    
    showBattalionMenuOptions(battalionInfo) {
    let answer = prompt(`
    0) back
    1) add a new tank
    2) delete a tank
    -----------------
    ${battalionInfo}
    `);
     return answer;
    }
    
    displayBattalions() {
    let battalionString = '';
    for (let i = 0; i < this.battalions.length; i++) {
    battalionString += i+ ') ' + this.battalions[i].name + '\n';
    }
    alert(battalionString);
    
    }
    
    createBattalion() {
    let name = prompt('Enter name for new Battalion: ');
    this.battalions.push(new this.Battalion(name));
    }
    
    viewBattalion() {
    let index = prompt("Enter the index of the team that you want to view:");
    if (index > -1 && index < this.teams.length) {
    this.selectedTeam = this.teams[index];
    let description = 'Team Name: ' + this.selectedTeam.name + '\n';
    description += ' ' + this.selectedTeam.describe() + '\n ';
    for (let i = 0; i < this.selectedTeam.players.length; i++) {
    // description += i + ') ' + this.selectedTeam.players[i].name + ' - '
    // + this.selectedTeam.players[i].position + '\n';
    description += i + ') ' + this.selectedTeam.players[i].describe() + '\n';
    }
    let selection1 = this.showBattalionMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createTank();
    break;
    case '2' :
    this.deleteTank();
    }
    } // validate user input
    }
    
    deleteBattalion() {
    let index = prompt('Enter the index of the battalion that you wish to delete: ');
    if (index > -1 && index < this.battalions.length) {
    this.battalions.splice(index,1);
    }
    }
    
    
    createTank() {
    let name = prompt('Enter name for new tank: ');
    let role = prompt('Enter role for new tank: ');
    //this.selectedBattalion.tanks.push(new Tank(name, role));
    this.selectedBattalion.addTank(new Tank(name,role));
    }
    
    deleteTank() {
    let index = prompt('Enter the index of the tank that you wish to delete: ');
    if (index > -1 && index < this.selectedBattalion.tanks.length) { this.selectedBattalion.Tanks.splice(index,1);
    }
    }
    }
    let menu = new Menu();
    menu.start();
    