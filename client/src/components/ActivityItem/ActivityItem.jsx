import PrimaryButton from "../Buttons/PrimaryButton"
import { ActivityItemContainer } from "./ActivityItem.style"
import { MdLocationOn } from "react-icons/md"
import * as palette from "../../utils/style-constants"
import { ThemeProvider } from "styled-components"

const ActivityItem = ({ activityType, activityName, activityImage, activityLocation, activityCurrency, activityPrice }) => {
  return (
    <ThemeProvider theme={ palette.responsiveTheme }>
        <ActivityItemContainer>
            <div style={{backgroundImage: `url(${activityImage})`}} className="activity-img"></div>

            <div className="activity-content">
                <div className="activity-info">
                    <p className="activity-type">{activityType}</p>

                    <h6 className="activity-name">{activityName}</h6>

                    <div className="activity-location-wrapper">
                        <MdLocationOn color={palette.SECONDARY_TEXT_COLOR} />
                        <p className="activity-location">{activityLocation}</p>
                    </div>
                </div>

                <div className="activity-price-container">
                    <div className="price-wrapper">
                        <span className="price-currency">
                            {activityCurrency}
                        </span>
                        &nbsp;
                        <span className="price">{activityPrice}</span>
                        /person
                    </div>

                    <PrimaryButton buttonText={"Book"} />
                </div>

            </div>
        </ActivityItemContainer>
    </ThemeProvider>
  )
}

export default ActivityItem