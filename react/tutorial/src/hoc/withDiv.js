import React from "react";

const withDiv = (className, WrappedComponent) => props => (
  // here we can do stuff like reaching out to web
  // and other add on activity over wrapping elemnt
  <div className={className}>
    <WrappedComponent {...props} />
  </div>
);

// higher order function can return a stateful component also
// const withDiv = (className, WrappedComponent) => {
//   return class extends Component {
//     render() {
//       <div className={className}>
//         <WrappedComponent {...this.props} />
//       </div>;
//     }
//   };
// };

export default withDiv;
