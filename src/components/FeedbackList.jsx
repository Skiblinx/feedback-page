import Feedbackitem from "./Feedbackitem"
import { useContext } from "react"
// import PropTypes from 'prop-types' 
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {

    const {feedback} = useContext(FeedbackContext)
   
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    } else {

    }

  return (
    <div className="feedbacl-list">
        {feedback.map((item) => (
            <Feedbackitem key={item.id} item={item} />
        ))}
    </div>
  )
}
// FeedbackList.prototype = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }
export default FeedbackList