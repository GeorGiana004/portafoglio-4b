import logo from './logo.svg';
import './App.css';

const Titolocorso=({nome, anno})=> {
  console.log('Nome ',nome )
  console.log('Anno ',anno )

  return(
    <>
    <h1>{`Corso ${nome}${anno}`} </h1>

    </>
  )
}

function App() {
  const corsi = 
   [ { 
  'id ': 1, 
  'nome'  : 'React',
  'anno'  : '2023'},
  {
  'id ': 2, 
  'nome'  : 'Fluter',
  'anno'  : '2022'
},
{
  'id ': 3, 
  'nome'  : 'Angular',
  'anno'  : '2024'}
 ] 
  
  return (
    <div className="App">
      {corsi.map((corso)=> {
        console.log(corso)
        return<Titolocorso nome = {corso.nome} anno ={corso.anno} />
      })
      }
  
    </div>
  );
}

export default App;
