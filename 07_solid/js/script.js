/* 
У класса Animal есть:
- свойство type 
- метод displayType  
На основе класса Animal можно создать экземпляры класса

*/

let Animal = {
  type: 'Invertebrates', // свойство type, значение type по умолчанию
  displayType: function () {
    // метод, отображающий тип объекта Animal
    console.log(this.type)
  },
}

let animal = Object.create(Animal) // создаем объект класса Animal
animal.displayType() // Invertebrates
let fish = Object.create(Animal) // создаем объект класса Animal и присваиваем ему type = Fishes
fish.type = 'Fishes'
fish.displayType() // Fishes
