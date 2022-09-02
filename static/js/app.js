// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedDate = d3.select("#datetime");
    let changedCity = d3.select("#city");
    let changedState = d3.select("#state");
    let changedCountry = d3.select("#country");
    let changedShape = d3.select("#shape");

    // 4b. Save the value that was changed as a variable.
    let valueDate = changedDate.property("value");
    let valueCity = changedCity.property("value");
    let valueState = changedState.property("value");
    let valueCountry = changedCountry.property("value");
    let valueShape = changedShape.property("value");


    // 4c. Save the id of the filter that was changed as a variable.
    let filteredDate = valueDate.attr(datetime);
    let filteredCity = valueCity.attr(city);
    let filteredState = valueState.attr(state);
    let filteredCountry = valueCountry.attr(country);
    let filteredShape = valueShape.attr(shape);

  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    
    // Check to see if a date was entered and filter the data using that date.
    if (filteredDate) {
      // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
      filters[datetime] = row.append(filteredData.filter(row => row.datetime === filteredDate));
    }
    else {
      delete filters[datetime];
    }

      // Check to see if a city was entered and filter the data using that city.  
    if (filteredCity) {
      filters[city] = row.append(filteredData.filter(row => row.city === filteredCity));
    }
    else {
      delete filters[city];
    }

      // Check to see if a state was entered and filter the data using that state.     
    if (filteredState) {
      filters[state] = row.append(filteredData.filter(row => row.state === filteredState));
    }
    else {
      delete filters[state];
    }

      // Check to see if a country was entered and filter the data using that country.    
    if (filteredCountry) {
      filters[country] = row.append(filteredData.filter(row => row.country === filteredCountry));
    }
    else {
      delete filters[country];
    }

      // Check to see if a shape was entered and filter the data using that shape.    
    if (filteredShape) {
      filters[shape] = row.append(filteredData.filter(row => row.shape === filteredShape));
    }
    else {
      delete filters[shape];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;

  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    filters.forEach(element => filters[element] === filteredData)
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData)
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("#filter-btn").on("click", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
