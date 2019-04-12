1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- forEach, ,map , and filter

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- actions are the actions that take place like CRUD, reducers take in the type of action it is and calls that certain action on the redux store, and a store is the redux state where the whole app has access to that state without passing props down.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- application state is global why component state is only for that local component

1.  What is middleware?

- middleware are add ons to make the life of debugging easier on the developer

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- redux thunk allows you to return a function rather than an action object, to make it run async

1.  Which `react-redux` method links up our `components` with our `redux store`?

- I M P O R T { C O N N E C T } F R O M " R E A C T - R E D U X " ;
