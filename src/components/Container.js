export default function Container(props) {
  return (
    <div className="max-w-screen-xl mx-auto lg:ps-8">
      <div className="w-full mx-auto">
        <div className="h-screen bg-white flex">{props.children}</div>
      </div>
    </div>
  );
}
