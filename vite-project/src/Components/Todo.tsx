import TodoProps from '../Props/TodoProps';

const Todo = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoProps syssla="Städa" rum="Badrummet" isDone={true} />
      <TodoProps syssla="Laga mat" rum="Köket" isDone={true} />
      <TodoProps syssla="Tvätta" rum="Tvättstugan" isDone={true} />
      <TodoProps syssla="Handla" rum="Affären" isDone={false} />
    </div>
  );
};

export default Todo;
