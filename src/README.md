[basics](https://reactjs.org/docs/hello-world.html)
[tic-tac-toe tutorial](https://reactjs.org/tutorial/tutorial.html#before-we-start-the-tutorial)
[redux info](https://www.valentinog.com/blog/react-redux-tutorial-beginners/)



# REDUX
## Reducers:
Current state is immutable.  key points for avoiding mutations in Redux:
[Using concat(), slice(), and …spread for arrays](https://egghead.io/lessons/react-redux-avoiding-array-mutations-with-concat-slice-and-spread)
[Using Object.assign() and …spread for objects](https://egghead.io/lessons/react-redux-avoiding-object-mutations-with-object-assign-and-spread)


## Joining React with Redux
Use [Provider](https://github.com/reduxjs/react-redux/blob/master/docs/api.md#provider-store)

### What does mapStateToProps do in react-redux? 
mapStateToProps does exactly what its name suggests: it connects a part of the Redux state to the props of a React component. By doing so a connected React component will have access to the exact part of the store it needs.
### What does mapDispatchToProps do in react-redux?
mapDispatchToProps does something similar, but for actions. mapDispatchToProps connects Redux actions to React props. This way a connected React component will be able to dispatch actions.

# Debugging
## Typechecking
To run typechecking on the props for a component, you can assign the special [propTypes property](https://reactjs.org/docs/typechecking-with-proptypes.html)