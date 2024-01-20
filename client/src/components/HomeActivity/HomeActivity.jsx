import { ActivityContainer, ViewMore } from "./HomeActivity.style"
import ActivityItem from "../ActivityItem/ActivityItem"
import demoActivities from "../../../demo-activities.json"
import { responsiveTheme } from "../../utils/style-constants"
import { ThemeProvider } from "styled-components"

const Activity = () => {

    return (
        <ThemeProvider theme={ responsiveTheme }>
            <ActivityContainer>
                <div className="activity-heading-container">
                    <h1>Explore Natural Destinations</h1>
                    <p>There are many choices of mountain climbing and other tourist attractions from various regions in Indonesia</p>
                </div>

                <div className="activities-container">

                    <div className="carousel">

                        {
                            demoActivities.slice(0, 3).map((activity, idx) => (
                                <ActivityItem
                                    key={`${activity.activityName}_${idx}`}
                                    activityType={activity.activityType}
                                    activityName={activity.activityName}
                                    activityImage={activity.activityImage}
                                    activityLocation={activity.activityLocation}
                                    activityCurrency={activity.activityCurrency}
                                    activityPrice={activity.activityPrice}
                                />
                            ))
                        }
                    
                    </div>

                </div>

                <ViewMore to="/activities">Discover More</ViewMore>

            </ActivityContainer>
        </ThemeProvider>
    )
}

export default Activity