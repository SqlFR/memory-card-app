import './card-pokemon.css'

function CardPokemon( {key, id, name, image, types}) {

  let typeColor;

  switch (types[0] || types[1]) {
    case 'electric':
      typeColor = 'yellow';
      break
    case 'poison':
      typeColor = 'green'
      break
    case 'normal':
      typeColor = 'lightgrey'
  }

  const style = {
    borderColor: typeColor
  }

  
  return (
    <div className='card-pokemon' key={key} id={id} name={name} style={style}>      
      <div>name: {name}</div>
      <img src={image}/>
    </div>
  )
}

export default CardPokemon;






