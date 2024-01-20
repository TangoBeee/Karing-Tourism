import { useState } from "react"
import { ActivitiesContainer } from "./Activities.style"
import ActivityItem from "../../components/ActivityItem/ActivityItem"
import ScrollToTop from "../../utils/ScrollToTop"
import demoActivities from "../../../demo-activities.json"
import { responsiveTheme } from "../../utils/style-constants"
import { ThemeProvider } from "styled-components"

const Activities = () => {

  const [userSearch, setUserSearch] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const onSearchSubmit = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if(userSearch) setSearchTerm(userSearch)
      else setSearchTerm("")
      console.log(event)
    }
  }

  const searchHandleChange = (event) => {
    setUserSearch(event.target.value)
  }

  return (
    <ThemeProvider theme={ responsiveTheme }>
      <ActivitiesContainer className="container">
        
        <ScrollToTop />

        <div className="search-background">
          <input type="search" name="activity" id="activity" placeholder="Search your activity" onChange={searchHandleChange} onKeyDown={onSearchSubmit} value={userSearch} />
        </div>

        <div className="activities-container">
          <div className="search-info-wrapper">
            <div className="total-activities">8 tours found</div>

            <div className="filter-wrapper">
              <label htmlFor="price-filter">Price: </label>
              <select name="price-filter" id="price" placeholder="Sort">
                <option value="profile">Low to High</option>
                <option value="word">High to Low</option>
              </select>

              <label htmlFor="name-filter">Name: </label>
              <select name="name-filter" id="name" placeholder="Sort">
                <option value="profile">a - z</option>
                <option value="word">z - a</option>
              </select>
            </div>
          </div>

          <div className="activity-wrapper">
          {
              demoActivities.map((activity, idx) => (
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
      </ActivitiesContainer>
    </ThemeProvider>
  )
}

export default Activities