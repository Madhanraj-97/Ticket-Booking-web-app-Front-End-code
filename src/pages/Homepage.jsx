import React from 'react';
import UserNavbar from '../component/UserNavbar';

export default function Homepage() {
  return (
    UserNavbar
    <div>
      <section><input type="text" placeholder='from'/></section>
      <section><input type="text" placeholder='To'/></section>
      <section><input type="text" placeholder='Date'/></section>
      <section> <button>Search</button> </section>
      <section><input type="text" placeholder=''/></section>
      <section><input type="text" placeholder=''/></section></div>
  )
}
