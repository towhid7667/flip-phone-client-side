import React from "react";

const Blogs = () => {
  return (
    <div className="py-20">
      <h2 className="text-3xl text-center font-bold">Answers</h2>
      <div className="grid lg:grid-cols-3md:grid-cols-2 grid-cols-1 w-10/12 mx-auto">
        <div className="text-center p-15 border-2 rounded-lg">
          <h1 className="font-bold">
            What are the different ways to manage a state in a React
            application?
          </h1>
          <p>
            When we talk about state in our applications, it’s important to be
            clear about what types of state actually matter. There are four main
            types of state you need to properly manage in your React apps: Local
            state, Global state, Server state, URL state,
          </p>
        </div>
        <div className="text-center p-15 border-2 rounded-lg">
          <h1 className="font-bold">How does prototypical inheritance work?</h1>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.J
          </p>
        </div>
        <div className="text-center p-15 border-2 rounded-lg">
          <h1 className="font-bold">What is a unit test? Why should we write unit tests?</h1>
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>
        <div className="text-center p-15 border-2 rounded-lg">
          <h1 className="font-bold">
          React vs. Angular vs. Vue?
          </h1>
          <p>
            Vue provides higher customizability and hence is easier to learn
            than Angular or React. Further, Vue has an overlap with Angular and
            React with respect to their functionality like the use of
            components. Hence, the transition to Vue from either of the two is
            an easy option.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
