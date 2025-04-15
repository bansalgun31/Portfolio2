import React from 'react'
export default function Profile()
{
    return (
        <div>
            <div class="p-4">
                <h1 className="text-xl font-bold">Gun Bansal</h1>
                <p>I love to make projects</p>
                <br />
                <img className="h-30 w-30" src="pic latest.jpg"  />
            </div>
            <hr />
            <div class="p-4">
            <h1 className="text-xl font-bold">Bio</h1>
            <br />
            <p>Hey!! People,
            I am pursuing BTech from IET Lucknow . I am in pre final year. My technical skills are HTML, CSS, Javascript ,React Js, Tailwind CSS, Bootstrap,  competitive programming, Data Structure and algorithms, Graphic designing.I am currently trying to improve my DSA skills and also learning backEnd and I am a frontEnd Web Developer.</p>
                
            </div>
            <hr />
            <div className="p-4">
            <h1 className="text-xl font-bold">Hobbies</h1>
            <br />
            <ul className="list-disc list-inside">
                <li>Sketching</li>
                <li>Photography</li>
                <li>Reading Books</li>
            </ul>
                
            </div>
            <hr />
            <div className="p-4">
            <h1 className="text-xl font-bold">Skills</h1>
            <br />
            <ul className="list-disc list-inside">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>React Js</li>
                <li>DSA</li>
                <li>Graphic Designing</li>
            </ul>
                
            </div>
        </div>

    );
}