import React from 'react'
import Link from 'next/link'
import style from './styles.module.css'

function Footer() {
  return (
    <footer className={style.footer}>
      Made with ❤️ by&nbsp;
      <Link href="www.Jelibon.com" target="_blank">Jelibon</Link>
    </footer>
  )
}

export default Footer