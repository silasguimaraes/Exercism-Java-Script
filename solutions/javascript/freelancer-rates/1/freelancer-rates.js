const HOURS_PER_DAY = 8;
const BILLABLE_DAYS_PER_MONTH = 22;

export function dayRate(ratePerHour) {
  return ratePerHour * HOURS_PER_DAY;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const fullMonths = Math.floor(numDays / BILLABLE_DAYS_PER_MONTH);
  const remainingDays = numDays % BILLABLE_DAYS_PER_MONTH;

  const monthlyRate = BILLABLE_DAYS_PER_MONTH * dayRate(ratePerHour);
  const discountedMonthlyPrice = fullMonths * monthlyRate * (1 - discount);
  const remainingDaysPrice = remainingDays * dayRate(ratePerHour);

  return Math.ceil(discountedMonthlyPrice + remainingDaysPrice);
}
