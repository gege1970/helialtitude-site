import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
function App(){return <div className='hero'><div className='content'><h4>HÉLIALTITUDE SIMULATION</h4><h1>Prenez les commandes d'un hélicoptère en simulation</h1><p>Une expérience immersive accessible à tous.</p><button>Demander un devis</button></div></div>}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);