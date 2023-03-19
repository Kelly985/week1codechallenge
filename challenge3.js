const basicPay = 10000;
const benefits = 2000;

function netPay(basicPay, benefits) {
  const kraTax = [10000, 19740, 29380, 39020, 48660, 58300];
  const nhifTax = [150, 300, 400, 500, 600, 750, 850, 900, 950, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500];
  const nssfTaxRate = 0.06;
  
  const grossPay = basicPay + benefits;
  let kraTaxRate =0.25;
  for (let i = 0; i < kraTax.length; i++) {
    if (grossPay * 12 <= kraTax[i]) {
      kraTaxRate = kraTax[i];
      break;
    }
  }
  const payee = kraTaxRate * (grossPay - (24376/12));
  const yourPayee = parseInt(payee);
  
  let nhifTaxRate = 0;
  for (let i = 0; i < nhifTax.length; i++) {
    if (grossPay >= (i + 1) * 1000) {
      nhifTaxRate = nhifTax[i];
    } else {
      break;
    }
  }
  const nhifDeductions = nhifTaxRate;
  const nssfDeductions = grossPay * nssfTaxRate;
  const netPay = grossPay - yourPayee - nhifDeductions - nssfDeductions;
  const yourNetPay = parseInt(netPay);
  
  return {
    grossPay,
   yourPayee,
    nhifDeductions,
    nssfDeductions,
    yourNetPay
  };
}

const netSalary = netPay(basicPay, benefits);

console.log("Gross Pay: " + netSalary.grossPay);
console.log("PAYEe: " + netSalary.yourPayee);
console.log("NHIF Deductions: " + netSalary.nhifDeductions);
console.log("NSSF Deductions: " + netSalary.nssfDeductions);
console.log("Net Pay: " + netSalary.yourNetPay);
