/**
 * Generic button with various types. NOT for navigation outside of site.
 * @param props
 *    text: Text to appear within the button
 *    type: Can be greenSolid, greenOutline, or lightSolid, lightOutline
 */
export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="rounded-lg p-3 text-xl font-bold text-white bg-ciGreen"
    >
      {props.text}
    </button>
  );
}
