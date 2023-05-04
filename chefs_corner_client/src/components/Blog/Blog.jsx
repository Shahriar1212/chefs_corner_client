import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div>
                <div className="header-title">
                    <h1 className='text-center'>Questions</h1>
                </div>
                <div className="question-container">
                    <div className="question-box">
                        <h3 className='question'>1. Differences between uncontrolled and controlled components.?</h3>
                        <p className='text-black'>Controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior.
                            Uncontrolled components refer to components that manage their own state internally.
                            There are more differences which are, given below,
                        </p>

                        <h4 className='text-black'>Controlled</h4>
                        <li>It does not maintain its internal state.</li>
                        <li>Here, data is controlled by the parent component.</li>
                        <li>It accepts its current value as a prop.</li>
                        <li>It allows validation control.</li>

                        <h4 className="text-black">
                        Uncontrolled
                        </h4>
                        <li>It maintains its internal states.</li>
                        <li>Here, data is controlled by the DOM itself.</li>
                        <li>It uses a ref for their current values.</li>
                        <li>It does not allow validation control.</li>
                    </div>

                    <div className="question-box">
                        <h3 className='question'>2. How to validate React props using PropTypes?</h3>
                        <p className="text-black">
                            React is a JavaScript library used for creating interactive web frontend applications. It is one of the most popular libraries because of its easy-to-use API.
                            We combine components into an app by passing data from parent components to child components. To do this, we pass data with props. Props are like HTML attributes, but they can contain dynamic data.
                            A parent component passes props down to child components. And child components receive them. We can pass any data as props. Therefore, we need a way to validate their data type so that the child component gets what they expect.

                        </p>
                    </div>

                    <div className="question-box">
                        <h3 className='question'>3. Difference between nodejs and express js?</h3>
                        <p className="text-black">
                            Node.js is an open-source and cross-platform runtime environment for executing JavaScript code outside of a browser.
                            Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize an application’s functionality with middleware and routing.

                        </p>

                        <li>Node.js is a platform for building i/o applications that are server-side event-driven and made using JavaScript.</li>
                        <li>Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.</li>
                    </div>

                    <div className="question-box">
                        <h3 className='question'>4. What is a custom hook, and why will you create a custom hook?</h3>
                        <p className="text-black">
                            In React, a custom hook is a JavaScript function that allows reusing logic across multiple components. Essentially, it is a way to abstract stateful logic and share between components without duplicating code. Custom hooks can be used to encapsulate complex business logic, handle common patterns like fetching data from APIs, and manage shared states across components.
                            If there is a situation of repeating a particular set of logic across multiple components in the application, creating a custom hook would be an option. By creating a custom hook, that logic can be extracted into a reusable function that can be used in different parts of your codebase. This can make the code easier to maintain and reduce the amount of boilerplate code that needs to be written.

                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Blog;