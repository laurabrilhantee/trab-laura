import { useState } from 'react'
import './App.css'

export default function App() {

return (
  <main>
    <section>
      <h1>Facebook</h1>

      <input type="text" placeholder='Email ou nome de usuário'/>
      <input type="password" placeholder='senha' />

      <button>Entrar</button>

      <div class="divider" OU></div>
      <div class="forgot" Esqueci a senha></div>
      
    </section>
  </main>
)  

}