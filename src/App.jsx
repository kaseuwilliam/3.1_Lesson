import profilePicture from './assets/picture.jpeg'
import './App.css'

function App() {
    
    let age = 28*5;
    let ageArray = [33,54,3,54,675,324,54,4]

    function sumOfAge(){
        return 10;
    }

    return (
        <>
            <h1>This is an About Me Page</h1>
            <h2>William Kaseu</h2>

            <img src={profilePicture} alt="" />

            <h3>This is information about me</h3>

            <p>This is my age: {sumOfAge()} <span id='edit'> Other</span> </p>

            <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, assumenda. Recusandae exercitationem odio sequi, tempore dolore architecto possimus ipsam accusamus itaque aut culpa minima vel, consectetur, earum nobis voluptatum qui.
            Iste, ad culpa. Ab vero doloribus quae asperiores qui impedit aliquid distinctio sunt culpa aspernatur! Molestias non eum aspernatur harum esse, quibusdam culpa magni quam dolorum. Repellendus illum earum nulla.
            Dolorum repudiandae saepe porro culpa labore tempora voluptas, rerum impedit aperiam? Numquam asperiores quisquam dolorum, eum quasi dolorem sed totam. Aperiam molestias excepturi aliquam impedit. Quos eveniet beatae ipsam accusamus.
            Eveniet obcaecati unde ipsum quaerat cumque nostrum ratione facere minus fuga odit, deserunt explicabo fugit dicta molestias quia itaque laborum veritatis non blanditiis cupiditate accusamus officia? Illo temporibus doloremque tenetur!</p>

            <h4>Skills</h4>

            <ul>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Python</li>
                <li>REACT</li>
            </ul>

        </>
    )
}


export default App;
