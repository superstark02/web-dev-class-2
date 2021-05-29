import './MyAppBar.css';

export default function MyAppBar(props) {
  return (
    <div className="app-bar">
      <h1>
          {props.title}
      </h1>
    </div>
  );
}

export function Footer(){
  return(
    <div>
      Footer
    </div>
  )
}





