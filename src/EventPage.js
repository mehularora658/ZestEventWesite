import React from 'react';
import { useParams } from 'react-router-dom';
import './EventPage.css'; // Add this line to import the CSS file
import { useNavigate } from 'react-router-dom';
import './App.css';

const EventPage = () => {
    const eventsName = [
        'TALENT HUNT',
        'PERFECT PAIR',
        'WALL OF IMAGINATION',
        'TUG OF WAR',
        'ARM WESTLING',
        'CARDS CASTLE CHALLENGE',
        'DORA THE EXPLORER',
        'BALLON POP RELAY',
        'CUP HEAD CHALLENGE',
        'FUN WITH BLINDFOLD'
    ]
    const eventsDescriptions = [
        'It is a talent hunt competition. Be original. Throw an impact on the crowd. Show your mettle!',
        'Take a test and prove you two are the best!',
        'Painting a wall with the theme of your choice.',
        'Two teams, one mighty rope – let the battle begin!',
        'Arm wrestling is a competitive strength game where two opponents try to pin each other arm Down onto a surface using only arm!',
        'Are you a card ? Because you have got my heart stacked to the ceiling',
        'Are you my final clue ? Because I have been searching for you everywhere ! ',
        'Race to the finish , pop to win – let the ballon pop relay begin !',
        'Steady hands, sharp focus- conquer the cup head challenge with precision and poise !',
        'For this challenge, let your partner be your guide.'
    ]
    const eventsRules = [
        [
            'Individual entry',
            'Max entries per college: Not Limited',
            'Participants have to bring their own CD’s / pen drives for the second round.',
            'Each participant will be given 2 minute to perform.',
            'The decision of judges is fair and final.',
            'No.of Rounds: 2'
        ],
        [
            'The game calls for a couple(boy & girl) entry.',
            'Max entries per college: Not Limited',
            'First and second levels are elimination rounds.The partners need to know each other well.',
            'The third level would be couple participation.The ultimate winner would be decided then.',
            'The decision of judges is fair and final.',
        ],
        [
            'Max entries per college: Not Limited',
            'Participants per team: 3',
            'Participants can use any paints or colors of their choice.',
            'Colors will be provided but will be limited.Teams are allowed to bring their own colors.',
            'No vulgarity.',
            'Time limit:',
            '   For first round: 15 minutes',
            '   For second round: 40 minutes',
            'Decision of judges will be fair and final.'
        ],
        [
            'Max entries per college: Not Limited',
            'Participants per team: 3',
            'Winner will be on the basis of knock outs.',
            'The decision of judges is fair and final.',
            'Teams must pull together, and the rope must remain taut at all time'
        ],
        [
            'Time Limit : 2 min',
            'Matches are one by one',
            'The winner advances to the next round',
            'Elbow must remain on the table all the time'
        ],
        [
            'Individual Entry',
            'Max Time: 5 min',
            'No additional material like glue, tape are allowed',
            'Participants can build in any structure they choose(like Pyramid, multi - levels etc) '
        ],
        [
            'Individual Entry',
            'Max Time: 30 Minutes',
            'No Cheating Allowed',
            'The winner advances to the next round'
        ],
        [
            'Max person per team : 2',
            'Time limit: 5 min',
            'Players can use their body to pop the balloon',
            'No hands or Legs or external objects are allowed to help with popping the ballon'
        ],
        [
            'Individual entry',
            'Participant can only use their body movements to balance their cup',
            'Time Limit: 2 min',
            'The first person to cross the finish line with the cup’s contents intact wins.',
            'Participants can’t touch the cup when the games start'
        ],
        [
            'Participants per team: 2',
            'Max entries per college: Not Limited',
            'Time limit: 2 minutes for 1 team'
        ]

    ]


    const navigate = useNavigate();
    const { eventId } = useParams();
    const [agreeToRules, setAgreeToRules] = React.useState(false);

    const handleCheckboxChange = (event) => {
        setAgreeToRules(event.target.checked);
    };

    const handleRegisterClick = () => {
        if (agreeToRules) {
            // Register the user for the event
            console.log(`User registered for Event ${eventId}`);
            navigate('https://forms.gle/4Yr77dfpBzxf7WRP9', { replace: true });

        } else {
            alert('Please agree to the rules before registering');
        }
    };

    return (
        <>
            <nav>
                <div class="logo">Carnival 2k24</div>
                <ul>

                </ul>
            </nav>
            <div className="container bgcolor"> {/* Add a container div with a class */}
                <h1 className='eventpageHeading'> {eventsName[eventId - 1]}</h1>
                <p className='eventpageDesp'> {eventsDescriptions[eventId - 1]}</p><br></br>
                <h2>Rules</h2>
                <ul>

                    {eventsRules[eventId - 1].map((rule, index) => (
                        <li key={index}>{rule}</li> // Access each element of the array
                    ))}

                </ul>
                <br></br>

                <br></br><br></br>
                <div className='eventPagebtn'>

                    <button onClick={handleRegisterClick} disabled={!agreeToRules} className='register-now'>
                        <a href='https://forms.gle/4Yr77dfpBzxf7WRP9' target='_blank' rel="noreferrer">
                            Register now
                        </a>
                    </button>
                </div>
            </div>
        </>
    );
};

export default EventPage;