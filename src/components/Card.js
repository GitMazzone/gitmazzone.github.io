export default function Card(props) {
  return (
    <div
      onClick={props.onClick}
      className={
        props.backgroundImage +
        " bg-cover bg-no-repeat rounded-md flex h-60 m-2"
      }
    >
      <p className="text-white text-3xl font-bold m-auto text-center px-2">
        {props.text}
      </p>
    </div>
  );
}
