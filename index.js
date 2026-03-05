function toPeso(amount) {
  return amount.toLocaleString("en-PH", {
    style: "currency",
    currency: "PHP"
  });
}

function toDollar(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

function calculateYearly() {
  var principalInput = document.getElementById("yearlyPrincipal");
  if (!principalInput) return;

  var principal = Number(principalInput.value);
  var annualRate = Number(document.getElementById("yearlyRate").value) / 100;
  var years = Number(document.getElementById("yearlyYears").value);
  var result = document.getElementById("yearlyResult");

  if (principal <= 0 || years <= 0) {
    result.innerText = "Please enter valid principal and years.";
    return;
  }

  var yearlyPayment;
  if (annualRate === 0) {
    yearlyPayment = principal / years;
  } else {
    yearlyPayment =
      (principal * annualRate) /
      (1 - Math.pow(1 + annualRate, -years));
  }

  var totalPaid = yearlyPayment * years;
  var totalInterest = totalPaid - principal;

  result.innerText =
    "Yearly Payment: " + toPeso(yearlyPayment) +
    " | Total Payment: " + toPeso(totalPaid) +
    " | Total Interest: " + toPeso(totalInterest);
}

function calculateMonthly() {
  var principalInput = document.getElementById("monthlyPrincipal");
  if (!principalInput) return;

  var principal = Number(principalInput.value);
  var annualRate = Number(document.getElementById("monthlyRate").value) / 100;
  var months = Number(document.getElementById("monthlyMonths").value);
  var result = document.getElementById("monthlyResult");

  if (principal <= 0 || months <= 0) {
    result.innerText = "Please enter valid principal and months.";
    return;
  }

  var monthlyRate = annualRate / 12;
  var monthlyPayment;

  if (monthlyRate === 0) {
    monthlyPayment = principal / months;
  } else {
    monthlyPayment =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -months));
  }

  var totalPaid = monthlyPayment * months;
  var totalInterest = totalPaid - principal;

  result.innerText =
    "Monthly Payment: " + toPeso(monthlyPayment) +
    " | Total Payment: " + toPeso(totalPaid) +
    " | Total Interest: " + toPeso(totalInterest);
}

function convertDollarToPeso() {
  var dollarInput = document.getElementById("dollarAmount");
  if (!dollarInput) return;

  var dollar = Number(dollarInput.value);
  var result = document.getElementById("currencyResult");
  var rate = 59;

  if (dollar < 0) {
    result.innerText = "Please enter a valid dollar amount.";
    return;
  }

  var peso = dollar * rate;
  result.innerText =
    "Peso Value: " + toPeso(peso) +
    " (Rate: 59.00 PHP/USD)";
}
