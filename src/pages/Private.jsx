import { signOut } from "firebase/auth"
import {auth} from '../firebase'
import './Private.css'
function Private() {
 const handleSignOut =()=>{
   signOut(auth)
   .then(()=>alert('Signed out successfully'))
   .catch(error=>{
    console.log(error)
    alert(error.message)
   })
 }

    return (
      <div className="private-container">
          <header className="private-header">

        <h3>Welcome to the dashboard</h3>
       </header>
    
    <main className="private-content">

          <h3>Your Profile </h3>
          <p className="para">Welcone to the private dashboard. Here you can mange your settings and preferences</p>
       
    </main>
      
<footer className="privateFooter">
        <button onClick={handleSignOut} className="btn">SignOut</button>

</footer>
      
       
      </div>
    )
  }
  
  export default Private
  