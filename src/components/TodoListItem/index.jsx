import React from 'react';

import styles from './TodoListItem.module.scss';

const TodoListItem = ({ todo, todoRemove, todoEdit, todoComplete }) => {
  return (
    <li className={`${styles.todo__list_item} list-group-item`}>
      <p
        style={{ textDecoration: todo.completed ? 'line-through' : 'unset' }}
        onClick={() => todoComplete(todo.id)} className={styles.item__name}
      >
        {todo.value}
      </p>

      <div className={styles.item__actions}>
        <button
          onClick={() => todoRemove(todo.id)}
          className={`${styles.item__action} ${styles.item__actions_remove} btn btn-outline-danger btn-sm`}
        >
          <i className="far fa-trash-alt"></i>
        </button>
        <button
          onClick={() => todoEdit(todo.id)}
          className={`${styles.item__action} ${styles.item__actions_edit} btn btn-outline-primary btn-sm`}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoListItem;
