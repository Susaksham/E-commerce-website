import ReactDOM from 'react-dom'
import CartItems from '../../components/Cart/CartItems'
import classes from './Modal.module.css'
import Card from '../Card'
function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.removeCart}></BackDrop>,
        document.getElementById('modal'),
      )}
    </>
  )
}
function BackDrop(props) {
  return (
    <div className={classes.backdrop}>
      <div className={classes.firstChild} onClick={props.onClick}></div>
      <Card>
        <CartItems removeCart={props.onClick}></CartItems>
      </Card>
    </div>
  )
}
export default Modal
