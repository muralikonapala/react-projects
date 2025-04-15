const ReusableButton = ({label, btnStyle, btnClick}) => {
  return (
    <button style={btnStyle} onClick={btnClick}>{label}</button>
  )
}
export default ReusableButton;