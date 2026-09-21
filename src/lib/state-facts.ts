// Real, independently-verifiable facts only (capital + well-known major metro areas) — used to
// give each state page genuine, differentiated content instead of a pure find-replace template.
// No population figures, cost data, or anything else that could go stale or be wrong without
// a citation; those are exactly the kind of specifics we don't state without a real source.
export const STATE_FACTS: Record<string, { capital: string; metros: string[] }> = {
  AL: { capital: "Montgomery", metros: ["Birmingham", "Huntsville", "Mobile"] },
  AK: { capital: "Juneau", metros: ["Anchorage", "Fairbanks"] },
  AZ: { capital: "Phoenix", metros: ["Tucson", "Mesa", "Scottsdale"] },
  AR: { capital: "Little Rock", metros: ["Fayetteville", "Fort Smith"] },
  CA: { capital: "Sacramento", metros: ["Los Angeles", "San Diego", "San Francisco"] },
  CO: { capital: "Denver", metros: ["Colorado Springs", "Aurora", "Fort Collins"] },
  CT: { capital: "Hartford", metros: ["Bridgeport", "New Haven", "Stamford"] },
  DE: { capital: "Dover", metros: ["Wilmington", "Newark"] },
  DC: { capital: "Washington, D.C.", metros: ["Washington, D.C."] },
  FL: { capital: "Tallahassee", metros: ["Miami", "Orlando", "Tampa", "Jacksonville"] },
  GA: { capital: "Atlanta", metros: ["Augusta", "Savannah", "Columbus"] },
  HI: { capital: "Honolulu", metros: ["Hilo", "Kailua"] },
  ID: { capital: "Boise", metros: ["Meridian", "Nampa", "Idaho Falls"] },
  IL: { capital: "Springfield", metros: ["Chicago", "Aurora", "Naperville"] },
  IN: { capital: "Indianapolis", metros: ["Fort Wayne", "Evansville", "South Bend"] },
  IA: { capital: "Des Moines", metros: ["Cedar Rapids", "Davenport"] },
  KS: { capital: "Topeka", metros: ["Wichita", "Overland Park", "Kansas City"] },
  KY: { capital: "Frankfort", metros: ["Louisville", "Lexington"] },
  LA: { capital: "Baton Rouge", metros: ["New Orleans", "Shreveport"] },
  ME: { capital: "Augusta", metros: ["Portland", "Lewiston"] },
  MD: { capital: "Annapolis", metros: ["Baltimore", "Rockville"] },
  MA: { capital: "Boston", metros: ["Worcester", "Springfield", "Cambridge"] },
  MI: { capital: "Lansing", metros: ["Detroit", "Grand Rapids", "Ann Arbor"] },
  MN: { capital: "Saint Paul", metros: ["Minneapolis", "Rochester"] },
  MS: { capital: "Jackson", metros: ["Gulfport", "Southaven"] },
  MO: { capital: "Jefferson City", metros: ["Kansas City", "St. Louis", "Springfield"] },
  MT: { capital: "Helena", metros: ["Billings", "Missoula"] },
  NE: { capital: "Lincoln", metros: ["Omaha"] },
  NV: { capital: "Carson City", metros: ["Las Vegas", "Reno", "Henderson"] },
  NH: { capital: "Concord", metros: ["Manchester", "Nashua"] },
  NJ: { capital: "Trenton", metros: ["Newark", "Jersey City"] },
  NM: { capital: "Santa Fe", metros: ["Albuquerque", "Las Cruces"] },
  NY: { capital: "Albany", metros: ["New York City", "Buffalo", "Rochester"] },
  NC: { capital: "Raleigh", metros: ["Charlotte", "Greensboro", "Durham"] },
  ND: { capital: "Bismarck", metros: ["Fargo", "Grand Forks"] },
  OH: { capital: "Columbus", metros: ["Cleveland", "Cincinnati", "Toledo"] },
  OK: { capital: "Oklahoma City", metros: ["Tulsa", "Norman"] },
  OR: { capital: "Salem", metros: ["Portland", "Eugene"] },
  PA: { capital: "Harrisburg", metros: ["Philadelphia", "Pittsburgh", "Allentown"] },
  RI: { capital: "Providence", metros: ["Warwick", "Cranston"] },
  SC: { capital: "Columbia", metros: ["Charleston", "Greenville"] },
  SD: { capital: "Pierre", metros: ["Sioux Falls", "Rapid City"] },
  TN: { capital: "Nashville", metros: ["Memphis", "Knoxville", "Chattanooga"] },
  TX: { capital: "Austin", metros: ["Houston", "Dallas", "San Antonio"] },
  UT: { capital: "Salt Lake City", metros: ["West Valley City", "Provo"] },
  VT: { capital: "Montpelier", metros: ["Burlington"] },
  VA: { capital: "Richmond", metros: ["Virginia Beach", "Norfolk", "Arlington"] },
  WA: { capital: "Olympia", metros: ["Seattle", "Spokane", "Tacoma"] },
  WV: { capital: "Charleston", metros: ["Huntington", "Morgantown"] },
  WI: { capital: "Madison", metros: ["Milwaukee", "Green Bay"] },
  WY: { capital: "Cheyenne", metros: ["Casper", "Laramie"] },
};

export function formatMetros(metros: string[]): string {
  if (metros.length <= 1) return metros[0] ?? "";
  if (metros.length === 2) return `${metros[0]} and ${metros[1]}`;
  return `${metros.slice(0, -1).join(", ")}, and ${metros[metros.length - 1]}`;
}
