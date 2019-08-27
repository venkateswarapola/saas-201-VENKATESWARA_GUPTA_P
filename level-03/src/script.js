// This is a closure function https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
(function() {
  var name=document.getElementById("name");
  var email=document.getElementById("email");
  var phone=document.getElementById("phone");
  var department1 = document.getElementById("department1");
  var department2=document.getElementById("department2");

  var initialize = function() {
  var button=document.querySelector("button");
  button.addEventListener("click", onSubmit);
  department1.addEventListener("change", disableDuplicateSecondaryDepartment);
  };

  var disableDuplicateSecondaryDepartment = function() {
    for(var i=0;i<department2.length;i++)
    {
      if(department2.options[i].value===department1.value)
        {
          department2.options[i].disabled=true;
        }
      else
        {
          department2.options[i].disabled=false;
        }
    }
    department2.selectedIndex=1;
    if(department1.selectedIndex===1)
    {
      department2.selectedIndex=2;
    }
  }

  var constructData = function() {
    var data = {};

    // 3. Construct data from the form here. Please ensure that the keys are the names of input elements
    data[name.name]=name.value;
    data[phone.name]=phone.value;
    data[email.name]=email.value;
    data[department1.name]=department1.value;
    data[department2.name]=department2.value;
    return data;
  }

  var validateResults = function(data) {
    var isValid = true;
    var reg = /^([a-zA-Z0-9\.]+)(@college.edu)$/;
    if(data[name.name].length>100){
    isValid =false;}
    else if(data[phone.name].length>10){
    isValid=false;}
    else if(!reg.test(data[email.name])){
    isValid=false;}
    else if(department1.value===department2.value){
      isValid=false;
    }
    else{
    isValid=true;}
    console.log(reg.test(data[email.name]));
    return isValid;
  };

  var onSubmit = function(event) {
    // 5. Figure out how to avoid the redirection on form submit
    event.preventDefault()
    var data = constructData();
    if (validateResults(data)) {
      printResults(data);
      console.log(data);
    } else {
      var resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = '';
      resultsDiv.classList.add("hide");
    }
  };

  var printResults = function(data) {
    var constructElement = function([key, value]) {
      return `<p class='result-item'>${key}: ${value}</p>`;
    };

    var resultHtml = (Object.entries(data) || []).reduce(function(innerHtml, keyValuePair) {
      debugger
      return innerHtml + constructElement(keyValuePair);
    }, '');
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = resultHtml;
    resultsDiv.classList.remove("hide");
  };

  /*
    Initialize the javascript functions only after the html DOM content has loaded.
    This is to ensure that the elements are present in the DOM before binding any event listeners to them.
  */
  document.addEventListener('DOMContentLoaded', initialize);
})();
