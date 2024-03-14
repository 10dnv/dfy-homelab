import React from 'react'

function Logo() {
  return (
    <div className=' text-warning font-bold  text-xl p-3'>
    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-warning relative inline-block">
        <span className="relative text-black">DFY</span>
    </span>
    <span className='pl-2'>Homelab</span>
</div>
  )
}

export default Logo