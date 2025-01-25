export const formatDate = (currentDate: Date | undefined | null) =>
  currentDate
    ? `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`
    : null;
