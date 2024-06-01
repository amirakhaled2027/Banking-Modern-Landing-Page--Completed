import React from 'react'
import styles from '../style'

function Button() {
  return (
    <button type='button' className={`mt-10 bg-blue-gradient py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}`}>
      Get Started
    </button>
  )
}

export default Button