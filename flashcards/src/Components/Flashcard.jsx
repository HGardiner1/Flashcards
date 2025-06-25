import { useState } from 'react'
import './Flashcard.css'

const Flashcard = () => {
    const oopFlashcards = [
        { question: "What is Object-Oriented Programming (OOP)?", answer: "A programming paradigm based on the concept of objects that contain data and methods." },
        { question: "What is an object in OOP?", answer: "An instance of a class that encapsulates data and behavior." },
        { question: "What is a class?", answer: "A blueprint for creating objects, defining their properties and methods." },
        { question: "What is encapsulation?", answer: "The practice of hiding internal object details and exposing only necessary parts." },
        { question: "What is inheritance in OOP?", answer: "A mechanism where one class can inherit properties and methods from another." },
        { question: "What is polymorphism?", answer: "The ability of different classes to be treated as instances of the same class through a common interface." },
        { question: "What is abstraction?", answer: "Hiding complex implementation details and showing only essential features." },
        { question: "What is a constructor?", answer: "A special method used to initialize objects when a class is instantiated." },
        { question: "What is a method?", answer: "A function defined within a class that operates on objects of that class." },
        { question: "What is a property or attribute in OOP?", answer: "A variable associated with a class or an object." },
        { question: "What is method overloading?", answer: "Defining multiple methods with the same name but different parameters." },
        { question: "What is method overriding?", answer: "Redefining a method in a subclass that already exists in the superclass." },
        { question: "What is the difference between a class and an object?", answer: "A class is a template; an object is an instance of a class." },
        { question: "What is a static method?", answer: "A method that belongs to the class rather than any object instance." },
        { question: "What is a private property?", answer: "A property that is only accessible within the class it is defined in." },
        { question: "What is a public method?", answer: "A method that can be accessed from outside the class." },
        { question: "What is multiple inheritance?", answer: "When a class inherits from more than one base class." },
        { question: "What is an interface?", answer: "A contract that defines a set of methods a class must implement." },
        { question: "What is a virtual function?", answer: "A function that can be overridden in derived classes (common in C++/Java)." },
        { question: "What is the 'this' keyword in OOP?", answer: "`this` refers to the current instance of the class." }
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [feedback, setFeedback] = useState('');
    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const nextCard = () => {
        if (currentIndex < oopFlashcards.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setIsFlipped(false);
            setFeedback('');
            setUserInput('');
        }
    };

    const prevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setIsFlipped(false);
            setFeedback('');
            setUserInput('');
        }
    };

    const handleSubmit = () => {
        const trimmedInput = userInput.trim().toLowerCase();
        const correctAnswer = oopFlashcards[currentIndex].answer.toLowerCase();

        if (trimmedInput === correctAnswer) {
            setFeedback('Correct!');
            setCurrentStreak(currentStreak + 1);
            if (currentStreak + 1 > longestStreak) {
                setLongestStreak(currentStreak + 1);
            }
        } else {
            setFeedback('Incorrect, try again.');
            setCurrentStreak(0);
        }
    };

    return (
        <div className="flashcard-container">
            <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
                <div className="flashcard-face flashcard-front">
                    {oopFlashcards[currentIndex].question}
                </div>
                <div className="flashcard-face flashcard-back">
                    {oopFlashcards[currentIndex].answer}
                </div>
            </div>
            <br></br><br></br>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your answer here"
            />
            <button onClick={handleSubmit}>Submit</button>
            <p className="feedback">{feedback}</p>
            <div className="controls">
                <button onClick={prevCard} disabled={currentIndex === 0}>Back</button>
                <button onClick={nextCard} disabled={currentIndex === oopFlashcards.length - 1}>Next</button>
            </div>
            <div className="streak-info">
                <p>Current Streak: {currentStreak}</p>
                <p>Longest Streak: {longestStreak}</p>
            </div>
        </div>
    );
}

export default Flashcard;