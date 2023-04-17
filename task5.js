class Electric {
    constructor () {
    this.power = 'electric';
    this.turn = 'button'
    }
    turnOn(condition, vatt) {
        console.log(`Ur device is ${condition} and used ${vatt} W`)
    }
  }
    
  class ElectricType extends Electric {
    constructor(type, color) {
        super(power);
        super(turn);
        this.type = type;
        this.color = color
    }
    turnOn(condition, vatt) {
        console.log(`Ur device is ${condition} and used ${vatt} W`)
    }
  }  
  
  const computer = new ElectricType('pc', 'black');
  computer.model = "asus";
  const lightTable = new ElectricType('light', 'black');
  lightTable.model = "basichome";
  
  computer.turnOn('on', '250')