$(document).ready(function() {

     //Store min and max income for each household size.
     var swrIncomeRanges = {
         a108_01: {optionValue: "a107_01", minIncome: "$27,180", maxIncome: "$58,688"},
         a108_02: {optionValue: "a107_02", minIncome: "$36,620", maxIncome: "$76,744"},
         a108_03: {optionValue: "a107_03", minIncome: "$46,060", maxIncome: "$94,802"},
         a108_04: {optionValue: "a107_04", minIncome: "$55,500", maxIncome: "$112,860"},
         a108_05: {optionValue: "a107_05", minIncome: "$64,940", maxIncome: "$130,918"},
         a108_06: {optionValue: "a107_06", minIncome: "$74,380", maxIncome: "$148,976"},
         a108_07: {optionValue: "a107_07", minIncome: "$83,820", maxIncome: "$152,362"},
         a108_08: {optionValue: "a107_08", minIncome: "$93,260", maxIncome: "$155,746"}
     }
     $("#q108").change(function(){
         $("#q107").prop("disabled", true);

         for(key in swrIncomeRanges){
             if($("#q108 option:selected").val() == key){

                 let optionVal = swrIncomeRanges[$("#q108 option:selected").val()].optionValue;
                 let swrMinIncome = swrIncomeRanges[$("#q108 option:selected").val()].minIncome;
                 let swrMaxIncome = swrIncomeRanges[$("#q108 option:selected").val()].maxIncome;

                 let swrTemplate =
                 `<option selected disabled hidden style='display: none' value=''></option>
                 <option value="belowswr">Below ${swrMinIncome}</option>
                 <option value="${optionVal}">${swrMinIncome} -${swrMaxIncome} </option>
                 <option value="aboveswr">Above ${swrMaxIncome}</option>
                 <option value="a108_10">Skip/I prefer not to answer</option>`;

                 $("#q107").empty();
                 $("#q107").append(swrTemplate);

                 $("#q107").prop("disabled", false);
             };
         };
     });
  });
