type handlingsProps = {
  avdelning: string;
  vara: string;
  isPlockad: boolean;
};

const HandlingsPost = ({ avdelning, vara, isPlockad }: handlingsProps) => {
  return (
    <div>
      <ul>
        <li>{avdelning}</li>
        <li>
          {vara}
          {isPlockad ? ' ✅' : ' ❌'}
        </li>
      </ul>
    </div>
  );
};

export default HandlingsPost;
