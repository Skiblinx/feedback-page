import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'This is coming from the context',
        rating: 10,
    }])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const editFeedback = item => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const addFeedback = newFeedback => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = id => {
        if (window.confirm(`Are you sure you wan to delete?`)) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext