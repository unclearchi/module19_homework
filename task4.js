function Electric(){
    this.power = 'electric';
    this.turn = 'button'
  }
  
  Electric.prototype.turnOn = function(condition, vatt){
    console.log(`Ur device is ${condition} and used ${vatt} W`)
  };
    
  function ElectricType(type, color){
    this.type = type;
    this.color = color
  }
    
  ElectricType.prototype = new Electric()
  
  const computer = new ElectricType('pc', 'black');
  computer.model = "asus";
  const lightTable = new ElectricType('light', 'black');
  lightTable.model = "basichome";
  
  computer.turnOn('on', '250')