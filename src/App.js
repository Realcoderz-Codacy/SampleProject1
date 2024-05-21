import React,{ useEffect, useState } from "react";
import PokemonThumbnail from "./Components/PokemonThumbnail";

function App() {
  const [allPokemons,setAllPokemons] = useState([]);
  const [loadPoke,setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  const getAllPokemons = async () =>{
    const res = await fetch(loadPoke)
    const data = await res.json()
    setLoadPoke(data.next)
   
    function createPokemonObject(result){
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json();
        setAllPokemons(currentList => [...currentList,data])
      });
    }
    createPokemonObject(data.results)
    await console.log(allPokemons)
  }
  useEffect(()=>{
    getAllPokemons()
  },[])

  return (
    <div className="app-container">
     <h1>Pokemon Kingdom .</h1>
     <div className="pokemon-container">
       <div className="all-container">
          {allPokemons.map((pokemon,index)=> 
            <PokemonThumbnail
            id = {pokemon.id}
            name = {pokemon.name}
            image = {pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            key={index}
            height = {pokemon.height}
            weight = {pokemon.weight}
            stat1 = {pokemon.stats[0].stat.name}
            stat2 = {pokemon.stats[1].stat.name}
            stat3 = {pokemon.stats[2].stat.name}
            stat4 = {pokemon.stats[3].stat.name}
            stat5 = {pokemon.stats[4].stat.name}
            stat6 = {pokemon.stats[5].stat.name}
            bs1 = {pokemon.stats[0].base_stat}
            bs2 = {pokemon.stats[1].base_stat}
            bs3 = {pokemon.stats[2].base_stat}
            bs4 = {pokemon.stats[3].base_stat}
            bs5 = {pokemon.stats[4].base_stat}
            bs6 = {pokemon.stats[5].base_stat}
            />
          )}
       </div>
       <button className="load-more" onClick={()=>getAllPokemons()}>More Pokemons</button>
     </div>
    </div>
  );
}

export default App;


/* // Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper metus vel risus pharetra, ac aliquet nisi
// ultricies. Nullam vel mauris sed purus efficitur facilisis eget ac orci. Vestibulum felis lacus, elementum a
// elit at, laoreet pulvinar quam. Aliquam iaculis tristique semper. Phasellus efficitur pharetra congue. Morbi
// malesuada est metus, eu maximus diam eleifend in. Integer sagittis sollicitudin sodales. Nam malesuada lectus
// nulla, vitae elementum diam finibus eu. Duis elit eros, rhoncus hendrerit elit in, convallis mollis elit.
// Suspendisse sodales ac nisl et tempor. Vivamus placerat dolor et quam accumsan, et porta eros consequat. Ut
// ultrices justo vitae turpis lacinia, vel feugiat ipsum rhoncus. Ut blandit nibh non consectetur euismod. Donec
// vestibulum at eros at tempus. Duis ligula tellus, luctus ac maximus pulvinar, interdum ut leo. Donec vitae odio
// pulvinar, blandit orci eget, posuere elit.

// Suspendisse non sagittis erat, non varius lorem. Suspendisse potenti. Nam interdum neque eget ipsum molestie
// posuere. Morbi elementum ipsum elit, rutrum gravida nulla accumsan ac. Vestibulum non nulla luctus urna pharetra
// aliquet eu quis risus. Pellentesque facilisis maximus ipsum vitae blandit. Cras posuere consectetur arcu, vel
// cursus nulla suscipit ultricies. Integer bibendum, sem vel dapibus sollicitudin, purus nulla fermentum lectus, ut
// posuere mauris ex eget metus. Nam ac libero pellentesque, accumsan massa ut, hendrerit arcu. Vestibulum finibus
// arcu nec lacus hendrerit pellentesque sed id sapien.

// Morbi eget auctor dui. Maecenas sed sollicitudin risus, eget fermentum urna. Nulla venenatis quis ligula vehicula
// venenatis. Vivamus id egestas dolor, vitae ullamcorper massa. Aenean ante leo, venenatis a turpis sed, vehicula
// volutpat felis. Aenean vitae consequat augue. Nunc at ex mi. Nunc venenatis elit est, ut condimentum metus placerat
// eget. Quisque facilisis urna orci, accumsan imperdiet orci vehicula sit amet. Nunc volutpat pellentesque lacinia.
// Aenean ornare diam quis imperdiet auctor. Proin faucibus enim id pretium efficitur. Integer elementum orci ut nulla
// facilisis pharetra.

// Nulla posuere tellus elementum urna placerat, ac pulvinar enim consectetur. Donec vitae varius augue. Donec at
// ipsum et eros facilisis ullamcorper. Aenean sed justo at enim porta porttitor quis eget dolor. Integer vitae enim
// non enim venenatis porttitor vel vitae risus. Morbi dui leo, lacinia ut sodales eget, aliquet in purus. Sed ex
// metus, efficitur nec elit sed, tristique aliquam lorem. Praesent eu justo ultrices, tristique quam quis, feugiat
// massa. Vestibulum eget orci venenatis, maximus leo nec, porttitor ipsum. Integer luctus tempus risus vel
// ullamcorper. Fusce tempus justo mauris, vel suscipit ipsum placerat nec. Praesent urna sapien, finibus non
// imperdiet dictum, sodales ut felis. Sed sit amet auctor odio. Aliquam tincidunt nulla condimentum sapien finibus,
// in sagittis tortor pharetra. Nam ullamcorper eu mi sit amet ultricies.

// Suspendisse non rutrum urna. Donec non turpis ipsum. Proin at efficitur urna, nec mattis magna. Etiam in lorem et
// justo tristique egestas. Nulla facilisi. Etiam a vestibulum ipsum. Curabitur sit amet commodo massa. Mauris
// interdum magna sem, id scelerisque odio euismod eu. Morbi vulputate, purus vel efficitur tincidunt, velit mi
// vehicula nibh, ut placerat nisi tortor ac diam. Donec lacinia sem sed ante auctor mollis. Fusce nec sapien iaculis,
// elementum nulla at, fermentum nisl. */
