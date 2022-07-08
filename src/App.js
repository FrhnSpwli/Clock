import './App.css';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
function tick() {
  const element = (
    <div>
      <head className="App-header">
        <h1>
          Welcome To My Clock
        </h1>
      </head>
      <body className="Tick">
        <h2>Waktu Saat Ini</h2>
        <h3>{new Date().toLocaleTimeString()}</h3>
      </body>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);

export default tick;
