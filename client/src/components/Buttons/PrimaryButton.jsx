import { PrimaryButtonContainer } from "./PrimaryButton.style"

const PrimaryButton = ({ buttonText, className }) => {
  return (
    <PrimaryButtonContainer className={className}>
        {buttonText}
    </PrimaryButtonContainer>
  )
}

export default PrimaryButton