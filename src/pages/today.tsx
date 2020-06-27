import React from 'react';
import PageHeader from '../components/pageheader';
import TodoList from '../components/todolist';

const TodayPage: React.FC = () => {
  const dateParts = new Date().toDateString().split(' ');
  const today = `${dateParts[0]} ${dateParts[1]} ${dateParts[2]}`;
  return (
    <div>
      <PageHeader title="Today" subTitle={today} />
      <TodoList filter="today" />
    </div>
  );
};

export default TodayPage;
