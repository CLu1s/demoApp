import React, { useState, useEffect } from "react";
import Saludo from "./components/Saludo.js";
import axios from "axios";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(100);
  const [state, setState] = useState("Ludosis");
  const [pokemonList, setPokemonList] = useState([]);
  const miArray = ["luis", "oscar", "isaac"];
  const miRender = miArray.map((item) => {
    return (
      <di>
        <Saludo nombres={item} font="sm" />
      </di>
    );
  });

  const miListaDePokemon = pokemonList.map((item) => (
    <div>
      <Saludo nombres={item.name} font="lg" />
      <img src={item.sprites.front_shiny} />
    </div>
  ));
  console.log(miListaDePokemon);
  const miFuncionAsincrona = async () => {
    const value = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    const { results } = value.data;
    // console.log(results);
    let misPokes = [];
    const arrayDePromesas = [];
    // const element = results[0];
    // const respuesta = await axios.get(element.url);
    // console.log(respuesta.data.sprites);
    // setPokemonList([
    //   { name: respuesta.data.name, sprites: respuesta.data.sprites },
    // ]);
    results.forEach((item) => {
      const promesa = axios.get(item.url);
      arrayDePromesas.push(promesa);
    });
    const pokesResultos = await Promise.all(arrayDePromesas);
    misPokes = pokesResultos.map((item) => {
      return { name: item.data.name, sprites: item.data.sprites };
    });
    console.log(pokesResultos);
    console.log(misPokes);
    setPokemonList(misPokes)
  };
  useEffect(() => {
    miFuncionAsincrona();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon/")
  //     .then((value) => {
  //       const { results } = value.data;
  //       console.log(results);
  //       results.map((item) => {
  //         const { name, url } = item;
  //         console.log(name, url);
  //         const misPokes = [];
  //         axios.get(url).then((res) => {
  //           misPokes.push({ sprites: res.data.sprites, name: res.data.name });
  //         });
  //         console.log("misPokes: ",misPokes)
  //       });
  //       // setPokemonList(value.data.results);
  //     })
  //     .catch((e) => console.log("mi primer error ", e));
  // }, []);

  // console.log([1, 2, 3].map((x) => x * 2).filter((x) => x === 4));

  useEffect(() => {
    setCount3(count3 - 1);
  }, [count]);

  return (
    <div>
      {miRender}
      <div> Bienvenido {state}</div>
      <div>{count}</div>
      <div>{count2}</div>
      <div>{count3}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        Incrementar
      </button>
      <button
        onClick={() => {
          setCount2(count2 + 3);
        }}
      >
        Incrementar 3
      </button>

      {miListaDePokemon}
    </div>
  );
};

export default App;
