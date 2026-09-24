type TodoProps = {
  syssla: string;
  rum: string;
  färdig: boolean;
};

const TodoItem = ({ syssla, rum, färdig }: TodoProps) => {
  return (
    <div className="TodoItem">
      <p>Syssla: {syssla}</p>
      <p>Rum: {rum}</p>
      <p className={färdig ? 'StatusFärdig' : 'StatusInteFärdig'}>
        Status: {färdig ? 'Färdig' : 'Inte färdig'}
      </p>
    </div>
  );
};

export default TodoItem;

/*TodoItems ska visa syssla,rum,färdig och det gör den
med typerna som visas ovan i TodoProps.
Sedan returnerar den de olika värdena genom {}*/
