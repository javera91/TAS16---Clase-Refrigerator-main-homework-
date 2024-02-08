'use strict'

//TAREA: TAS16_REFRIGERATOR

class Refrigerator{
  constructor(brand, capacity, yearPurchase, meal){
    this.brand = brand;
    this.capacity = capacity;
    this.yearPurchase = yearPurchase;
    this.meal = meal;
  }

  showInfo(){
    alert(`La refrigeradora corresponde a la marca: ${this.brand}, su capacidad es de: ${this.capacity}, el año de compra es del: ${this.yearPurchase}.`);
  }

  addMeal(){
    alert(`Como también en la refrigeradora podemos encontrar: ${this.meal.join(', ')}`);
  }

  shopping(product){
    this.meal.push(product);
  }
}

let refrigerator = new Refrigerator("Samsung", "450lt", "2024", ["Pollo","Carne","Cerdo","Tomate", "Lechuga"]);
refrigerator.showInfo();
refrigerator.shopping("Queso, Jamon.");
refrigerator.addMeal();