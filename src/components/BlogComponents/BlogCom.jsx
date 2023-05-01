import React from "react";
import './BlogCom.css';

const BlogCom = () => {
    return (
        <div className="BlogCom">
            <div className="bl">
                <h2>Props vs state</h2>
                <p>The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.</p>
            </div>
            <div className="bl">
                <h2>How does useState work?</h2>
                <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            </div>
            <div className="bl">
                <h2>Purpose of useEffect other than fetching data</h2>
                <p>The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.</p>
            </div>
            <div className="bl">
                <h2>How Does React work?</h2>
                <p>Users can create a representation of a DOM node by declaring the Element function in React.JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.</p>
            </div>
        </div>
    );
};

export default BlogCom;