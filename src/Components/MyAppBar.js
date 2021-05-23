import './MyAppBar.css';

export default function MyAppBar() {
  return (
    <div className="app-bar">
      <h1>
          App Bar
      </h1>
    </div>
  );
}

export function Footer(data){

    return (
        <div className="app-bar">
          <h1>
              {data.title}
          </h1>
        </div>
      );
}



