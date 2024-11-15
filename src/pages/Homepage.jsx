import UserNavbar from '../component/UserNavbar';
import '../assets/homepage.css';

export default function Homepage() {
  return (
    <div id='homepage'>
      <UserNavbar />
      <section className='homediv'>
        <div id='searchbar'>
          <section className='searchinput'><input type="text" placeholder='from' /></section>
          <section className='searchinput'><input type="text" placeholder='To' /></section>
          <section className='searchinput'><input type="date" placeholder='Date' /></section>
          <section className='searchinput'> <button className='bussearch'>Search</button> </section>
        </div>
      </section>
    </div>
  )
}

