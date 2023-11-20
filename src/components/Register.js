import React, { useEffect,useState ,useReducer} from 'react'




const initialState = { width: 15 };

const reducer = (state, action) => {
  switch (action) {
    case 'plus':
      return { width: state.width + 1}
    case 'minus':
      return { width: Math.max(state.width - 1, 2) }
    default:
      throw new Error("what's going on?" )
  }
}


export default function Register() {
  const [age, setAge] = useState(0)
  const handleClick = () => setAge(age + 1)

  useEffect(() => {
    document.title = 'You are ' + age + ' years old!'
  })
  const [state, dispatch] = useReducer(reducer, initialState)
  

  return (
    <>

    <div className='text-white '>
      Today I am {age} Years of Age
      <div>
        <button className='border-4 rounded-2xl' onClick={handleClick}>Get older! </button>
      </div>
    </div>
    <div className={`  h-9 width: ${state.width}`}></div>
    <div className='bg-white mt-6'>
        <button onClick={() => dispatch('plus')}>Increase{ state.width }bar size</button>
        <button onClick={() => dispatch('minus')}>Decrease bar size</button>
    </div>

    
    </>


    
  )

  
}


