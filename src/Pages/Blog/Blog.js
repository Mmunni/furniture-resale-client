import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="max-w-screen-xl mx-auto py-16 lg:py-28">
      <div className="title text-center">
        <p className="font-bold theme-color py-5 text-xl text-primary">
          Our Blogs
        </p>
        <h1 className="text_2xl md: text-3xl lg:text-4xl font-bold  pb-24">
          News & <span className="theme-color"> Updates</span>
        </h1>
      </div>
      <div className="blog-area grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="card w-full bg-secondary-color shadow-xl hover:shadow-2xl">
          <div className="card-body">
            <h3 className="card-title text-primary text-center text-lg lg:text-2xl">
              What are the different ways to manage a state in a React
              application?
            </h3>
            <p className="">
              There are four main types of state you need to properly manage in
              your React apps. Local (UI) state – Local state is data we manage
              in one or another component. Local state is most often managed in
              React using the useState hook. Global (UI) state – Global state is
              data we manage across multiple components. Global state is
              necessary when we want to get and update data anywhere in our app,
              or in multiple components at least. Server state is a simple
              concept, but can be hard to manage alongside all of our local and
              global UI state. URL state – Data that exists on our URLs,
              including the pathname and query parameters. URL state is often
              missing as a category of state, but it is an important one. In
              many cases, a lot of major parts of our application rely upon
              accessing URL state.
            </p>
          </div>
        </div>
        <div className="card w-full bg-secondary-color shadow-xl hover:shadow-2xl">
          <div className="card-body">
            <h3 className="card-title text-primary text-center text-lg lg:text-2xl">
              How does prototypical inheritance work?
            </h3>
            <p className="">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </div>
        </div>
        <div className="card w-full bg-secondary-color shadow-xl hover:shadow-2xl">
          <div className="card-body">
            <h3 className="card-title text-primary text-center text-lg lg:text-2xl">
              What is a unit test? Why should we write unit tests?
            </h3>
            <p className="">
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </div>
        </div>
        <div className="card w-full bg-secondary-color shadow-xl hover:shadow-2xl">
          <div className="card-body">
            <h3 className="card-title text-primary text-center text-lg lg:text-2xl">
              React vs. Angular vs. Vue?
            </h3>
            <p>
              <strong>React:</strong> One of the biggest of them is that
              React.js uses a virtual DOM that only compares the previous HTML
              code differences and only loads the different parts. This
              significantly impacts the loading times. In a positive way, of
              course. With React.js, you handle the markup and the logic in the
              same file, which means you can output variables in a view
              component (JSX).{" "}
            </p>
            <p className="">
              <strong>Angular: </strong>Angular.js is an MVC framework. A major
              disadvantage of Angular is that it uses a regular DOM, and thus,
              the entire tree structure of the HTML tags is updated, which
              massively impacts the loading time. Angular.js has its Ionic
              framework for mobile applications.
            </p>
            <p>
              <strong>Vue:</strong> Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
