
# Programming

| Nm | #Question   |
| :---:   | :---: |
| 1   | [inheritence-composition. What is difference? Has/is approach to define what pattern to use.](#inheritance-composition)                                     |


1. ###  inheritance-composition
example inheritence animal dog:
```javascript
class Animal {
  move(): void {
    console.log("move");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Hau hau!");
  }
}

const dog = new Dog();

dog.move(); // inherited method
dog.bark(); // own method
```

example composition car/engine:
```javascript
// Car isnt engine
// Car has engine

class Engine {
  start(): void {
    console.log("Engine started");
  }
}

class Car {
  private engine = new Engine();

  drive(): void {
    this.engine.start();
    console.log("Engine going on");
  }
}

const car = new Car();
car.drive();
```

has/is rule. If smth is, dog is animal - use inheritance.
If smth has, car has engine - use composition.

If we talk about React, its almost all time composition is used.
Bigger components includes smaller one.1 of the best example of composition in React is children pattern:

```javascript
type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
```