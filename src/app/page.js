'use client';
import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import {useEffect, useState} from "react";

export default function Home() {
 const [word, setWord] = useState("hello");
 const actions = ['INSERT_word:5','DELETE_2'];

 function changeWord(action,word_input){
    let action_split = action.split('_');
    let action_type = action_split[0];
    let action_value = action_split[1];
     let new_word = '';
    if (action_type === 'INSERT'){
      let letter = action_value.split(':')[0];
      let position = action_value.split(':')[1];
      let part1 = word_input.slice(0,position);
      let part2 = word_input.slice(position);
       new_word = part1 + letter + part2;
      return new_word;
    }else if (action_type === 'DELETE') {
        console.log('1'+ word_input);
        let position = action_value;
        let part1 = word_input.slice(0,position);
        let positionAfter = parseInt(position) + 1;
        let part2 = word_input.slice(positionAfter);
        console.log('2'+ part1);
        console.log('3'+ part2);
         new_word = part1 + part2;
        return new_word;
    }

 }
 useEffect( () => {
      const newWord1 = changeWord(actions[0],word);
      const newWord2 = changeWord(actions[1],newWord1);
      console.log('THIS IS THE NEW WORD --> '+newWord2);
 },[])



  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {word}
      </main>
    </div>
  );
}
