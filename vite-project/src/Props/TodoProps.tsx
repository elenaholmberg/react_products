type TodoProps = {
  syssla: string;
  rum: string;
  isDone: boolean;
};

const TodoItem = ({ syssla, rum, isDone }: TodoProps) => {

    if (isDone) {
      <div className="TodoItem"> {syssla} ✅</div>;
    } else {
      <div className="TodoItem"> {syssla} </div>;
    }

    return (
    <div className="TodoItem">
      {isDone ? <p> ✅</p> : <p>❌</p>}
       
      <p>Syssla: {syssla}</p>
      <p>Rum: {rum}</p>
    </div>
    )
};

export default TodoItem;

/*TodoItems ska visa syssla,rum,färdig och det gör den
med typerna som visas ovan i TodoProps.
Sedan returnerar den de olika värdena genom {}*/
