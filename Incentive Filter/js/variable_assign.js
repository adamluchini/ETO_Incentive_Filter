$(document).ready(function() {

  $("form#questions").submit(function(event) {
  var i_am_a = $("select#i-am-a").val();
  var my_home = $("select#my-home").val();
  var primary_heat = $("select#primary-heat").val();
  var elec_utility = $("select#elec-utility").val();
  var gas_utility = $("select#gas-utility").val();
  var state = $("select#state").val();
  var q107 = $("select#q107").val();
  var q108 = $("select#q108").val();

/* Variable list */
  var no_value = 0;

  var homeowner = 0;
  var renter = 0;
  var landlord = 0;
  var i_am_a_no_value = 0;

  var single_family = 0;
  var large_multifamily = 0;
  var small_multifamily = 0;
  var manufactured = 0;
  var my_home_no_value = 0;

  var elec_resistance = 0;
  var efaf = 0;
  var gfaf = 0;
  var heat_pump = 0;
  var dhp = 0;
  var other_heat = 0;
  var primary_heat_no_value = 0;

  var pge = 0;
  var pac = 0;
  var other_elec = 0;
  var elec_utility_no_value = 0;

  var nwn = 0;
  var cng = 0;
  var avi = 0;
  var no_gas = 0;
  var gas_utility_no_value = 0;

  var swr = 0;
  var belowswr = 0;
  var aboveswr = 0;
  var no_income = 0;
  var income_no_value = 0;

  var oregon = 0;
  var washington = 0;
  var state_no_value = 0;

  /* Resident type: Drives results exclusive to homeowners, renters or landlords */
  if (i_am_a.includes("homeowner")) {
  homeowner++;
  }
  if (i_am_a.includes("renter")) {
  renter++;
  }
  if (i_am_a.includes("landlord")) {
  landlord++;
  }
  if (i_am_a.includes("no_value")) {
  i_am_a_no_value++;
  }

  /* Housing type: Drives results exclusive to single family, manufactured, small multifamily or large multifamily */

  if (my_home.includes("single-family")) {
  single_family++;
  }

  if (my_home.includes("apartment") || my_home.includes("condo")) {
  large_multifamily++;
  }

  if (my_home.includes("townhouse") || my_home.includes("duplex") || my_home.includes("triplex") || my_home.includes("fourplex")) {
  small_multifamily++;
  }

  if (my_home.includes("manufactured")) {
  manufactured++;
  }

  if (my_home.includes("no_value")) {
  my_home_no_value++;
  no_value++;
  }

  /* Primary heating source: Drives results exclusive to a particular heating system (either to be replaced or currently heated with) */

  if (primary_heat.includes("elec-resistance")) {
  elec_resistance++;
  }

  if (primary_heat.includes("efaf")) {
  efaf++;
  }

  if (primary_heat.includes("gfaf")) {
  gfaf++;
  }

  if (primary_heat.includes("heat-pump")) {
  heat_pump++;
  }

  if (primary_heat.includes("dhp")) {
  dhp++;
  }

  if (primary_heat.includes("other-heat")) {
  other_heat++;
  }

  if (primary_heat.includes("no_value")) {
  primary_heat_no_value++;
  }

  /* Utility providers: Drives results exclusive to a particular electric or gas provider */

  if (elec_utility.includes("pge")) {
  pge++;
  }

  if (elec_utility.includes("pac")) {
  pac++;
  }

  if (elec_utility.includes("other-elec")) {
  other_elec++;
  }

  if (elec_utility.includes("no_value")) {
  elec_utility_no_value++;
  no_value++;
  }

  if (gas_utility.includes("nwn")) {
  nwn++;
  }

  if (gas_utility.includes("cng")) {
  cng++;
  }

  if (gas_utility.includes("avi")) {
  avi++;
  }

  if (gas_utility.includes("no-gas")) {
  no_gas++;
  }

  if (gas_utility.includes("no_value")) {
  gas_utility_no_value++;
  }

  /* "Zip code": Drives results exclusive to a particular state */

  if (state.includes("oregon")) {
  oregon++;
  }

  if (state.includes("washington")) {
  washington++;
  }

  if (state.includes("no_value")) {
  state_no_value++;
  no_value++;
  }

  /* Savings Within Reach: Drives results exclusive to income qualified customers */

  if (q108 === "a108_01" && q107 === "a107_01" || q108 === "a108_02" && q107 === "a107_02" || q108 === "a108_03" && q107 === "a107_03" || q108 === "a108_04" && q107 === "a107_04" || q108 === "a108_05" && q107 === "a107_05" || q108 === "a108_06" && q107 === "a107_06" || q108 === "a108_07" && q107 === "a107_07" || q108 === "a108_08" && q107 === "a107_08" || q108 === "a108_09" && q107 === "a107_09") {
  swr++;
  }

  if (q107 === "belowswr"){
  belowswr++;
  }

  if (q107 === "aboveswr"){
  aboveswr++;
  }

  if (q107 === "no_value"){
  income_no_value++;
  }

  /* Global AC Incentive Display Logic - completely hide central air if there is no valid utility, the housing stock is large multifamily or the site is in Washington */

  if (other_elec === 1 || washington === 1 || large_multifamily === 1 || no_value > 0) {
  $(".central-air").hide();
  } else {
  $(".central-air").show();
  }

  /* Global On Bill Display Logic - display OBR and SWROBR if the above parameters are met and the home is owner occupied and the home has Pacific Power or PGE+NW Natural.*/

  if (homeowner !== 1) {
  $(".central-air-all-obr").hide();
  } else if (pge === 1 && nwn === 1) {
  $(".central-air-all-obr").show();
  } else if (pac === 1 ) {
  $(".central-air-all-obr").show();
  } else {
  $(".central-air-all-obr").hide();
  }

  /* OBR vs SWR OBR Display Logic - Display standard OBR if customer is above income qualified guidelines and SWROBR if the customer is within or below.*/

  if (swr === 1 || belowswr === 1) {
  $(".central-air-swrobr").show();
  $(".central-air-obr").hide();
  } else if (aboveswr === 1 || income_no_value === 1) {
  $(".central-air-obr").show();
  $(".central-air-swrobr").hide();
  } else {
  $(".central-air-swrobr").hide();
  }

  /* More info needed logic*/

  if (other_elec === 1 || washington === 1 || large_multifamily === 1 || no_value > 0) {
  $(".dnq-incentive-column").show();
  $(".dnq-obr-column").hide();  
  } else {
  $(".dnq-incentive-column").hide();
  $(".dnq-obr-column").show();
  }

  if (large_multifamily === 1 || my_home_no_value === 1 ) {
  $("#dnq-housing-stock").show();
  $(".dnq-incentive-column").show();
  } else {
  $("#dnq-housing-stock").hide();
  }

  if (other_elec === 1 || elec_utility_no_value === 1 ) {
  $("#dnq-elec-provider").show();
  } else {
  $("#dnq-elec-provider").hide();
  }

  if (washington === 1 || state_no_value === 1) {
  $("#dnq-state").show();
  } else {
  $("#dnq-state").hide();
  }

  if (pge === 1 && nwn === 1 || pac === 1) {
  $("#dnq-obr").hide();
  } else {
  $("#dnq-obr").show();
  }

  if (homeowner === 1) {
  $("#dnq-resident-type").hide();
  } else {
  $("#dnq-resident-type").show();
  }


  console.log("Customer is interested in:", (swr));
  console.log("Customer is interested in:", (belowswr));
  console.log("Customer is interested in:", (aboveswr));
  console.log("pge:", (pge));
  console.log("pac:", (pac));
  console.log("other elec:", (other_elec));
  console.log("no elec value:", (elec_utility_no_value));
  console.log("nwn:", (nwn));
  console.log("cng:", (cng));
  console.log("avi:", (avi));
  console.log("washington:", (washington));
  console.log("oregon:", (oregon));
  console.log("no state:", (state_no_value));
  console.log("single fam home:", (single_family));
  console.log("large mf home:", (large_multifamily));
  console.log("small mf home:", (small_multifamily));
  console.log("manufactured:", (manufactured));
  console.log("no value:", (no_value));
    event.preventDefault();
   });
  });
