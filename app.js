//Calling the buttons from html
const chemMathBtn = document.getElementById('chem-math-btn');
const phyMathBtn = document.getElementById('phy-math-btn');
const bioChemBtn = document.getElementById('bio-chem-btn');

//Creating objects to store the content for each button
//Chemistry and Mathematics content
let chemMathContent = {
    name: "ESP (Chemistry and Mathematics)",
    description: "Welcome to the ESP (Chemistry and Mathematics) section! Here, you will find a variety of resources and materials to help you excel in both chemistry and mathematics. Whether you're looking for study guides, practice problems, or interactive lessons, we've got you covered. Dive into our comprehensive content to enhance your understanding and boost your performance in these subjects!",
    courseUnits: ["SED 2201 - Kinetics and Electrochemistry II", "SED 2202 - Analytical and Applied Chemistry", "SED 2203 - Chemistry Methods and Research Methods", "SMT 221 - Numerical Analysis I", "SMT 222 - Probability Theory", "SMT 223 - Mathematics Education", "EPS 2201 - General Methods, Educational Technology and School Practice", "EPS 2202 - Learning Measurement and Evaluation"],
    resources: ["Chemistry textbooks", "Mathematics textbooks", "Online tutorials", "Practice problems", "Interactive simulations"],
    timetable: {
        monday: [
            {time: "8:00AM-10:00AM", course: "None", lecturer: "None", code: "None"},
            {time: "10:00AM-12:00PM", course: "None", lecturer: "None", code: "None"},
            {time: "12:00PM-2:00PM", course: "None", lecturer: "None", code: "None"},
            {time: "2:00PM-4:00PM", course: "Analytical and Aplied Chemistry", lecturer: "Dr. XXXXX", code: "SED 2202"}
        ],
        tuesday: [
            {time: "8:00AM-10:00AM", course: "Numerical Analysis", lecturer: "Dr. Savannah", code: "SMT 221"},
            {time: "10:00AM-12:00PM", course: "Probability Theory", lecturer: "Dr. Hasifah", code: "SMT 222"},
            {time: "12:00PM-2:00PM", course: "General methods, education technology and school prsctice", lecturer: "Dr. Bashir", code: "EPS 2201"},
            {time: "2:00PM-4:00PM", course: "Kinetics and Electrochemistry", lecturer: "Dr. YYYYY", code: "SED 2201"}
        ],
        wednesday: [
            {time: "8:00AM-10:00AM", course: "Probability Theory", lecturer: "Dr. Hasifah", code: "SMT 222"},
            {time: "10:00AM-12:00PM", course: "Mathematics Education", lecturer: "Dr. Jalilah", code: "SMT 223"},
            {time: "12:00PM-2:00PM", course: "General methods, education technology and school prsctice", lecturer: "Dr. Bashir", code: "EPS 2201"},
            {time: "2:00PM-4:00PM", course: "Numerical Analysis", lecturer: "Dr. Savannah", code: "SMT 221"}
        ],
        thursday: [
            {time: "8:00AM-10:00AM", course: "Chemistry methods and Research methods", lecturer: "Dr. Nanyonga", code: "SED 2203"},
            {time: "10:00AM-12:00PM", course: "Mathematics Education", lecturer: "Dr. Jalilah", code: "SMT 223"},
            {time: "12:00PM-2:00PM", course: "Learning measurements and Evaluation", lecturer: "Ass. Professor Joseph", code: "EPS 2202"},
            {time: "2:00PM-4:00PM", course: "None", lecturer: "None", code: "None"}
        ],
        friday: [
            {time: "8:00AM-10:00AM", course: "None", lecturer: "None", code: "None"},
            {time: "10:00AM-12:00PM", course: "None", lecturer: "None", code: "None"},
            {time: "12:00PM-2:00PM", course:"Learning Measurement and Evaluation", lecturer: "Assoc Prof Joseph Ssenyonga", code: "EPS 2202"},
            {time: "2:00PM-4:00PM", course: "None", lecturer: "None", code: "None"}
        ]
    }
};
//Physics and Mathematics content
let phyMathContent = {
    name: "ESP (Physics and Mathematics)",
    description: "Welcome to the ESP (Physics and Mathematics) section! Here, you will find a variety of resources and materials to help you excel in both physics and mathematics. Whether you're looking for study guides, practice problems, or interactive lessons, we've got you covered. Dive into our comprehensive content to enhance your understanding and boost your performance in these subjects!",
    courseUnits: ["SPH 2201 - Physics Education II", "SPH 2202 - Electromagnetism", "SPH 2203 - Digital Electronics", "SPH 2204 - Nuclear Physics", "SMT 221 - Numerical Analysis I", "SMT 222 - Probability Theory", "SMT 223 - Mathematics Education", "EPS 2201 - General Methods, Educational Technology and School Practice", "EPS 2202 - Learning Measurement and Evaluation"],
    resources: ["Physics textbooks", "Mathematics textbooks", "Online tutorials", "Practice problems", "Interactive simulations"],
    timetable: {
        monday: [
            {time: "8:00AM-10:00AM", course: "Digital Electronics", lecturer: "Dr. Okullo Michael", code: "SPH 2203"},
            {time: "10:00AM-12:00PM", course: "Nuclear Physics", lecturer: "Dr. William Ochen", code: "SPH 2204"},
            {time: "12:00PM-2:00PM", course: "Physics Education II", lecturer: "Dr. Joyce Mbambu", code: "SPH 2201"},
            {time: "2:00PM-4:00PM", course: "Physics Education II", lecturer: "Dr. Joyce Mbambu", code: "SPH 2201"}
        ],
        tuesday: [
            {time: "8:00AM-10:00AM", course:"Numerical Analysis I", lecturer: "Dr. Nuwagaba Savannah", code: "SMT 221"},
            {time: "10:00AM-12:00PM", course:"Probability Theory", lecturer: "Dr. Nampala Hasifah", code: "SMT 222"},
            {time: "12:00PM-2:00PM", course:"General Methods, Educational Technology and School Practice", lecturer: "Dr. Kishabale Bashir", code: "EPS 2201"},
            {time: "2:00PM-4:00PM", course:"Digital Electronics", lecturer: "Dr. Okullo Michael", code: "SPH 2203"}
        ],
        wednesday: [
            {time: "8:00AM-10:00AM", course:"Probability Theory", lecturer: "Dr. Nampala Hasifah", code: "SMT 222"},
            {time: "10:00AM-12:00PM", course:"Mathematics Education", lecturer: "Dr. Namuwaya Jalilah", code: "SMT 223"},
            {time: "12:00PM-2:00PM", course:"General Methods, Educational Technology and School Practice", lecturer: "Dr. Kishabale Bashir", code: "EPS 2201"},
            {time: "2:00PM-4:00PM", course:"Numerical Analysis I", lecturer: "Dr. Nuwagaba Savannah", code: "SMT 221"}
        ],
        thursday: [
            {time: "8:00AM-10:00AM", course:"Electromagnetism", lecturer: "Dr. Bakulu Thomas", code: "SPH 2202"},
            {time: "10:00AM-12:00PM", course:"Mathematics Education", lecturer: "Dr. Namuwaya Jalilah", code: "SMT 223"},
            {time: "12:00PM-2:00PM", course:"Learning Measurement and Evaluation", lecturer: "Assoc Prof Joseph Ssenyonga", code: "EPS 2202"},
            {time: "2:00PM-4:00PM", course:"Nuclear Physics", lecturer: "Dr. William Ochen", code: "SPH 2204"}
        ],
        friday: [
            {time: "8:00AM-10:00AM", course:"Electromagnetism", lecturer: "Dr. Bakulu Thomas", code: "SPH 2202"},
            {time: "10:00AM-12:00PM", course:"None", lecturer: "None", code: "None"},
            {time: "12:00PM-2:00PM", course:"Learning Measurement and Evaluation", lecturer: "Assoc Prof Joseph Ssenyonga", code: "EPS 2202"},
            {time: "2:00PM-4:00PM", course:"PRACTICALS", lecturer: "xxxxx", code: "xxxxx"}
        ]
        }
};
//Biology and Chemistry content
let bioChemContent = {
    name: "ESB (Biology and Chemistry)",
    description: "Welcome to the ESB (Biology and Chemistry) section! Here, you will find a variety of resources and materials to help you excel in both biology and chemistry. Whether you're looking for study guides, practice problems, or interactive lessons, we've got you covered. Dive into our comprehensive content to enhance your understanding and boost your performance in these subjects!",
    courseUnits: ["SBE 2201 - Human Ecology", "SBE 2202 - Genetics", "SBE 2203 - Evolution", "SBE 2204 - Biology Education", "SBE 2205 - Animal Physiology", "SED 2201 - Kinetics and Electrochemistry II", "SED 2202 - Analytical and Applied Chemistry", "SED 2203 - Chemistry Methods and Research Methods", "EPS 2201 - General Methods, Educational Technology and School Practice", "EPS 2202 - Learning Measurement and Evaluation"],
    resources: ["Biology textbooks", "Chemistry textbooks", "Online tutorials", "Practice problems", "Interactive simulations"],
    timetable: {
        monday: [
            {time: "8:00AM-10:00AM", course:"Human Ecology", lecturer: "xxxxx", code: "SBE 2201"},
            {time: "10:00AM-12:00PM", course:"Evolution", lecturer: "xxxxx", code: "SBE 2203"},
            {time: "12:00PM-2:00PM", course:"Evolution", lecturer: "xxxxx", code: "SBE 2203"},
            {time: "2:00PM-4:00PM", course:"Analytical and Applied Chemistry", lecturer: "xxxxx", code: "SED 2202"}
        ],
        tuesday: [
            {time: "8:00AM-10:00AM", course:"Genetics", lecturer: "xxxxx", code: "SBE 2202"},
            {time: "10:00AM-12:00PM", course:"Genetics", lecturer: "xxxxx", code: "SBE 2202"},
            {time: "12:00PM-2:00PM", course:"General Methods, Educational Technology and School Practice", lecturer: "Dr. Kishabale Bashir", code: "EPS 2201"},
            {time: "2:00PM-4:00PM", course:"Kinetics and Electrochemistry II", lecturer: "xxxxx", code: "SED 2201"}
        ],
        wednesday: [
            {time: "8:00AM-10:00AM", course:"Biology Education", lecturer: "xxxxx", code: "SBE 2204"},
            {time: "10:00AM-12:00PM", course:"Biology Education", lecturer: "xxxxx", code: "SBE 2204"},
            {time: "12:00PM-2:00PM", course:"General Methods, Educational Technology and School Practice", lecturer: "Dr. Kishabale Bashir", code: "EPS 2201"},
            {time: "2:00PM-4:00PM", course:"Animal Physiology", lecturer: "xxxxx", code: "SBE 2205"}
        ],
        thursday: [
            {time: "8:00AM-10:00AM", course:"Chemistry Methods I and Research Methods", lecturer: "Dr. Nanyonga", code: "SED 2203"},
            {time: "10:00AM-12:00PM", course:"None", lecturer: "None", code: "None"},
            {time: "12:00PM-2:00PM", course:"Learning Measurement and Evaluation", lecturer: "Assoc Prof Joseph Ssenyonga", code: "EPS 2202"},
            {time: "2:00PM-4:00PM", course:"None", lecturer: "None", code: "None"}
        ],
        friday: [
            {time: "8:00AM-10:00AM", course:"None", lecturer: "None", code: "None"},
            {time: "10:00AM-12:00PM", course:"None", lecturer: "None", code: "None"},
            {time: "12:00PM-2:00PM", course:"Learning Measurement and Evaluation", lecturer: "Assoc Prof Joseph Ssenyonga", code: "EPS 2202"},
            {time: "2:00PM-4:00PM", course:"None", lecturer: "None", code: "None"}
        ]
        }
};

//Creating a single function to accept the data as parameters and display the content
function showProgramme(data) {
    document.getElementById('text-area').innerHTML = `<h2>${data.name}</h2>
    <p>${data.description}</p>
    <h3>Course Units</h3>
    <ul>
    ${data.courseUnits.map(Course=>`<li>${Course}</li>`).join('')}
    </ul>
    <h3>Resources</h3>
    <ul>
    ${data.resources.map(resource=>`<li>${resource}</li>`).join('')}
    </ul>
    <h3>Monday</h3>
    ${buildDayTable(data.timetable.monday)}
    <h3>Tuesday</h3>
    ${buildDayTable(data.timetable.tuesday)}
    <h3>Wednesday</h3>
    ${buildDayTable(data.timetable.wednesday)}
    <h3>Thursday</h3>
    ${buildDayTable(data.timetable.thursday)}
    <h3>Friday</h3>
    ${buildDayTable(data.timetable.friday)}`;
}
function buildDayTable(slots) {
    return `
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Course Unit</th>
                <th>Lecturer</th>
                <th> Course Code</th>
            </tr>
        </thead>
        <tbody>
            ${slots.map(slot => `
                <tr>
                    <td>${slot.time}</td>
                    <td>${slot.course}</td>
                    <td>${slot.lecturer}</td>
                    <td>${slot.code}</td>
                </tr>`).join ('')}
        </tbody>
    </table> `
}

/*Adding event listeners to the buttons
These will call the new modified function */
chemMathBtn.addEventListener('click', function() {
    showProgramme(chemMathContent);
});
phyMathBtn.addEventListener('click', function() {
    showProgramme(phyMathContent);
});
bioChemBtn.addEventListener('click', function() {
    showProgramme(bioChemContent)
});