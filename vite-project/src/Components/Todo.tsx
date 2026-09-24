import TodoProps from '../Props/TodoProps';

const Todo = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoProps syssla="Städa" rum="Badrummet" färdig={true} />
      <TodoProps syssla="Laga mat" rum="Köket" färdig={false} />
      <TodoProps syssla="Tvätta" rum="Tvättstugan" färdig={true} />
      <TodoProps syssla="Handla" rum="Affären" färdig={false} />
    </div>
  );
};

export default Todo;
