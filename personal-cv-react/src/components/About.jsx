import profileImg from "../assets/Images/profile.jpg";
function About() {
    return (
        <div class="container">
        <section class="card">
            <h2>About Me</h2>
            <img src={profileImg} alt="Profile photo" width="200"></img>
            <p>Email:
                <a href="mailto:ratunil.gerryjohnru@gmail.com">ratunil.gerryjohnru@gmail.com</a><br/>
            </p>
            GitHub:
                <a href="https://github.com/ratunilgerryjohnru/module2-html" target="_blank">
                    https://github.com/ratunilgerryjohnru/module2-html
                </a>
            <p>
             I am 19 years old from Gran Europa Lumbia and I drive a motorcycle to go to school.
            I love sports and I play here and there, I cook sometimes.
             </p>
        </section> 
        </div>
    )
}

export default About;
