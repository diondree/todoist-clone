import React from 'react';
import PageHeader from '../components/pageheader';
import TodoList from '../components/todolist';

const InboxPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Inbox"></PageHeader>
      <TodoList />
    </div>
  );
};

export default InboxPage;
