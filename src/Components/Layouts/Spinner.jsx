import spinner from './Assets/spinner.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img
        alt='loading...'
        width={180}
        className='text-center mx-auto'
        src={spinner}
      />
    </div>
  )
}

export default Spinner
