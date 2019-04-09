import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
      <div className="ui container comments">
        <CommentDetail author="Sam" timeAgo="Today at 1pm" avatar={faker.image.avatar()} comment="Nice blog post!" />
        <CommentDetail author="Alex" timeAgo="Today at 3pm" avatar={faker.image.avatar()} comment="Love it!" />
        <CommentDetail author="Jane" timeAgo="Today at 4pm" avatar={faker.image.avatar()} comment="Seriously?"  />
        <CommentDetail author="Fred" timeAgo="Today at 7pm" avatar={faker.image.avatar()} comment="I agree 100%!" />
        <CommentDetail author="Bill" timeAgo="Today at 9pm" avatar={faker.image.avatar()} comment="Ok!" />
      </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

