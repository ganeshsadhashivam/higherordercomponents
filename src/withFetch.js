import React from "react";

//create a HOC component that takes a component as an argument
// const withFetch = (WrappedComponent) => {
//   return <div>WithFetch</div>;
//   // create a class component that will
//   //enhance the wrappedcomponent

//   class WithFetch extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         movies: [],
//       };
//     }

//     componentDidMount() {
//       //fetch the movie
//       fetch("https://json-faker.onrender.com/movies").then((data) => {
//         this.setState({ movies: data.movies });
//       });
//     }

//     render() {
//       return (
//         <>
//           {this.state.movies.length > 0 && (
//             <WrappedComponent movies={this.state.movies} />
//           )}
//         </>
//       );
//     }
//   }

//   //it is optional to set the display name of the
//   // component but useful when comes to debug the HOC
//   withFetch.displayName = `withFetch(${withFetch.name})`;

//   //finally return the component
//   return withFetch;
// };

// Create a HOC that takes a component as an argument
const withFetch = (WrappedComponent) => {
  // Create a Class Component that will
  // enhance the WrappedComponent
  class WithFetch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
      };
    }

    componentDidMount() {
      // Fetch the movie data by making an API call
      fetch("https://json-faker.onrender.com/movies")
        .then((response) => response.json())
        .then((data) => {
          this.setState({ movies: data.movies });
        });
    }

    render() {
      return (
        <>
          {this.state.movies.length > 0 && (
            <WrappedComponent movies={this.state.movies} />
          )}
        </>
      );
    }
  }

  // It is optional to set the display name of the
  // component but useful when comes to debug the HOC.
  WithFetch.displayName = `WithFetch(${WithFetch.name})`;

  // Finally, return the component
  return WithFetch;
};

export default withFetch;
