import HandlingsPost from '../Props/HandlingsPost';

const Handlingslista = () => {
  return (
    <div>
        <h1>Handlingslista</h1>
      <HandlingsPost avdelning="Mejerier" vara="Mjölk" isPlockad={true} >
      <HandlingsPost avdelning="Frukt&Grönt" vara="Banan" isPlockad={false} />
      <HandlingsPost avdelning="Bak" vara="Muffinsformar" isPlockad={true} />
    </div>
  );
};

export default Handlingslista;
