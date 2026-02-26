import { useState } from "react";

function Skills() {
    const [visible, setVisible] = useState(true);
    
    return (
        <section class="card" id="skillsSection">
            <button onClick={() => setVisible(!visible)}>
                Show/Hide Skills
            </button>

            {visible && (
                <div>   
                    <h2>Skills</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>

                    <ul>
                        <li>Web Development</li>
                    </ul>
                        <ul>
                            <li>Frontend</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Backend</li>
                        </ul>                   
                </div>         
            )}            
        </section>
    );
}

export default Skills;