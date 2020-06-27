import React from 'react';
import PageHeader from '../components/pageheader';
import TodoList from '../components/todolist';

const UpcomingPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Upcoming" />
      <TodoList filter="upcoming" />
    </div>
  );
};

export default UpcomingPage;
