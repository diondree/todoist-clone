import React from 'react';
export interface TodoProps {
  onClick: React.MouseEvent<HTMLElement>
}

const Todo: React.FC<TodoProps> = ({ onClick }) => {
  return (<div></div>);
}

export default Todo;