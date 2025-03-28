import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='container'>
      <div>
        <Link to='/'>
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
  )
}