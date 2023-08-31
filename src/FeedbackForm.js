import { useState, useContext, useEffect } from "react";
import Card from "./components/shared/Card"
import Button from "./components/shared/Button"
import RatingSelect from "./components/RatingSelect";
import FeedbackContext from "./components/context/FeedbackContext";

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Input must be 10 characters or more & select a rating')
            // setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }


        setText(e.target.value)
    }

    const handleSubmit = e => {
        
        e.preventDefault()

        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            addFeedback(newFeedback)

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
                addFeedback(newFeedback)
            }

            setText('')
            setRating('')
        }

    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your experience with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text"
                        placeholder="Enter your review here..."
                        onChange={handleTextChange}
                        value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
            </form>
            {message && <div className='message'>{message}</div>}
        </Card>
    )
}

export default FeedbackForm